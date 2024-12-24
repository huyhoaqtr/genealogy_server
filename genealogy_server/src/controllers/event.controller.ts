/**
 * Author: Jinn
 * Date: 2024-10-31
 */

import { NextFunction, Request, Response } from "express";
import { sendMixedMessage } from "firebase/notification";
import { StatusCodes } from "http-status-codes";
import eventModel from "~/models/event.schema";
import notificationModel from "~/models/notification.schema";
import userModel from "~/models/user.schema";
import ApiError from "~/utils/api-error";
import { sendSuccessResponse } from "~/utils/api-response";

const eventController = {
  createEvent: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { title, desc, startDate, startTime } = req.body;
      const user: any = await userModel
        .findById(userId)
        .select("-password")
        .populate({
          path: "info",
          select: "-couple -children",
        })
        .populate({
          path: "tribe",
          select: "members",
          populate: {
            path: "members",
            select: "fcmKey",
          },
        })
        .exec();

      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy user");
      }
      const newEvent = await eventModel.create({
        user: userId,
        title,
        desc,
        startDate,
        startTime,
        tribe: user.tribe.id,
      });

      const response = await eventModel.findById(newEvent.id).populate({
        path: "user",
        select: "_id info",
        populate: {
          path: "info",
          select: "-couple -children",
        },
      });

      let fcmTokens: string[] = [];
      const notiTitle = `${user.info.fullName} đã tạo một sự kiện`;
      const notiContent = response?.title;
      await Promise.all(
        user.tribe.members
          .filter((member: any) => member.id !== userId)
          .map(async (member: any) => {
            fcmTokens = [...fcmTokens, ...member.fcmKey];
            await notificationModel.create({
              title: notiTitle,
              desc: notiContent,
              user: member.id,
              type: "EVENT",
              screenId: response?.id,
            });
          })
      );

      if (fcmTokens.length > 0) {
        await sendMixedMessage({
          title: notiTitle,
          body: notiContent!,
          data: {
            screen: "EVENT",
            screenId: response?.id,
          },
          tokens: fcmTokens,
        });
      }

      return sendSuccessResponse(res, "Thành công", response, StatusCodes.OK);
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }
      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
      );
    }
  },
  getEvent: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const eventId = req.params.id;
      const response = await eventModel.findById(eventId).populate({
        path: "user",
        select: "_id info",
        populate: {
          path: "info",
          select: "-couple -children",
        },
      });

      if (!response) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy du lieu");
      }

      return sendSuccessResponse(res, "Thành công", response, StatusCodes.OK);
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }
      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
      );
    }
  },
  getAllEvent: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { page = 1, limit = 1000, startDate, endDate } = req.query;
      const skip = (Number(page) - 1) * Number(limit);

      const user = await userModel.findById(userId);
      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy user");
      }

      const filter: any = { tribe: user.tribe };
      if (startDate || endDate) {
        filter.startDate = {};
        if (startDate) {
          filter.startDate.$gte = new Date(startDate as string);
        }
        if (endDate) {
          filter.startDate.$lte = new Date(endDate as string);
        }
      }

      const events = await eventModel
        .find(filter)
        .skip(skip)
        .limit(Number(limit))
        .sort({ createdAt: -1 })
        .populate({
          path: "user",
          select: "-password",
          populate: {
            path: "info",
            select: "-children -couple",
          },
        })
        .exec();

      const totalFeeds = await eventModel.countDocuments({
        tribe: user?.tribe,
      });

      const totalPages = Math.ceil(totalFeeds / Number(limit));
      const pagingResponse = {
        data: events,
        meta: {
          page: Number(page),
          limit: Number(limit),
          total: totalFeeds,
          totalPages,
        },
      };

      return sendSuccessResponse(
        res,
        "Lây ra danh sách sự kiện thành công",
        pagingResponse,
        StatusCodes.CREATED
      );
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }
      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
      );
    }
  },
  updateEvent: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const eventId = req.params.id;
      const { title, desc, startDate, startTime } = req.body;
      const user = await userModel.findById(userId).exec();
      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy user");
      }

      const existingEvent = await eventModel
        .findOne({
          _id: eventId,
          user: userId,
        })
        .populate({
          path: "user",
          select: "_id info",
          populate: {
            path: "info",
            select: "-children -couple",
          },
        })
        .exec();

      if (!existingEvent) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy sự kiện");
      }
      if (title) existingEvent.title = title;
      if (desc) existingEvent.desc = desc;
      if (startTime) existingEvent.startTime = startTime;
      if (startDate) existingEvent.startDate = startDate;

      await existingEvent.save();

      return sendSuccessResponse(
        res,
        "Cập nhật sự kiện thành công",
        existingEvent,
        StatusCodes.CREATED
      );
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }
      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
      );
    }
  },
  deleteEvent: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const eventId = req.params.id;

      const existingEvent = await eventModel.findOne({
        user: userId,
        _id: eventId,
      });

      if (!existingEvent) {
        throw new ApiError(StatusCodes.NOT_FOUND, "không tìm thấy dữ liệu");
      }
      await existingEvent.deleteOne();
      return sendSuccessResponse(
        res,
        "Xoá sự kiện thành công",
        null,
        StatusCodes.OK
      );
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }
      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
      );
    }
  },
  cronEvent: async () => {
    try {
      console.log("cron job is running");
      const currentDate = new Date();
      const fiveDaysLater = new Date(currentDate);
      fiveDaysLater.setDate(fiveDaysLater.getDate() + 5);

      const events: any = await eventModel.find({
        startDate: { $gte: currentDate, $lte: fiveDaysLater },
      });

      console.log("events", events);

      await Promise.all(
        events.map(async (event: any) => {
          const timeDiff = event.startDate.getTime() - currentDate.getTime();

          let notiTitle;
          let notiContent;

          if (timeDiff === 0) {
            notiTitle = "Đã tới thời gian diễn ra sự kiện!";
            notiContent = `Sự kiện ${event.title} đang diễn ra`;
          } else if (timeDiff <= 3 * 24 * 60 * 60 * 1000) {
            notiTitle = "Đừng bỏ lỡ!!!";
            notiContent = `Sự kiện ${event.title} sắp bắt đầu!`;
          }

          const fcmTokens: any = [];

          const eventTribe = await event.populate({
            path: "tribe",
            select: "members",
            populate: {
              path: "members",
              select: "fcmKey",
            },
          });

          await Promise.all(
            eventTribe.tribe.members.map(async (member: any) => {
              fcmTokens.push(...member.fcmKey);
            })
          );
          if (notiContent && notiTitle && fcmTokens.length > 0)
            await sendMixedMessage({
              title: notiTitle,
              body: notiContent,
              data: {
                screen: "EVENT",
                screenId: event._id.toString(),
              },
              tokens: fcmTokens,
            });
        })
      );
    } catch (error) {
      console.error("Error executing cron job:", error);
    }
  },
};

export default eventController;

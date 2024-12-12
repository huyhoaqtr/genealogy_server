/**
 * Author: Jinn
 * Date: 2024-10-31
 */

import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import eventModel from "~/models/event.schema";
import userModel from "~/models/user.schema";
import ApiError from "~/utils/api-error";
import { sendSuccessResponse } from "~/utils/api-response";

const eventController = {
  createEvent: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { title, desc, startDate, startTime } = req.body;
      const user = await userModel.findById(userId).exec();
      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy user");
      }
      const newEvent = await eventModel.create({
        user: userId,
        title,
        desc,
        startDate,
        startTime,
        tribe: user.tribe,
      });

      const response = await eventModel.findById(newEvent.id).populate({
        path: "user",
        select: "_id info",
        populate: {
          path: "info",
          select: "-couple -children",
        },
      });

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
      const { page = 1, limit = 1000 } = req.query;
      const skip = (Number(page) - 1) * Number(limit);

      const user = await userModel.findById(userId);
      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy user");
      }

      const events = await eventModel
        .find({ tribe: user?.tribe })
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
};

export default eventController;

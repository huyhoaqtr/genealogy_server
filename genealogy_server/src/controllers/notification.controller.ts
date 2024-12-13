import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import notificationModel from "~/models/notification.schema";
import userModel from "~/models/user.schema";
import ApiError from "~/utils/api-error";
import { sendSuccessResponse } from "~/utils/api-response";

const notificationController = {
  createNotification: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { title, desc, type, screenId } = req.body;

      if (!title || !desc || !type || !screen) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Thieu thong so");
      }

      const newNotification = await notificationModel.create({
        title,
        desc,
        type,
        ...(screenId && { screenId }),
      });

      return sendSuccessResponse(
        res,
        "Thành công",
        newNotification,
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

  getAllNotificationByUser: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user.id;
      const { page = 1, limit = 1000 } = req.query;
      const skip = (Number(page) - 1) * Number(limit);
      const user = await userModel.findById(userId).exec();

      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy user");
      }

      const allNotifications = await notificationModel
        .find({ user: userId })
        .skip(skip)
        .limit(Number(limit))
        .sort({ createdAt: -1 })
        .exec();

      const totalNotifications = await notificationModel.countDocuments({
        user: userId,
      });
      const totalPages = Math.ceil(totalNotifications / Number(limit));

      const pagingResponse = {
        data: allNotifications,
        meta: {
          page: Number(page),
          limit: Number(limit),
          total: totalNotifications,
          totalPages,
        },
      };

      return sendSuccessResponse(
        res,
        "Thành công",
        pagingResponse,
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

  updateIsReadNotification: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user.id;
      const { id } = req.params;

      const notification = await notificationModel
        .findOneAndUpdate(
          { _id: id, user: userId },
          { isRead: true },
          { new: true }
        )
        .exec();

      if (!notification) {
        throw new ApiError(
          StatusCodes.NOT_FOUND,
          "Không tìm thấy notification"
        );
      }

      return sendSuccessResponse(
        res,
        "Thành công",
        notification,
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

export default notificationController;

import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import userModel from "~/models/user.schema";
import { UserVote, VoteSessionModel } from "~/models/vote.model";
import ApiError from "~/utils/api-error";
import { sendSuccessResponse } from "~/utils/api-response";

const voteController = {
  createVoteSession: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user.id;
      const { title, desc, options } = req.body;

      if (!title || !desc || !options || !Array.isArray(options)) {
        return next(
          new ApiError(
            StatusCodes.BAD_REQUEST,
            "Invalid input. Please provide title, description, and options"
          )
        );
      }

      const user = await userModel.findById(userId).exec();

      const voteSession = await VoteSessionModel.create({
        title,
        desc,
        options: options.map((text: string) => ({ text, votes: [] })),
        creator: userId,
        tribe: user?.tribe,
      });

      const populatedVoteSession = await VoteSessionModel.findById(
        voteSession.id
      )
        .populate({
          path: "creator",
          select: "info",
          populate: {
            path: "info",
            select: "-children -couple",
          },
        })
        .populate({
          path: "options.votes",
          select: "_id info",
          populate: {
            path: "info",
            select: "-children -couple",
          },
        });

      return sendSuccessResponse(
        res,
        "Tạo vote session thanh cong",
        populatedVoteSession,
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

  getVoteSession: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const user = await userModel.findById(userId).exec();
      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }
      const voteSession = await VoteSessionModel.find({
        tribe: user?.tribe,
      })
        .populate({
          path: "creator",
          select: "info",
          populate: {
            path: "info",
            select: "-children -couple",
          },
        })
        .populate({
          path: "options.votes",
          select: "_id info",
          populate: {
            path: "info",
            select: "-children -couple",
          },
        })
        .sort({ createdAt: -1 })
        .exec();

      return sendSuccessResponse(
        res,
        "Lay du lieu vote session thanh cong",
        voteSession,
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

  castVote: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { voteSessionId, oldOptionId, newOptionId } = req.body;

      if (!voteSessionId || !newOptionId) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Invalid input");
      }

      // Kiểm tra VoteSession tồn tại
      const voteSession = await VoteSessionModel.findById(voteSessionId);
      if (!voteSession) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }

      // Xóa user khỏi lựa chọn cũ (nếu có)
      if (oldOptionId) {
        await VoteSessionModel.updateOne(
          { _id: voteSessionId, "options._id": oldOptionId },
          { $pull: { "options.$.votes": userId } }
        );
      }

      // Thêm user vào lựa chọn mới
      const updatedSession = await VoteSessionModel.findOneAndUpdate(
        { _id: voteSessionId, "options._id": newOptionId },
        { $addToSet: { "options.$.votes": userId } },
        { new: true }
      )
        .populate({
          path: "creator",
          select: "info",
          populate: {
            path: "info",
            select: "-children -couple",
          },
        })
        .populate({
          path: "options.votes",
          select: "_id info",
          populate: {
            path: "info",
            select: "-children -couple",
          },
        });

      if (!updatedSession) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }

      return sendSuccessResponse(
        res,
        "Vote updated successfully",
        updatedSession,
        StatusCodes.OK
      );
    } catch (error) {
      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "An error occurred")
      );
    }
  },
};

export default voteController;

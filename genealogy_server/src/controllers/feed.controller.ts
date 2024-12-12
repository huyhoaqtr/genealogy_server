/**
 * Author: Jinn
 * Date: 2024-12-08
 */
import fs from "fs";
import path from "path";
import { NextFunction, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import commentModel from "~/models/comment.schema";
import feedModel from "~/models/feed.schema";
import userModel from "~/models/user.schema";
import ApiError from "~/utils/api-error";
import { sendSuccessResponse } from "~/utils/api-response";
import { uploadToR2 } from "~/middleware/multer";

const feedController = {
  createNewFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const filePaths: any = [];
      const userId = req.user.id;
      const { content } = req.body;
      const files = req.files as Express.Multer.File[];

      if (!content) {
        return next(
          new ApiError(
            StatusCodes.BAD_REQUEST,
            "Invalid input. Please provide content"
          )
        );
      }

      const user = await userModel
        .findById(userId)
        .select("-password")
        .populate({
          path: "info",
          select: "-couple -children",
        })
        .exec();

      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }

      if (files) {
        const fileUploadPromises = files.map(async (file) => {
          const fileUrl = await uploadToR2(file);
          return fileUrl;
        });

        const fileUrls = await Promise.all(fileUploadPromises);
        filePaths.push(...fileUrls);
      }

      const newFeed = await feedModel.create({
        user: userId,
        content,
        images: files && filePaths,
        tribe: user.tribe,
      });

      return sendSuccessResponse(
        res,
        "Tạo bài viết thành công",
        { ...newFeed.toObject(), user },
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

  updateFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { feedId, content } = req.body;
      const files = req.files as Express.Multer.File[];

      if (!feedId) {
        return next(
          new ApiError(
            StatusCodes.BAD_REQUEST,
            "Feed ID is required to update the feed."
          )
        );
      }

      // Tìm bài viết trong cơ sở dữ liệu
      const feed = await feedModel.findById(feedId).exec();

      if (!feed) {
        return next(new ApiError(StatusCodes.NOT_FOUND, "Feed not found."));
      }

      // Kiểm tra quyền sở hữu: Nếu người dùng không phải là chủ bài viết
      if (feed.user.toString() !== userId) {
        return next(
          new ApiError(
            StatusCodes.FORBIDDEN,
            "You are not authorized to update this feed."
          )
        );
      }

      // Xử lý xóa ảnh cũ nếu có ảnh mới
      if (files && files.length > 0) {
        // Xóa ảnh cũ từ server nếu có
        if (feed.images && feed.images.length > 0) {
          feed.images.forEach((imagePath) => {
            const filePath = path.resolve(imagePath);
            // Kiểm tra và xóa ảnh cũ
            if (fs.existsSync(filePath)) {
              fs.unlinkSync(filePath);
            }
          });
        }

        // Lưu ảnh mới
        feed.images = files.map((file) => file.path);
      }

      // Cập nhật nội dung
      feed.content = content || feed.content;

      // Cập nhật tribe nếu có sự thay đổi
      if (req.body.tribe) {
        feed.tribe = req.body.tribe;
      }

      // Lưu lại bài viết đã được cập nhật
      const updatedFeed = await feed.save();

      return sendSuccessResponse(
        res,
        "Cập nhật bài viết thành công",
        updatedFeed,
        StatusCodes.OK
      );
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }

      return next(
        new ApiError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          "Đã có lỗi xảy ra khi cập nhật bài viết"
        )
      );
    }
  },

  toggleLikeFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { feedId } = req.body;

      const feed = await feedModel.findById(feedId).exec();

      if (!feed) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }

      if (feed.likes.includes(userId)) {
        feed.likes = feed.likes.filter((id) => id != userId);
      } else {
        feed.likes.push(userId);
      }

      await feed.save();

      return sendSuccessResponse(res, "Thành công", feed, StatusCodes.OK);
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }
      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
      );
    }
  },

  getFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const feedId = req.params.id;

      const feed = await feedModel
        .findById(feedId)
        .populate({
          path: "user",
          select: "-password",
          populate: {
            path: "info",
            select: "-couple -children",
          },
        })
        .lean()
        .exec();

      return sendSuccessResponse(
        res,
        "Lay du lieu thành công",
        feed,
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
  commentFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { feedId, parentCommentId, content } = req.body;

      if (!content || !feedId) {
        return next(
          new ApiError(
            StatusCodes.BAD_REQUEST,
            "Invalid input. Please provide feedId and content"
          )
        );
      }
      const newComment = await commentModel.create({
        user: userId,
        feed: feedId,
        content,
        ...(parentCommentId && { parent: parentCommentId }),
      });

      if (parentCommentId) {
        const comment = await commentModel.findById(parentCommentId).exec();
        comment?.replies.push(newComment.id);
        comment?.save();
      }

      await newComment.populate({
        path: "user",
        select: "_id info",
        populate: {
          path: "info",
          select: "-couple -children",
        },
      });

      await feedModel.findByIdAndUpdate(
        feedId,
        { $inc: { commentCount: 1 } },
        { new: true }
      );

      return sendSuccessResponse(
        res,
        "Thêm bình luận thanh cong",
        newComment,
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

  toggleLikeComment: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user.id;
      const { commentId } = req.body;

      const comment = await commentModel.findById(commentId).exec();

      if (!comment) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }

      if (comment.likes.includes(userId)) {
        comment.likes = comment.likes.filter((id) => id != userId);
      } else {
        comment.likes.push(userId);
      }

      await comment.save();

      return sendSuccessResponse(res, "Thành công", comment, StatusCodes.OK);
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }
      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
      );
    }
  },
  updateComment: async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }
      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
      );
    }
  },
  deleteComment: async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }
      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
      );
    }
  },

  deleteFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { id } = req.params;

      await feedModel.findOneAndDelete({ id: id, user: userId }).exec();

      return sendSuccessResponse(
        res,
        "Xoa bài viết thành công",
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

  getAllFeed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { page = 1, limit = 1000 } = req.query;
      const skip = (Number(page) - 1) * Number(limit);

      const user = await userModel.findById(userId).exec();
      if (!user) {
        new ApiError(StatusCodes.BAD_REQUEST, "Khong tim thay user");
      }

      const feeds = await feedModel
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

      const totalFeeds = await feedModel.countDocuments({
        tribe: user?.tribe,
      });

      const totalPages = Math.ceil(totalFeeds / Number(limit));
      const pagingResponse = {
        data: feeds,
        meta: {
          page: Number(page),
          limit: Number(limit),
          total: totalFeeds,
          totalPages,
        },
      };

      return sendSuccessResponse(
        res,
        "Tạo bài viết thành công",
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

  getAllComment: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { feedId, page = 1, limit = 1000 } = req.query;
      const skip = (Number(page) - 1) * Number(limit);

      const user = await userModel.findById(userId).exec();
      if (!user) {
        new ApiError(StatusCodes.BAD_REQUEST, "Khong tim thay user");
      }

      const getReplies: any = async (commentId: any) => {
        // Lấy replies của một bình luận cụ thể
        const replies = await commentModel
          .find({ parent: commentId })
          .populate({
            path: "user",
            select: "-password",
            populate: {
              path: "info",
              select: "-children -couple",
            },
          })
          // .populate({
          //   path: "parent",
          //   populate: {
          //     path: "user",
          //     select:"_id info",
          //     populate: {
          //       path: "info",
          //       select: "-children -couple",
          //     },
          //   },
          // })
          .populate({
            path: "replies",
            populate: {
              path: "user",
              select: "-password",
              populate: {
                path: "info",
                select: "-children -couple",
              },
            },
          })
          .exec();

        // Tạo một mảng để lưu replies đã lấy
        const populatedReplies = [];

        for (const reply of replies) {
          // Lấy replies tiếp theo một cách đệ quy (chỉ lấy tối đa 2 cấp)
          const nextReplies =
            reply.replies && reply.replies.length > 0
              ? await getReplies(reply._id) // Lấy replies ở cấp độ sâu hơn
              : [];

          // Thêm replies vào mảng replies
          populatedReplies.push({
            ...reply.toObject(),
            replies: nextReplies,
          });
        }

        return populatedReplies;
      };

      const comments = await commentModel
        .find({ feed: feedId, parent: null })
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
        .populate({
          path: "replies",
          populate: {
            path: "user",
            select: "-password",
            populate: {
              path: "info",
              select: "-children -couple",
            },
          },
        })
        // .populate({
        //   path: "parent",
        //   populate: {
        //     path: "user",
        //     select:"_id info",
        //     populate: {
        //       path: "info",
        //       select: "-children -couple",
        //     },
        //   },
        // })
        .lean()
        .exec();

      // Sử dụng hàm đệ quy để lấy replies ở cấp độ sâu
      for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];

        // Lấy replies cho comment (tối đa 2 cấp độ)
        const replies = await getReplies(comment._id);

        // Gán replies vào comment
        comment.replies = replies;
      }

      const totalComment = await commentModel.countDocuments({
        feed: feedId,
      });

      const totalPages = Math.ceil(totalComment / Number(limit));
      const pagingResponse = {
        data: comments,
        meta: {
          page: Number(page),
          limit: Number(limit),
          total: totalComment,
          totalPages,
        },
      };

      return sendSuccessResponse(
        res,
        "Tạo bài viết thành công",
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
};

export default feedController;

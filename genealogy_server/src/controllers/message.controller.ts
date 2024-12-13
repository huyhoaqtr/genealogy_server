/**
 * Author: Jinn
 * Date: 2024-10-31
 */

import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/api-error";
import { ConversationRole } from "~/utils/type";
import conversationModel from "~/models/conversation.schema";
import messageModel from "~/models/message.schema";
import { sendSuccessResponse } from "~/utils/api-response";
import userModel from "~/models/user.schema";
import { socket } from "~/server";
import infoModel from "~/models/info.schema";
import { sendMixedMessage } from "firebase/notification";
import { uploadToR2 } from "~/middleware/multer";

const messageController = {
  createMessage: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let newMessage;
      let conversation;

      const senderId = req.user.id;
      const {
        receiverId,
        conversationId,
        messageType,
        content,
        replyMessageId,
        tempId,
      } = req.body;
      const file = req.file;

      const sender: any = await userModel
        .findById(senderId)
        .populate("info")
        .exec();
      if (!sender) {
        return next(
          new ApiError(StatusCodes.BAD_REQUEST, "Khong tim thay user")
        );
      }

      const payload: any = {
        conversation: conversationId,
        sender: senderId,
        ...(replyMessageId && { replyMessage: replyMessageId }),
        ...(content && { content }), // Thêm content nếu có
        ...(file && { file: await uploadToR2(file) }),
      };

      const createAndUpdateMessage = async (
        conversationId: string,
        newPayload: any
      ) => {
        // Tạo tin nhắn mới
        const newMessage = await messageModel.create({
          ...newPayload,
          conversation: conversationId,
        });

        conversation = await conversationModel.findByIdAndUpdate(
          conversationId,
          {
            $set: { lastMessage: newMessage._id },
          }
        );

        const populatedMessage = await messageModel
          .findById(newMessage._id)
          .populate({
            path: "sender",
            select: "-password",
            populate: {
              path: "info",
            },
          })
          .populate({
            path: "replyMessage",
            select: "-replyMessage",
            populate: {
              path: "sender",
              select: "-password",
              populate: {
                path: "info",
              },
            },
          });

        return populatedMessage;
      };

      if (messageType === ConversationRole.GROUP) {
        newMessage = await createAndUpdateMessage(conversationId, payload);
      } else {
        if (conversationId) {
          newMessage = await createAndUpdateMessage(conversationId, payload);
        } else if (receiverId) {
          // Tìm cuộc trò chuyện hiện tại
          conversation = await conversationModel.findOne({
            type: ConversationRole.SINGLE,
            members: { $size: 2, $all: [receiverId, senderId] },
          });

          if (conversation) {
            newMessage = await createAndUpdateMessage(conversation.id, payload);
          } else {
            conversation = await conversationModel.create({
              type: ConversationRole.SINGLE,
              members: [senderId, receiverId],
            });
            payload.conversation = conversation.id;
            newMessage = await createAndUpdateMessage(conversation.id, payload);
          }
        }
      }

      const conversationPayload: any = await conversationModel
        .findById(conversation?.id)
        .populate({
          path: "lastMessage",
          populate: {
            path: "sender",
            select: "-password",
            populate: {
              path: "info",
            },
          },
        })
        .populate({
          path: "members",
          select: "-password",
          populate: {
            path: "info",
          },
        })
        .exec();

      const socketPayload = {
        receivers: conversation?.members.map((member) => member.toString()),
        messagePayload: { ...newMessage?.toObject(), tempId },
        conversationPayload: conversationPayload?.toObject(),
      };
      socket.emit("sendMessage", socketPayload);

      let fcmTokens: string[] = [];

      conversationPayload?.members.forEach((member: any) => {
        if (member.id !== senderId) {
          const memberFcmList = member.fcmKey;
          fcmTokens = [...fcmTokens, ...memberFcmList];
        }
      });
      if (fcmTokens.length > 0) {
        await sendMixedMessage({
          title:
            messageType === ConversationRole.GROUP
              ? "Tin nhắn từ Gia Tộc"
              : `${sender?.info?.fullName}`,
          body: content ? content : "Đã gửi một ảnh",
          data: {
            screen: "message",
            conversation: JSON.stringify(conversationPayload),
          },
          tokens: fcmTokens,
        });
      }

      return sendSuccessResponse(
        res,
        "Gửi tin nhắn thành công",
        { ...newMessage?.toObject() },
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
  getConversation: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { page = 1, limit = 1000 } = req.query;
      const skip = (Number(page) - 1) * Number(limit);

      const user = await userModel.findById(userId).exec();
      if (!user) {
        new ApiError(StatusCodes.BAD_REQUEST, "Khong tim thay user");
      }

      let tribeGroupConversation: any;
      if (page == 1) {
        tribeGroupConversation = await conversationModel
          .findOne({
            tribe: user?.tribe,
            type: ConversationRole.GROUP,
          })
          .populate({
            path: "lastMessage",
            populate: {
              path: "sender",
              select: "-password",
              populate: {
                path: "info",
              },
            },
          })
          .populate({
            path: "members",
            select: "_id info",
            populate: {
              path: "info",
              select: "-children -couple -createdAt -updatedAt",
            },
          })
          .exec();
      }

      const conversations = await conversationModel
        .find({
          type: ConversationRole.SINGLE,
          members: { $all: [userId] },
        })
        .populate({
          path: "lastMessage",
          populate: {
            path: "sender",
            select: "-password",
            populate: {
              path: "info",
            },
          },
        })
        .populate({
          path: "members",
          select: "_id info",
          populate: {
            path: "info",
            select: "-children -couple -createdAt -updatedAt",
          },
        })
        .sort({ updatedAt: -1 })
        .skip(skip)
        .limit(Number(limit))
        .exec();

      const totalConversations = await conversationModel.countDocuments({
        type: ConversationRole.SINGLE,
        members: { $all: [userId] },
      });
      const totalPages = Math.ceil(totalConversations / Number(limit));
      const allConversations = [tribeGroupConversation, ...conversations];

      allConversations.sort((a: any, b: any) => {
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
      });

      const pagingResponse = {
        data: allConversations,
        meta: {
          page: Number(page),
          limit: Number(limit),
          total: totalConversations,
          totalPages,
        },
      };
      return sendSuccessResponse(
        res,
        "Lấy dữ liệu thành công",
        { ...pagingResponse },
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

  searchConversation: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user.id;
      const { page = 1, limit = 1000, keyword } = req.query;
      const skip = (Number(page) - 1) * Number(limit);

      // Kiểm tra xem người dùng có tồn tại trong cơ sở dữ liệu không
      const user = await userModel.findById(userId).exec();
      if (!user) {
        return next(
          new ApiError(StatusCodes.BAD_REQUEST, "Không tìm thấy user")
        );
      }

      const infoIds = await infoModel
        .find({
          fullName: { $regex: keyword, $options: "i" },
          _id: { $ne: user.info },
        })
        .select("_id");

      const members = await userModel
        .find({ info: { $in: infoIds.map((info) => info._id) } })
        .populate({
          path: "info",
          match: { fullName: { $regex: keyword, $options: "i" } },
        })
        .select("-password")
        .sort({ updatedAt: -1 })
        .skip(skip)
        .limit(Number(limit));

      const totalMember = await userModel.countDocuments({
        info: { $in: infoIds.map((info) => info._id) },
      });

      const totalPages = Math.ceil(totalMember / Number(limit));

      // Chuẩn bị phản hồi với dữ liệu đã phân trang
      const pagingResponse = {
        data: members,
        meta: {
          page: Number(page),
          limit: Number(limit),
          total: totalMember,
          totalPages,
        },
      };

      return sendSuccessResponse(
        res,
        "Lấy dữ liệu thành công",
        { ...pagingResponse },
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
  getMessage: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { receiverId, conversationId, page = 1, limit = 1000 } = req.query;
      const skip = (Number(page) - 1) * Number(limit);

      let newConversationId = conversationId;

      if (receiverId) {
        const conversation = await conversationModel.findOne({
          type: ConversationRole.SINGLE,
          members: { $size: 2, $all: [receiverId, userId] },
        });

        if (conversation) {
          newConversationId = conversation.id;
        }
      }

      const messages = await messageModel
        .find({
          conversation: newConversationId,
        })
        .populate({
          path: "sender",
          select: "-password",
          populate: {
            path: "info",
          },
        })
        .populate({
          path: "replyMessage",
          select: "-replyMessage",
          populate: {
            path: "sender",
            select: "-password",
            populate: {
              path: "info",
            },
          },
        })

        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit))
        .exec();

      const totalMessages = await messageModel.countDocuments({
        conversation: conversationId,
      });
      const totalPages = Math.ceil(totalMessages / Number(limit));
      const pagingResponse = {
        data: [...messages],
        meta: {
          page: Number(page),
          limit: Number(limit),
          total: totalMessages,
          totalPages,
        },
      };
      return sendSuccessResponse(
        res,
        "Lấy dữ liệu thành công",
        { ...pagingResponse },
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

  deleteMessage: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const senderId = req.user.id;
      const messageId = req.params.id;

      const message = await messageModel.findById(messageId).exec();
      if (!message) {
        return next(
          new ApiError(StatusCodes.BAD_REQUEST, "Khong tim thay tin nhan")
        );
      }

      if (message.sender?.toString() !== senderId) {
        return next(
          new ApiError(StatusCodes.BAD_REQUEST, "Khong tim thay tin nhan")
        );
      }

      const conversation = await conversationModel
        .findById(message.conversation)
        .exec();
      if (!conversation) {
        return next(
          new ApiError(StatusCodes.BAD_REQUEST, "Khong tim thay tin nhan")
        );
      }

      const conversationPayload = await conversation?.populate({
        path: "lastMessage",
        populate: {
          path: "sender",
          select: "-password",
          populate: {
            path: "info",
          },
        },
      });

      await messageModel.findByIdAndDelete(messageId);
      const lastMessage = await messageModel
        .findOne({
          conversation: conversation.id,
        })
        .sort({ createdAt: -1 })
        .exec();

      await conversationModel.findByIdAndUpdate(conversation.id, {
        $set: {
          lastMessage: lastMessage?.id,
        },
      });

      const deletePayload = {
        messageId: messageId,
        conversationId: conversation.id,
      };

      socket.emit("deleteMessage", deletePayload);
      socket.emit("updateConversation", conversationPayload);

      return sendSuccessResponse(
        res,
        "Xoá tin nhắn thành công",
        { deletePayload },
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

export default messageController;

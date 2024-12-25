/**
 * Author: Jinn
 * Date: 2024-10-30
 */

import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/api-error";
import tribeModel from "../models/tribe.schema";
import { sendSuccessResponse } from "../utils/api-response";
import userModel from "~/models/user.schema";
import infoModel from "~/models/info.schema";
import { deleteFromR2, uploadToR2 } from "~/middleware/multer";
import { exportR2Key } from "~/utils/generate";
import genealogyModel from "~/models/genealogy.schema";
import mongoose from "mongoose";
import { formatDate } from "~/utils/format";

const tribeController = {
  /**
   * Lays the tribe data of the authenticated user.
   *
   * @param {Request} req - The Express request object.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if the user is not found or if an internal server error occurs.
   * @returns {Response} - Returns a success response with the tribe data if found.
   */
  getTribe: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const tribe = await tribeModel
        .findById(id)
        .populate({
          path: "leader",
          select: "_id phoneNumber",
          populate: {
            path: "info",
            select: "-couple -children ",
          },
        })
        .select("-members")
        .exec();

      if (!tribe) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }
      return sendSuccessResponse(
        res,
        "Lấy dữ liệu thành công",
        tribe,
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

  getMyTribe: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const user = await userModel.findById(userId).exec();

      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }

      const tribe = await tribeModel
        .findById(user.tribe)
        .populate({
          path: "leader",
          select: "_id phoneNumber",
          populate: {
            path: "info",
            select: "-couple -children ",
          },
        })
        .select("-members")
        .exec();

      if (!tribe) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }
      return sendSuccessResponse(
        res,
        "Lấy dữ liệu thành công",
        tribe,
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
  /**
   * Updates the tribe information of the authenticated user.
   *
   * @param {Request} req - The Express request object, containing tribe update details such as name, address, and description in the body.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if the tribe is not found or if an internal server error occurs.
   * @returns {Response} - Returns a success response with the updated tribe information if the update is successful.
   */
  updateTribe: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.user.id;
      const { name, address, description } = req.body;

      const updateData: any = {};
      if (name) updateData.name = name;
      if (address) updateData.address = address;
      if (description) updateData.description = description;

      const user = await userModel.findById(id).exec();
      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }
      const tribe = await tribeModel
        .findByIdAndUpdate(user?.tribe, { $set: updateData }, { new: true })
        .populate({
          path: "leader",
          select: "_id info phoneNumber",
          populate: {
            path: "info",
            select: "-couple -children",
          },
        })
        .exec();

      if (!tribe) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }
      return sendSuccessResponse(
        res,
        "Cập nhật dữ liệu thành công",
        tribe,
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

  /**
   * Cập nhật vai trò của 1 thành viên trong gia tộc
   * @param {Request} req - The Express request object, containing role and memberId in the body.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if the user is not found, if the member is not a member of the tribe, or if an internal server error occurs.
   * @returns {Response} - Returns a success response with the updated user information if the update is successful.
   */
  updatePermission: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { role, memberId } = req.body;

      const leader = await userModel.findById(req.user.id).exec();

      const user = await userModel
        .findById(memberId)
        .select("-password")
        .populate({
          path: "info",
          select: "-children -couple",
        })
        .exec();

      if (!leader || !user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }

      if (leader.tribe.toString() != user.tribe.toString()) {
        throw new ApiError(
          StatusCodes.BAD_REQUEST,
          "Member này không thuộc gia tộc của bạn"
        );
      }

      user.role = role;
      await user.save();

      return sendSuccessResponse(
        res,
        "Cập nhật dữ liệu thành công",
        user,
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

  getAllMember: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;

      const user = await userModel
        .findById(userId)
        .select("-password")

        .exec();

      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }

      const allMember = await userModel
        .find({ tribe: user.tribe })
        .select("-password")
        .populate({
          path: "info",
          select: "-children -couple",
        })
        .exec();

      return sendSuccessResponse(
        res,
        "Cập nhật dữ liệu thành công",
        allMember,
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

  /**
   * Creates a new tree for a tribe.
   *
   * @param {Request} req - The Express request object, containing information about the tree to be created in the body.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if the required information is missing or if the tribe is not found.
   * @returns {Response} - Returns a success response with the created tree if the operation is successful.
   */
  createTribeTree: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.user.id;
      const {
        fullName,
        address,
        gender,
        dateOfBirth,
        dateOfDeath,
        description,
        parent,
        couple,
        positionX,
        positionY,
        title,
        phoneNumber,
        placeOfWorship,
        personInCharge,
        burial,
        isDead,
      } = req.body;

      const avatar = req.file;
      const tribe = await tribeModel.findOne({ leader: id }).exec();
      if (!tribe) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Gia tộc không tồn tại");
      }
      if (!fullName) {
        throw new ApiError(
          StatusCodes.BAD_REQUEST,
          "fullName không được để trống"
        );
      }

      const memberInfo: any = {
        fullName,
        address,
        gender,
        dateOfBirth,
        dateOfDeath,
        description,
        parent,
        positionX,
        positionY,
        title,
        phoneNumber,
        burial,
        isDead,
        placeOfWorship,
        personInCharge,
        couple: couple ? [couple] : undefined,
        avatar: avatar ? await uploadToR2(avatar) : undefined,
      };

      let treeMember;

      if (!parent && !couple) {
        treeMember = await infoModel.findOne({
          tribe: tribe.id,
          level: 1,
        });
        if (treeMember) {
          console.log("Root member existed");
          throw new ApiError(StatusCodes.BAD_REQUEST, "Root member đã tồn tại");
        }
      }
      treeMember = await infoModel.create({
        ...memberInfo,
        tribe: tribe.id,
      });

      if (!treeMember) {
        console.log(" khong tao duoc");

        throw new ApiError(StatusCodes.BAD_REQUEST, "Không tìm thấy dữ liệu");
      }

      if (parent) {
        const parentMember = await infoModel
          .findByIdAndUpdate(
            parent,
            {
              $addToSet: {
                children: treeMember.id,
              },
            },
            { new: true, runValidators: true }
          )
          .exec();

        if (!parentMember) {
          throw new ApiError(
            StatusCodes.NOT_FOUND,
            "Không tìm thấy thành viên cha"
          );
        }
        treeMember.level = parentMember.level! + 1;
      } else if (couple) {
        const coupleMember = await infoModel
          .findByIdAndUpdate(
            couple,
            {
              $addToSet: {
                couple: treeMember.id,
              },
            },
            { new: true, runValidators: true }
          )
          .populate("couple")
          .exec();

        if (!coupleMember) {
          throw new ApiError(
            StatusCodes.NOT_FOUND,
            "Không tìm thấy thành vien couple"
          );
        }
        treeMember.level = coupleMember.level;
      } else {
        treeMember.level = 1;
      }

      await treeMember.save();
      const newTreeMember = await treeMember.populate({
        path: "couple",
        select: "-children -couple",
      });

      return sendSuccessResponse(
        res,
        "Tạo dữ liệu thành công",
        newTreeMember,
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

  /**
   * Updates a tree member of a tribe.
   *
   * @param {Request} req - The Express request object, containing the member ID in the params and the updated information in the body.
   * @param {Response} res - The Express response object.
   * @param {NextFunction} next - The next middleware function in the stack.
   * @throws {ApiError} - Throws if the required information is missing, if the member is not found, or if the tribe is not found.
   * @returns {Response} - Returns a success response with the updated member information if the operation is successful.
   */
  updateTribeTreeMember: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user.id;
      const memberId = req.params.id;

      const {
        fullName,
        address,
        gender,
        dateOfBirth,
        dateOfDeath,
        description,
        parent,
        positionX,
        positionY,
        title,
        phoneNumber,
        placeOfWorship,
        personInCharge,
        burial,
        isDead,
      } = req.body;
      const avatar = req.file;
      const tribe = await tribeModel.findOne({ leader: userId }).exec();
      if (!tribe) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Gia tộc không tồn tại");
      }
      const existingMember = await infoModel
        .findById(memberId)
        .select("-children")
        .exec();
      if (!existingMember) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy thành viên");
      }
      if (fullName) existingMember.fullName = fullName;
      if (address) existingMember.address = address;
      if (gender) existingMember.gender = gender;
      if (dateOfBirth) existingMember.dateOfBirth = dateOfBirth;
      if (dateOfDeath) existingMember.dateOfDeath = dateOfDeath;
      if (description) existingMember.description = description;
      if (parent) existingMember.parent = parent;
      if (positionX) existingMember.positionX = positionX;
      if (positionY) existingMember.positionY = positionY;
      if (title) existingMember.title = title;
      if (isDead) existingMember.isDead = isDead;
      if (placeOfWorship) existingMember.placeOfWorship = placeOfWorship;
      if (personInCharge) existingMember.personInCharge = personInCharge;
      if (burial) existingMember.burial = burial;
      if (phoneNumber) existingMember.phoneNumber = phoneNumber;

      if (avatar) {
        if (existingMember.avatar) {
          const oldAvatarPath = exportR2Key(existingMember.avatar);
          await deleteFromR2(oldAvatarPath);
        }
        existingMember.avatar = await uploadToR2(avatar);
      }
      await existingMember.save();

      const updatedMember = await existingMember.populate({
        path: "couple",
        select: "-children -couple",
      });

      return sendSuccessResponse(
        res,
        "Cập nhật dữ liệu thành công",
        updatedMember,
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
  getTribeTree: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const user = await userModel.findById(userId).exec();
      if (!user?.tribe) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Gia tộc không tồn tại");
      }

      const ancestor = await infoModel
        .findOne({
          tribe: user.tribe,
          level: 1,
        })
        .exec();

      const getFamilyMembers: any = async (
        memberId: string
      ): Promise<any[]> => {
        const member = await infoModel.findById(memberId).exec();

        if (!member) return [];

        const couple = await Promise.all(
          (member.couple || []).map(async (partnerId) => {
            return await infoModel
              .findById(partnerId)
              .select("-children -couple")
              .exec();
          })
        );

        const members = [
          {
            ...member.toObject(),
            children: undefined,
            couple: couple.filter((coup) => coup !== null),
          },
        ];

        const children = await Promise.all(
          (member.children || []).map(async (childId) => {
            return await getFamilyMembers(childId.toString());
          })
        );

        return members.concat(children.flat());
      };

      const familyMembers = await getFamilyMembers(ancestor?._id);

      return sendSuccessResponse(
        res,
        "Lấy dữ liệu cây gia tộc thành công",
        familyMembers,
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
  deleteTreeMember: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const memberId = req.params.id;

      const user = await userModel.findById(userId).exec();
      const member = await infoModel
        .findOneAndDelete({
          id: memberId,
          tribe: user?.tribe,
        })
        .exec();
      if (!member) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy thành viên");
      }

      return sendSuccessResponse(res, "Xoá thành công", null, StatusCodes.OK);
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }
      return next(
        new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Đã có lỗi xảy ra")
      );
    }
  },
  updateAllTribePosition: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user.id;
      const payload = req.body.payload;

      const user = await userModel.findById(userId).exec();
      if (!user?.tribe) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Gia tộc không tồn tại");
      }

      const jsonPayload = JSON.parse(payload);
      jsonPayload.forEach(async (item: any) => {
        const { id, positionX, positionY } = item;
        await infoModel
          .findByIdAndUpdate(id, {
            positionX: positionX.toFixed(1),
            positionY: positionY.toFixed(1),
          })
          .exec();
      });

      return sendSuccessResponse(
        res,
        "Cập nhật cây gia tộc thành công",
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

  generateGenealogyData: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user.id;
      const user = await userModel.findById(userId);
      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Khong tim thay du lieu");
      }

      const genealogy: any = await genealogyModel
        .findOne({
          tribe: user.tribe,
        })
        .lean()
        .exec();

      const ancestor = await infoModel
        .findOne({
          tribe: user.tribe,
          level: 1,
        })
        .exec();

      const getFamilyMembers: any = async (
        memberId: string
      ): Promise<any[]> => {
        const member = await infoModel
          .findById(memberId)
          .populate({
            path: "parent",
            select: "-couple -children",
          })
          .exec();

        if (!member) return [];

        const couple = await Promise.all(
          (member.couple || []).map(async (partnerId) => {
            return await infoModel
              .findById(partnerId)
              .select("-children -couple")
              .exec();
          })
        );

        const members = [
          {
            ...member.toObject(),
            children: undefined,
            couple: couple.filter((coup) => coup !== null),
          },
        ];

        const children = await Promise.all(
          (member.children || []).map(async (childId) => {
            return await getFamilyMembers(childId.toString());
          })
        );

        return members.concat(children.flat());
      };

      const familyMembers = await getFamilyMembers(ancestor?._id);

      const memberInfoList: any[] = [];

      familyMembers.forEach((member: any) => {
        const memberInfo = [
          "Đời: " +
            member.level +
            `${member.title ? ` (${member.title.toUpperCase()})` : ""}`,
          "Họ và tên: " +
            `${member.fullName} (${
              member.dateOfBirth ? formatDate(member.dateOfBirth) : "?"
            } - ${member.dateOfDeath ? formatDate(member.dateOfDeath) : "?"})`,
          "Giới tính: " +
            (member.gender === "MALE"
              ? "Nam"
              : member.gender === "FEMALE"
              ? "Nữ"
              : "Khác"),
          member.address ? "Địa chỉ: " + member.address : undefined,

          member.parent?.fullName
            ? "Cha: " + member.parent?.fullName
            : undefined,
          member.burial ? "Nơi an táng: " + member.burial : undefined,
          member.personInCharge
            ? "Ngươi thờ cúng: " + member.personInCharge
            : undefined,
          member.placeOfWorship
            ? "Nơi thờ cúng: " + member.placeOfWorship
            : undefined,
          member.couple
            ? member.couple.map(
                (coup: any) =>
                  `Vợ / chồng: ${coup.fullName} (${
                    coup.dateOfBirth ? formatDate(coup.dateOfBirth) : "?"
                  } - ${coup.dateOfDeath ? formatDate(coup.dateOfDeath) : "?"})`
              )
            : undefined,
          member.description ? "Mô tả: " + member.description : undefined,
        ];

        memberInfoList.push(memberInfo.filter((info) => info !== undefined));
      });

      const response = {
        ...genealogy,
        data: [
          ...genealogy.data.slice(0, 2),
          {
            _id: new mongoose.Types.ObjectId(),
            text: memberInfoList.map((item) => item.join("\n")).join("\n\n"),
            title: "Thông tin thành viên",
            isDelete: false,
          },
          ...genealogy.data.slice(2),
        ],
      };

      return sendSuccessResponse(
        res,
        "Lay du lieu thành công",
        response,
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
  addTribeGenealogy: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user.id;
      const { title, text, id } = req.body;
      const user = await userModel.findById(userId);
      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Khong tim thay du lieu");
      }

      const genealogy = await genealogyModel.findOne({
        _id: id,
        tribe: user.tribe,
      });

      if (!genealogy) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Khong tim thay du lieu");
      }

      genealogy.data.push({ title, text });
      await genealogy.save();

      return sendSuccessResponse(
        res,
        "Them du lieu thanh cong",
        genealogy.data[genealogy.data.length - 1],
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

  updateTribeGenealogy: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user.id;
      const { title, text, genealogyId, pageDataId } = req.body;
      const user = await userModel.findById(userId);
      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Khong tim thay du lieu");
      }

      const genealogy: any = await genealogyModel.findOne({
        _id: genealogyId,
        tribe: user.tribe,
      });

      if (!genealogy) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Khong tim thay du lieu");
      }

      genealogy.data = genealogy.data.map((item: any) => {
        if (item._id == pageDataId) {
          return {
            ...item,
            text,
            title: item.isDelete ? title : item.title,
          };
        }
        return item;
      });

      await genealogy.save();

      return sendSuccessResponse(
        res,
        "Cap nhat du lieu thanh cong",
        genealogy.data.find((item: any) => item._id == pageDataId),
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

  deleteTribeGenealogy: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user.id;
      const { genealogyId, pageDataId } = req.params;
      const user = await userModel.findById(userId);
      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Khong tim thay du lieu");
      }

      const genealogy: any = await genealogyModel
        .findOne({
          _id: genealogyId,
          tribe: user.tribe,
        })
        .exec();

      if (!genealogy) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }

      genealogy.data = genealogy.data.filter(
        (item: any) =>
          !(item._id.toString() === pageDataId && item.isDelete === true)
      );

      await genealogy.save();
      return sendSuccessResponse(
        res,
        "Xoa du lieu thanh cong",
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

export default tribeController;

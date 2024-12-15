import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { contract, senderAccount, web3 } from "~/contract";
import ApiError from "~/utils/api-error";
import userModel from "~/models/user.schema";
import { PinataSDK } from "pinata-web3";
import transactionModel from "~/models/transaction.schema";
import { sendSuccessResponse } from "~/utils/api-response";
import { generateCode } from "~/utils/generate";

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: process.env.PINATA_GATEWAY_URL,
});

const web3Controller = {
  uploadFileToIPFSAndSmartContract: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user.id;
      const user: any = await userModel
        .findById(userId)
        .populate({
          path: "tribe",
        })
        .exec();

      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }

      const file = req.file;

      if (!file) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "File is required");
      }
      const fileName = `${user.tribe.code}.${file.originalname.split(".")[1]}`;

      const tempFile = new File([file.buffer], fileName, {
        type: file.mimetype,
      });

      const response = await pinata.upload.file(tempFile);
      const ipfsAddress = `${process.env.PINATA_GATEWAY_URL}${response.IpfsHash}`;

      const receipt = await contract.methods
        .addFile(user.tribe._id.toString(), user.id, ipfsAddress)
        .send({ from: senderAccount });

      const transaction = await transactionModel.create({
        user: userId,
        tribe: user.tribe.id,
        txHash: receipt.transactionHash,
        blockId: receipt.events?.FileAdded.returnValues.id,
      });

      const rsData = await transactionModel
        .findById(transaction.id)
        .populate({
          path: "user",
          select: "_id info",
          populate: {
            path: "info",
            select: "-children -couple",
          },
        })
        .lean()
        .exec();

      return sendSuccessResponse(
        res,
        "Tạo quỹ thành công",
        rsData,
        StatusCodes.OK
      );
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }
      return next(
        new ApiError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          "An error occurred while uploading the file"
        )
      );
    }
  },

  getAllTransactionsByTribe: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user.id;
      const { page = 1, limit = 1000 } = req.query;
      const user: any = await userModel.findById(userId).exec();

      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Không tìm thấy dữ liệu");
      }
      const transactions = await transactionModel
        .find({
          tribe: user.tribe,
        })
        .populate({
          path: "user",
          select: "_id info",
          populate: {
            path: "info",
            select: "-children -couple",
          },
        })
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit))
        .sort({ createdAt: -1 })
        .lean()
        .exec();

      const totalTransactions = await transactionModel.countDocuments({
        tribe: user.tribe,
      });

      const totalPages = Math.ceil(totalTransactions / Number(limit));

      const pagingResponse = {
        data: transactions,
        meta: {
          page: Number(page),
          limit: Number(limit),
          total: totalTransactions,
          totalPages,
        },
      };

      return sendSuccessResponse(
        res,
        "Lay danh sach giao dich",
        pagingResponse,
        StatusCodes.OK
      );
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }
      return next(
        new ApiError(
          StatusCodes.INTERNAL_SERVER_ERROR,
          "An error occurred while uploading the file"
        )
      );
    }
  },
};

export default web3Controller;

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
      const user:any = await userModel
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

      await transactionModel.create({
        user: userId,
        tribe: user.tribe.id,
        txHash: receipt.transactionHash,
        blockId: receipt.events?.FileAdded.returnValues.id,
      });

      return sendSuccessResponse(
        res,
        "Tạo quỹ thành công",
        {
          txHash: receipt.transactionHash,
        },
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

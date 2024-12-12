/**
 * Author: Jinn
 * Date: 2024-10-31
 */

import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import fundDetailModel from "~/models/fund-detail.schema";
import fundModel from "~/models/fund.schema";
import userModel from "~/models/user.schema";
import ApiError from "~/utils/api-error";
import { sendSuccessResponse } from "~/utils/api-response";

const tribeFundController = {
  createTribeFund: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const { title, desc, amount } = req.body;
      const user = await userModel
        .findById(userId)
        .select("_id tribe")
        .populate({
          path: "info",
          select: "-children -couple",
        })
        .exec();
      if (!user?.tribe) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Gia tộc không tồn tại");
      }

      const newFund = await fundModel.create({
        title,
        desc,
        amount,
        creator: userId,
        tribe: user.tribe,
      });

      const rsFund = {
        ...newFund.toObject(),
        creator: user.toObject(),
        transactions: undefined,
        totalDeposit: 0,
        totalWithdraw: 0,
      };

      return sendSuccessResponse(
        res,
        "Tạo quỹ thành công",
        rsFund,
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

  createFundTransaction: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user.id;
      const { type, desc, amount, fundId } = req.body;
      const user = await userModel.findById(userId).exec();
      if (!user?.tribe) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Gia tộc không tồn tại");
      }

      const fund = await fundModel.findById(fundId).exec();
      if (!fund) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Quỹ không tìm thấy");
      }

      const newTransaction = await fundDetailModel.create({
        type,
        desc,
        price: amount,
        fund: fundId,
        creator: userId,
      });

      await fundModel
        .findByIdAndUpdate(fundId, {
          $push: { transactions: newTransaction.id },
        })
        .exec();

      const rsTransaction = await fundDetailModel
        .findById(newTransaction.id)
        .populate({
          path: "creator",
          select: "_id info",
          populate: {
            path: "info",
            select: "-children -couple",
          },
        })
        .exec();

      return sendSuccessResponse(
        res,
        "Tạo giao dich thành công",
        rsTransaction,
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

  deleteTribeFund: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {},

  getTribeFund: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const fundId = req.params.id;

      const user = await userModel.findById(userId).exec();
      if (!user?.tribe) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Gia tộc không tồn tại");
      }

      const fund = await fundModel
        .findById(fundId)
        .populate({
          path: "transactions",
          populate: {
            path: "creator",
            select: "_id info",
            populate: {
              path: "info",
              select: "-children -couple",
            },
          },
        })
        .populate({
          path: "creator",
          select: "_id info",
          populate: {
            path: "info",
            select: "-children -couple",
          },
        })
        .exec();
      if (!fund) {
        throw new ApiError(StatusCodes.NOT_FOUND, "Quy tien khong ton tai");
      }

      const rsFund = {
        ...fund.toObject(),
        totalDeposit: fund.transactions
          .map((transaction: any) => {
            if (transaction.type === "DEPOSIT") {
              return transaction.price;
            }
            return 0;
          })
          .reduce((a, b) => a + b, 0),
        totalWithdraw: fund.transactions
          .map((transaction: any) => {
            if (transaction.type === "WITHDRAW") {
              return transaction.price;
            }
            return 0;
          })
          .reduce((a, b) => a + b, 0),
      };

      return sendSuccessResponse(
        res,
        "Lay thong tin quy tien",
        rsFund,
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
  getAllTribeFund: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user.id;
      const user = await userModel.findById(userId).exec();
      if (!user?.tribe) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Gia tộc không tồn tại");
      }
      const funds = await fundModel
        .find({ tribe: user.tribe })
        .populate({
          path: "transactions",
        })
        
        .populate({
          path: "creator",
          select: "_id info",
          populate: {
            path: "info",
            select: "-children -couple",
          },
        })
        .sort({ createdAt: -1 })
        .exec();

      const rsFunds = await Promise.all(
        funds.map(async (fund) => {
          return {
            ...fund.toObject(),
            transactions: undefined,
            totalDeposit: fund.transactions
              .map((transaction: any) => {
                if (transaction.type === "DEPOSIT") {
                  return transaction.price;
                }
                return 0;
              })
              .reduce((a, b) => a + b, 0),
            totalWithdraw: fund.transactions
              .map((transaction: any) => {
                if (transaction.type === "WITHDRAW") {
                  return transaction.price;
                }
                return 0;
              })
              .reduce((a, b) => a + b, 0),
          };
        })
      );

      return sendSuccessResponse(
        res,
        "Lay danh sach quyet tien",
        rsFunds,
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

export default tribeFundController;

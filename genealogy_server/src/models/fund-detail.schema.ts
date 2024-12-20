/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";

const fundDetailSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["DEPOSIT", "WITHDRAW"],
      default: "DEPOSIT",
    },
    fund: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fund",
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

fundDetailSchema.index({ fund: 1 });

const fundDetailModel = mongoose.model("FundDetail", fundDetailSchema);

export default fundDetailModel;

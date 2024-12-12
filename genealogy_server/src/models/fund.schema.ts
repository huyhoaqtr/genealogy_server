/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";

const fundSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    tribe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tribe",
      required: true,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FundDetail",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const fundModel = mongoose.model("Fund", fundSchema);

export default fundModel;

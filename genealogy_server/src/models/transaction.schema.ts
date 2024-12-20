/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    tribe:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tribe",
      required: true
    },
    txHash: String,
    blockId: String,
  },
  {
    timestamps: true,
  }
);

transactionSchema.index({ tribe: 1 });

const transactionModel = mongoose.model("transaction", transactionSchema);

export default transactionModel;

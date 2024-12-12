/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    tribe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tribe",
    },
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    type: {
      type: String,
      required: true,
      enum: ["GROUP", "SINGLE"],
      default: "SINGLE",
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const conversationModel = mongoose.model("Conversation", conversationSchema);

export default conversationModel;

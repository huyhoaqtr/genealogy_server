/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    conversation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
    },
    content: String,
    file: String,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    replyMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    }
  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.model("Message", messageSchema);

export default messageModel;

/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["FUND", "EVENT", "VOTE", "FEED", "DEFAULT"],
      default: "DEFAULT",
      required: true,
    },
    screenId: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

notificationSchema.index({ user: 1 });

const notificationModel = mongoose.model("notification", notificationSchema);

export default notificationModel;

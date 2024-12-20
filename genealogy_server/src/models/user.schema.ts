/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      min: 10,
      max: 11,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    role: {
      type: String,
      required: true,
      enum: ["MEMBER", "ADMIN", "LEADER"],
      default: "MEMBER",
    },
    tribe: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Tribe",
    },
    info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Info",
    },
    fcmKey: [String],
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.index({ phoneNumber: 1 });

userSchema.index({ tribe: 1 });

const userModel = mongoose.model("User", userSchema);

export default userModel;

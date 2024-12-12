/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";

const feedSchema = new mongoose.Schema(
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    content: String,
    images: [String],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
    ],
    commentCount: {
      type: Number,
      default: 0
    },
    tribe:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tribe",
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const feedModel = mongoose.model("Feed", feedSchema);

export default feedModel;

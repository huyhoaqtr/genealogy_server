/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: String,
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    feed: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Feed",
    },
  },
  {
    timestamps: true,
  }
);


const commentModel = mongoose.model("Comment", commentSchema);

export default commentModel;

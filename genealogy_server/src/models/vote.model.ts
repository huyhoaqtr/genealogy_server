/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";

const VoteOptionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  votes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
});

const VoteSessionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    options: { type: [VoteOptionSchema], required: true },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    tribe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tribe",
      required: true,
    },
  },
  { timestamps: true }
);

const UserVoteSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    voteSession: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "VoteSession",
    },
    optionId: { type: mongoose.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

const VoteSessionModel = mongoose.model("VoteSession", VoteSessionSchema);
const UserVote = mongoose.model("UserVote", UserVoteSchema);
export { VoteSessionModel, UserVote };

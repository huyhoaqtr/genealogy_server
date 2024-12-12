/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    tribe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tribe",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const eventModel = mongoose.model("Event", eventSchema);

export default eventModel;

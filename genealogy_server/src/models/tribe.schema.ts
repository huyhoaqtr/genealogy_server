/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";

const tribeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 4,
      max: 40,
    },
    code: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    leader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    address: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const tribeModel = mongoose.model("Tribe", tribeSchema);

export default tribeModel;

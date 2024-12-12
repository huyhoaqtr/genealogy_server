/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import mongoose from "mongoose";

const pageSchema = new mongoose.Schema({
  isDelete: {
    type: Boolean,
    default: true,
  },
  text: { type: String },
  title: { type: String, required: true },
});

const genealogySchema = new mongoose.Schema(
  {
    data: { type: [pageSchema] },
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

const genealogyModel = mongoose.model("Genealogy", genealogySchema);

export default genealogyModel;

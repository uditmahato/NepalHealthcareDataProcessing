import mongoose from "mongoose";
import { Schema } from "mongoose";
const { ObjectId } = Schema;

const hospitalSchema = new Schema(
  {
    hospitalName: {
      type: String,
      required: true,
    },
    hospitalSlug: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 64,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Hospital", hospitalSchema);

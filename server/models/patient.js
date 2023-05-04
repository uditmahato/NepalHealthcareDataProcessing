import mongoose from "mongoose";
import { Schema } from "mongoose";
const { ObjectId } = Schema;

const patientSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    nationalId: {
      type: String,
    },
    gender: {
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
    dateOfBirth: {
      type: String,
    },
    userProfileImage: {
      url: String,
      public_id: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Patient", patientSchema);



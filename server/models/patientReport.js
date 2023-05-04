import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const reportSchema = new mongoose.Schema(
  {
    reportOf: {
      type: ObjectId,
      ref: "User",
    },
    doctorId: {
      type: String,
    },

    hx: {
      type: String,
    },
    dx: {
      type: String,
    },
    rx: {
      type: String,
    },
    test: {
      type: String,
    },
    hospitalName: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("PatientReport", reportSchema);

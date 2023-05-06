import PatientReport from "../models/patientReport";
import User from "../models/patient";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// create post submit to database
export const createPatientReport = (req, res) => {
  const { reportOf, doctorId, hx, dx, rx, test, hospitalName, date } = req.body;
  try {
    const report = new PatientReport({
      doctorId,
      hx,
      dx,
      rx,
      test,
      hospitalName,
      date,
      reportOf,
    });
    report.save();
    return res.json({
      saved: "true",
      report,
    });
  } catch (error) {
    console.log("Error=> ", error);
  }
};

// Fetch patient reports in patient dashboard
export const patientReports = async (req, res) => {
  // send user id
  const { patientId } = req.body;
  // console.log(req._id);
  try {
    const reports = await PatientReport.find({ reportOf: patientId })
      .sort({ createdAt: -1 })
      .limit(20);
    console.log(reports);
    return res.json(reports);
  } catch (error) {
    console.log("Error=>", error);
  }
};

// delete report
export const deleteReport = async (req, res) => {
  // console.log(req.params._id);
  try {
    const report = await PatientReport.findByIdAndDelete(req.params._id);
    res.json({ deleted: "true" });
  } catch (error) {
    console.log("Error=> ", error);
  }
};

//Fetch report to edit in Modal
export const fetchReportToEdit = async (req, res) => {
  // console.log(req.body);
  try {
    const reportId = req.body.reportId;
    const post = await PatientReport.findById(reportId);
    // console.log(post);
    return res.json(post);
  } catch (error) {
    console.log("Error=> ", error);
  }
};

// Update Report
export const updateReport = async (req, res) => {
  // console.log(req.params._reportId);
  // console.log(req.body);
  try {
    const postId = req.params._reportId;
    const postData = req.body;
    const post = await PatientReport.findByIdAndUpdate(postId, postData, {
      new: true,
    });

    return res.json({ updated: "true", post });
  } catch (error) {
    console.log("Error=> ", error);
  }
};

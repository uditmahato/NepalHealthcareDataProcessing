import express from "express";
import formidable from "express-formidable";

const router = express.Router();

//import middlewares
import { requireSignin } from "../middlewares/auth";

import {
  createPatientReport,
  patientReports,
  deleteReport,
  updateReport,
  fetchReportToEdit,
} from "../controllers/patientReport";

//create report
router.post("/create-report", createPatientReport);

//Fetch patient reports
router.post("/patient-reports", patientReports);

//delete report
router.delete("/delete-report/:_id", requireSignin, deleteReport);

//Fetch report to edit
router.post("/fetchReporttoedit", fetchReportToEdit);

// Update Report
router.put("/updateReport/:_reportId", updateReport);

module.exports = router;

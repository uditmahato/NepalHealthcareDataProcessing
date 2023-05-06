import express from "express";

const router = express.Router();

//import middlewares
import { requireSignin } from "../middlewares/auth";

// import controllers
import {
  signUp,
  logIn,
  updatePatientProfile,
  updatePatientEmail,
  updatePatientPassword,
} from "../controllers/auth";

// Signup Route
router.post("/auth/signup", signUp);

// login Route
router.post("/auth/login", logIn);

// Update Patient Profile
router.put("/update-patient-profile", requireSignin, updatePatientProfile);

// Update Patient Email
router.put("/update-patient-email", requireSignin, updatePatientEmail);

// Update Patient Password
router.put("/update-patient-password", requireSignin, updatePatientPassword);

module.exports = router;

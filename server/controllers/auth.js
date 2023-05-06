import Patient from "../models/patient.js";
import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import hospital from "../models/hospital.js";

//sign up Patient
export const signUp = async (req, res) => {
  console.log(req.body);
  const {
    fname,
    lname,
    gender,
    dateOfBirth,
    email,
    nationalId,
    password,
    userProfileImage,
  } = req.body;
  //validation
  if (!fname) {
    return res.status(400).send("First name is required");
  }
  if (!lname) {
    return res.status(400).send("Last name is required");
  }

  //check for existing user
  const exist = await Patient.findOne({ email });
  if (exist) {
    return res.status(400).send("Email already exist");
  }
  //hash password
  const hashedPassword = await hashPassword(password);
  //register
  const user = new Patient({
    fname,
    lname,
    gender,
    email,
    nationalId,
    dateOfBirth,
    password: hashedPassword,
    userProfileImage,
  });
  try {
    await user.save();
    console.log("USER CREATED", user);
    user.password = undefined;
    return res.json({ ok: true, userDetails: user });
  } catch (err) {
    console.log("CREATE USER FAILED", err);
    return res.status(400).send("Error. Try again.");
  }
};

//log in patient
export const logIn = async (req, res) => {
  const { _id, password } = req.body;
  if (!_id) {
    return res.status(400).send("id is required");
  }
  if (!password) {
    return res.status(400).send("Password is required");
  }

  const user = await Patient.findById({ _id });
  if (!user) {
    return res.status(400).send("ID is not found");
  }
  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    return res.status(400).send("Password is incorrect");
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7D",
  });

  user.password = undefined;
  try {
    return res.json({
      ok: "true",
      token,
      user,
    });
  } catch (error) {
    return res.status(400).send(error);
  }
};

// Update Patient Profile
export const updatePatientProfile = async (req, res) => {
  const userImageData = req.body.userProfileImage;
  console.log(userImageData);
  const userId = req.auth._id;
  console.log(req.auth._id);
  try {
    const user = await Patient.findByIdAndUpdate(
      userId,
      { userProfileImage: userImageData },
      {
        new: true,
      }
    );
    user.password = undefined;
    return res.json({
      profileImageUpdate: "true",
      user,
    });
  } catch (error) {
    console.log("Error=> ", error);
  }
};

// Update patient email
export const updatePatientEmail = async (req, res) => {
  // console.log(req.body);
  const { email, oldEmail, password } = req.body.postSubmitData;
  // console.log(req.body.postSubmitData);
  const userId = req.auth._id;
  // console.log(userId);
  if (!email) {
    return res.send(400).send("Email field is required");
  }
  if (!password) {
    return res.send(400).send("Password field is required");
  }
  try {
    const user = await Patient.findById(userId);
    if (!user) {
      return res.status(400).send("Email not found");
    }
    if (user.email !== oldEmail) {
      return res.send(400).send("Old email is incorrect");
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Password is incorrect");
    }
    const updatedUser = await Patient.findByIdAndUpdate(
      userId,
      {
        email,
      },
      { new: true }
    );
    updatedUser.password = undefined;
    return res.json({ profileDataUpdated: "true", updatedUser });
  } catch (error) {
    console.log("Error=> ", error);
  }
};

//Update patient password
export const updatePatientPassword = async (req, res) => {
  // console.log(req.body);
  const { currentPassword, newPassword } = req.body.postSubmitData;
  // console.log(req.body.postSubmitData);
  const userId = req.auth._id;
  // console.log(userId);
  if (!currentPassword) {
    return res.status(400).send("Old password field is required");
  }
  if (!newPassword) {
    return res.status(400).send("New password field is required");
  }
  if (!newPassword || newPassword.length < 6) {
    return res
      .status(400)
      .send("Password is required and should be min 6 characters long");
  }

  try {
    const user = await Patient.findById(userId);
    if (!user) {
      return res.status(400).send("Email not found");
    }
    const isMatch = await comparePassword(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).send("Old password is incorrect");
    }
    //hash password
    const hashedPassword = await hashPassword(newPassword);
    const updatedUser = await Patient.findByIdAndUpdate(
      userId,
      {
        password: hashedPassword,
      },
      { new: true }
    );
    updatedUser.password = undefined;
    return res.json({ profileDataUpdated: "true", updatedUser });
  } catch (error) {
    console.log("Error=> ", error);
  }
};

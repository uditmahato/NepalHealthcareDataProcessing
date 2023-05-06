import axios from "axios";

//sign up
export const signUpPatient = async (formData) => {
  console.log(formData)
    return await axios.post("/auth/signup", formData);
  };
  
//login
  export const loginUser = async (loginData) => {
    return await axios.post("/auth/login", loginData);
  };
  
  //check-up post-api
  export const addCheckUp = async (formData) => {
    return await axios.post("/create-report", formData);
  };

  
  //get all patient history check-ups
  export const getPatientHisotryDetailsById = async (patientId) => {
    return await axios.post("/patient-reports", {patientId}
    );
  };
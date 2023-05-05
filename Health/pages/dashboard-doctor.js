import Navbar from "@/src/components/Navbar";
import PatientDetails from "@/src/components/PatientDetails";
import React, { useEffect, useState } from "react";
import { getPatientHisotryDetailsById } from "./api";

function AdminDashboard() {
  const [doctorId, setDoctorId] = useState("");
  // get doctorid from localstorage
  useEffect(() => {
    const doctorId = localStorage.getItem("doctorId");
    setDoctorId(doctorId);
  }, []);

  console.log(doctorId);

  const [patientId, setPatientId] = useState("");
  console.log(patientId);

  const [patientDetails, setPatientDetails] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await getPatientHisotryDetailsById(patientId);
      console.log("data", data);
      if (data) {
        setPatientDetails(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar title="Doctor Dashboard" doctorId={doctorId} />

      <div className="flex h-screen bg-gray-50">
        <main className="flex-1">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="mt-4">
              <div style={{ marginBottom: "20px" }}>
                <form
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <label class="text-black" for="username">
                    Pateint ID:
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    class="block  px-4 py-2 mt-2 text-white-700 bg-white border border-white-300 rounded-md dark:bg-white-800 dark:text-white-300 dark:border-white-600 focus:border-blue-500 dark:focus:border-dark-500 focus:outline focus:ring"
                  />
                  <button
                    style={{ margin: "10px" }}
                    onClick={handleSubmit}
                    class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600"
                  >
                    Search
                  </button>
                </form>
              </div>
              <a href="/dashboard-doctor-form">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add New Checkup
                </button>
              </a>
            </div>
            <h1 style={{ marginTop: "40px" }}>Patient Details</h1>

            <PatientDetails datas={patientDetails} />

            {patientDetails && patientDetails.length == 0 && (
              <div style={{ marginTop: "20px" }} className="text-center mt-20">
                <h1>No Patient details Found</h1>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default AdminDashboard;

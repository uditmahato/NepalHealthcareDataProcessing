import React, { useEffect, useState } from "react";
import { getPatientHisotryDetailsById } from "./api";
import Navbar from "@/src/components/Navbar";
import PatientDetails from "@/src/components/PatientDetails";

export default function dashboardPatient() {
  const [patientId, setPatientId] = useState("");
  useEffect(() => {
    const user = localStorage.getItem("userData");
    const userData = JSON.parse(user);

    setPatientId(userData?.user?._id);
  }, []);

  const [patientDetails, setPatientDetails] = useState("");

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const { data } = await getPatientHisotryDetailsById(patientId);

        if (data) {
          setPatientDetails(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPatientData();
  }, [patientId]);

  return (
    <div>
      <Navbar title="Patient Dashboard" patient />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 style={{ marginTop: "40px" }}>Patient Details</h1>
          {patientDetails.length === 0 && <h1>No Patient Details Found</h1>}
          <PatientDetails
            datas={patientDetails}
            patientId={patientId}
            dashboardPatient
          />
        </div>
      </main>
    </div>
  );
}

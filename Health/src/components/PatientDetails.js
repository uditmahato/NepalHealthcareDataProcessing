import React from "react";

function PatientDetails({ datas, dashboardPatient, patientId }) {
  return (
    <>
      <div className="h-full p-6 bg-white shadow">
        <h2 className="text-lg font-medium text-gray-900">Patient ID</h2>
        <div className="mt-4 ">
          {dashboardPatient ? (
            <span className="text-3xl font-bold text-gray-900 ml-10">
              {patientId}
            </span>
          ) : (
            <span className="text-3xl font-bold text-gray-900 ml-10">
              {datas[0]?.reportOf}
            </span>
          )}
        </div>
      </div>
      {datas &&
        datas.map((data) => (
          <div className="w-full flex flex-row  my-20 justify-center  -mx-30">
            <div className="w-full lg:w-1/4">
              <div className="h-full p-6 bg-white shadow">
                <h2 className="text-lg font-medium text-gray-900">Doctor Id</h2>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {data.doctorId}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4 ">
              <div className="h-full p-6 bg-white shadow">
                <h2 className="text-lg font-medium text-gray-900">
                  Hospital Name
                </h2>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {data?.hospitalName}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4 ">
              <div className="h-full p-6 bg-white shadow">
                <h2 className="text-lg font-medium text-gray-900">RX</h2>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {data?.rx}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4 ">
              <div className="h-full p-6 bg-white shadow">
                <h2 className="text-lg font-medium text-gray-900">DX</h2>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {data?.dx}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/4 ">
              <div className="h-full p-6 bg-white shadow">
                <h2 className="text-lg font-medium text-gray-900">tx</h2>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {data?.tx}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/4 ">
              <div className="h-full p-6 bg-white shadow">
                <h2 className="text-lg font-medium text-gray-900">Test</h2>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">
                    {data?.test}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default PatientDetails;

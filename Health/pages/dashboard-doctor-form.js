import React, { useEffect, useState } from "react";
import { addCheckUp } from "./api";

function DoctorCheckForm() {
  const [getDoctorId, setGetDoctorId] = useState("");

  const testsList = [
    {
      testName: "Sugar",
    },
    {
      testName: "Blood Pressure",
    },
    {
      testName: "X-Ray",
    },
  ];

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    reportOf: "",
    doctorId: getDoctorId,
    hx: "",
    dx: "",
    rx: "",
    test: "",
    hospitalName: "",
    date: "2020-20-12",
  });

  // get doctorid from localstorage
  useEffect(() => {
    const doctorId = localStorage.getItem("doctorId");
    setFormData((prevData) => ({
      ...prevData,
      doctorId,
    }));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addCheckUp(formData);
      console.log("data", data);
      if (data.saved) {
        alert("Checkup added successfully");
        setSubmitted(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {submitted ? (
        <div>
          <div>
            <p>Data submitted successfully</p>
            <a href="/dashboard-doctor">
              <button>Go back to Dashboard</button>
            </a>
          </div>
        </div>
      ) : (
        <div>
          <>
            <div>
              <section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 class="text-xl font-bold text-white capitalize dark:text-white">
                  Add New Check up
                </h1>
                <form>
                  <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    {/* //patient id */}
                    <div>
                      <label class="text-white dark:text-gray-200">
                        Patient ID
                      </label>
                      <input
                        type="text"
                        value={formData.reportOf}
                        onChange={(e) =>
                          setFormData({ ...formData, reportOf: e.target.value })
                        }
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>
                    {/* doctor id */}

                    {/* hx*/}
                    <div>
                      <label class="text-white dark:text-gray-200">HX</label>
                      <input
                        type="text"
                        value={formData.hx}
                        onChange={(e) =>
                          setFormData({ ...formData, hx: e.target.value })
                        }
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>
                    {/* rx */}
                    <div>
                      <label class="text-white dark:text-gray-200">RX</label>
                      <input
                        type="text"
                        value={formData.rx}
                        onChange={(e) =>
                          setFormData({ ...formData, rx: e.target.value })
                        }
                        class="block w-full px-4 py-2 mt-2 text-white-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>
                    {/* dx */}
                    <div>
                      <label class="text-white dark:text-gray-200">DX</label>
                      <input
                        type="text"
                        value={formData.dx}
                        onChange={(e) =>
                          setFormData({ ...formData, dx: e.target.value })
                        }
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>
                    {/* test*/}
                    <div>
                      <label
                        htmlFor="test"
                        className="block text-sm font-medium text-white"
                      >
                        Select Test
                      </label>
                      <select
                        id="test"
                        name="test"
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                      >
                        <option value="">-- Please Select --</option>
                        {testsList.map((test) => (
                          <option value={test.testName} className="text-black">
                            {test.testName}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* hospital name */}
                    <div>
                      <label class="text-white dark:text-whiet-200">
                        Hospital Name
                      </label>
                      <input
                        type="text"
                        value={formData.hospitalName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            hospitalName: e.target.value,
                          })
                        }
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>

                    {/* date */}
                    <div>
                      <label
                        class="text-white dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Date
                      </label>
                      <input
                        id="date"
                        type="text"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  <div class="flex justify-between mt-6 ">
                    <a
                      href="/dashboard-doctor"
                      class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600"
                    >
                      back to dashboard
                    </a>
                    <button
                      onClick={handleSubmit}
                      class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600"
                    >
                      Add List
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default DoctorCheckForm;

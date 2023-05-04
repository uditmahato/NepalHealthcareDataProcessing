import React, { useState } from "react";
import { loginUser } from "./api";
import { useRouter } from "next/router";
import { doctorImage, doctorImage1 } from "@/public";
import Image from "next/image";

function Patientlogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    _id:"",
    password:""
  });

  console.log(formData)
  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginUser(formData);
      console.log(data);

      if (data?.ok) {
      console.log(data);
      localStorage.setItem("userData", JSON.stringify(data));

        router.push("/dashboard-patient");
       
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-2 mt-32">
      <section class="flex flex-col justify-center text-black p-6 mx-20  rounded-md   mt-20">
     
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Patient Login
        </h1>
        <form>
          <div className=" gap-6 mt-4 sm:grid-cols-2 w-full" >
            <div className="w-full">
              <label className="text-black " >
                Patient ID
              </label>
              <input
                id="emailAddress"
                type="text"
                value={formData._id}
                onChange={(e) =>
                  setFormData({ ...formData, _id: e.target.value })
                }
                className="block w-full px-4 py-2 mt-6 space-y-5 mb-5   border border-gray-300 rounded-md  text-black dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />

              <label
                className="text-black  "
                
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })}
                className="block w-full px-4 py-2 mt-2 text-black  border  rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div class="flex justify-end mt-6 w-full">
            <button
              onClick={handelSubmit}
              class="px-6 w-full  rounded-xl py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500  hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              Login
            </button>

          </div>
          <p className="text-black mt-6 flex justify-center items-center">if you don't have account? 
            <a href="/patient-signup" className=" ml-4 text-blue-500"> Sign Up</a>
          </p>
        </form>
      </section>
      <div className="flex justify-center items-center">
      <Image src={doctorImage} width={500} height={500} />
      </div>
    </div>
  );
}

export default Patientlogin;

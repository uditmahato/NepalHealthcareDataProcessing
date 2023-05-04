import React, { useState } from "react";
import { useRouter } from "next/router";
import { doctorImage1 } from "@/public";
import Image from "next/image";
function Doctorlogin() {
  const [doctorLogin, setDoctorLogin] = useState({
    doctorId: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setDoctorLogin({
      ...doctorLogin,
      [e.target.name]: e.target.value,
    });
  };            
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(doctorLogin.password=="admin"){
      localStorage.setItem("doctorId",doctorLogin.doctorId);
      router.push("/dashboard-doctor");
      alert("Login Successful");

    }else{
      alert("Login Failed");
    }
  }

  
  return (
    <div className="grid grid-cols-2 mt-32">
      <section class="flex flex-col justify-center text-black p-6 mx-20  rounded-md   mt-20">
        <h1 class="text-xl font-bold  capitalize ">
          Doctor Login
        </h1>
        <form>
          <div class=" gap-6 mt-4 ">
            <div>
               <label
                htmlFor="password"
                className="block text-sm font-medium  mt-4"
              >
                Doctor ID
                
              </label>
              <input
                type="text"
                name="doctorId"
                value={doctorLogin.doctorId}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />

              <label
                htmlFor="password"
                className="block text-sm font-medium  mt-4"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={doctorLogin.password}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              
            </div>
          </div>

          <div class="flex w-full mt-6">
            <button
              onClick={handleSubmit}
              class="px-6 py-2 w-full  rounded-xl disabled leading-5 text-white transition-colors duration-200 transform bg-blue-500  hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              Login
            </button>
          </div>
        </form>
      </section>
      <div className="flex justify-center items-center">
        <Image src={doctorImage1} width={500} height={500} />
      </div>
    </div>
  );
}

export default Doctorlogin;

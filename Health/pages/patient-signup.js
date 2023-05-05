import React, { useState } from "react";
import { signUpPatient, loginUser } from "./api";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import { Signup1 } from "@/public";

function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    nationalId: "",
    gender: "",
    password: "",
    dateOfBirth: "",
    userProfileImage: "",
  });

  const [userSingedUp, setUserSignedUp] = useState(false);
  const [userUniqueId, setUserUniqueId] = useState();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signUpPatient(formData);
      console.log(data);
      if (data?.ok) {
        setUserSignedUp(true);
        setUserUniqueId(data?.userDetails._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!userSingedUp ? (
        <div
          className="bg-cover bg-center flex justify-center items-center h-screen "
          style={{ backgroundImage: `url(${Signup1})` }}
        >
          <div>
            <Image src={Signup1} alt="Picture of the author" />
          </div>
          {/* //section starting */}
          <section class="max-w-4xl absolute  py-16 px-10 right-28 bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 ">
            <h1 class="text-xl font-bold text-white capitalize dark:text-white">
              Patient Sign-Up
            </h1>
            <form>
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                {/* //firstname */}
                <div>
                  <label class="text-white dark:text-gray-200" for="username">
                    First Name
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={formData.fname}
                    onChange={(e) =>
                      setFormData({ ...formData, fname: e.target.value })
                    }
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                {/* //lastname */}
                <div>
                  <label class="text-white dark:text-gray-200" for="username">
                    Last Name
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={formData.lname}
                    onChange={(e) =>
                      setFormData({ ...formData, lname: e.target.value })
                    }
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                {/* //email address */}
                <div>
                  <label
                    class="text-white dark:text-gray-200"
                    for="emailAddress"
                  >
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                {/* password */}
                <div>
                  <label class="text-white dark:text-gray-200" for="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                {/* national id */}
                <div>
                  <label class="text-white dark:text-gray-200" for="username">
                    National Id
                  </label>
                  <input
                    id="nationality"
                    type="text"
                    value={formData.nationalId}
                    onChange={(e) =>
                      setFormData({ ...formData, nationalId: e.target.value })
                    }
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                {/* //gender */}
                <div>
                  <label class="text-white dark:text-gray-200" for="username">
                    Gender
                  </label>
                  <input
                    id="Gender"
                    type="text"
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                {/* //date */}
                <div>
                  <label
                    class="text-white dark:text-gray-200"
                    for="passwordConfirmation"
                  >
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      setFormData({ ...formData, dateOfBirth: e.target.value })
                    }
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
              </div>

              <div class="flex justify-end mt-6">
                <button
                  onClick={handleSignUp}
                  class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600"
                >
                  Signup
                </button>
              </div>
            </form>
          </section>
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="">
              <div>
                <div>
                  <div className=" shadow-md py-10 px-10">
                    <h1 className=" text-5xl text-center text-black font-semibold mb-10">
                      Your Unique Id is
                    </h1>{" "}
                    <h1 className="text-2xl text-center text-black font-bold my-5">
                      {userUniqueId}
                    </h1>
                    <h1 className="text-2xl text-center text-black">
                      Please copy use this code to login
                    </h1>
                  </div>
                  <div className="flex justify-center items-center mt-6">
                    <a href="/patient-login" className="">
                      <button class="px-6 py-2  leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600">
                        Go to Login
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SignUp;

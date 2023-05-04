import { Logo, teamImage } from "@/public";
import Image from "next/image";
import React from "react";
import { AiOutlineLock } from "react-icons/ai";
function LandingPage() {
  return (
    <div class="flex h-screen">
      <div class="w-2/5 h-full bg-[#ADD8E6] rounded-lg justify-center items-center">
        <div class="h-full rounded-lg flex flex-col justify-center items-center">
          <Image src={Logo} alt="logo" className="mt-28 mb-10" />
          <a href="/doctor-login">
            <h2 class="bg-gray-100 py-2 px-4 rounded-md mb-4 text-xl ">
              <AiOutlineLock size={20} className="inline-block mr-2" />
              Doctor Login
            </h2>
          </a>
          <a href="/patient-login">
            <h2 class="bg-gray-100 py-2 px-4 rounded-md text-xl">
              {" "}
              <AiOutlineLock size={20} className="inline-block mr-2" /> Patient
              Login
            </h2>
          </a>
        </div>
      </div>
      <div class="w-4/5 h-[100vh] bg-white-500 ">
        <div class="h-full rounded-lg flex flex-col justify-center items-center">
          <h1 class="text-black text-4xl font-semibold xl mb-4">Welcome </h1>
          <h2 class="text-black text-2xl mb-4 ">
            Connecting healthcare for a better tomorrow.
          </h2>
          <Image src={teamImage} className="mt-32 " />
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default LandingPage;

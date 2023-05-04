import React from "react";
import { RxDashboard, RxAvatar } from "react-icons/rx";
import { useRouter } from "next/router";
function Navbar({ title, doctorId, patient }) {
  const router = useRouter();

  const handleLogoutDoctor = () => {
    localStorage.removeItem("doctorId");
    router.push("/");
  };

  const handleLogoutPatient = () => {
    localStorage.removeItem("userData");
    router.push("/");
  };

  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            <RxDashboard
              size={30}
              style={{ color: "white", marginRight: "10px" }}
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {title}
            </span>
          </a>
          <div class="flex items-center md:order-2">
            <button
              type="button"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <RxAvatar
                size={30}
                style={{ color: "white", marginRight: "10px" }}
              />
            </button>
            <p className="text-white">{doctorId}</p>
          </div>

          {patient ? (
            <button
              onClick={handleLogoutPatient}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogoutDoctor}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

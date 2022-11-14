import { useSession } from "next-auth/react";
import React from "react";
import useLogOut from "../../../hooks/useLogOut";

function Header() {
  const { data } = useSession();

  console.log("userid", data?.user?.username);

  const username = data?.user?.username;

  const { logoutUser } = useLogOut();

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div className="bg-white h-[68px] w-full flex justify-end items-center shadow-md sticky top-0 px-7 z-30">
      {/* <div className="text-3xl font-semibold text-blue-600">Logo</div> */}
      <div className="flex justify-between items-center gap-10 lg:gap-[200px]">
        <div className="flex justify-between items-center gap-5 lg:gap-12 text-custom-gray2">
          <p className="text-lg font-semibold">Username: {username}</p>
          {/* <p className="text-lg font-semibold">User ID: 176</p> */}
        </div>

        <button
          className="bg-custom-blue5 hover:bg-opacity-80 active:scale-95 text-white font-semibold px-4 py-2 rounded transition duration-200"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;

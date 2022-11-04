import React from "react";
import { FaUserCircle, FaUserAlt } from "react-icons/fa";
import { AiTwotoneSetting, AiOutlineLogout } from "react-icons/ai";
import { MdSettings } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import useDropdown from "../../../hooks/useDropdown";

function User() {
  const { showDropdown, setShowDropdown, node } = useDropdown();

  const handleLogOut = () => {
    console.log("log out clicked");
  };

  return (
    <div ref={node}>
      <div
        className="text-3xl text-custom-gray3"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <FaUserCircle />
      </div>

      {showDropdown && (
        <div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="absolute w-[230px] font-light top-[68px] right-1 bg-white shadow-md overflow-hidden"
        >
          <p className="px-1 py-4 bg-custom-blue5 text-white font-semibold transition duration-300 text-center cursor-default">
            Username
          </p>

          <div className="text-[13px] text-gray-600  font-semibold cursor-pointer">
            <p className="px-5 py-3 flex items-center gap-2 hover:text-indigo-500 hover:bg-slate-100 transition duration-300">
              <FaUserAlt />
              Account
            </p>
            <p className="px-5 py-3 flex items-center gap-2 hover:text-indigo-500 hover:bg-slate-100 transition duration-300">
              <MdSettings />
              Setting
            </p>
            <p
              className="px-5 py-3 flex items-center gap-2 hover:text-indigo-500 hover:bg-slate-100 transition duration-300"
              onClick={handleLogOut}
            >
              {/* <AiOutlineLogout /> */}
              <IoMdLogOut />
              Log Out
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;

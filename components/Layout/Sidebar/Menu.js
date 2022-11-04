// import { useState } from "react";
import Link from "next/link";
import SubMenu from "./SubMenu";
import { useRouter } from "next/router";
import { FaAngleRight, FaAngleDown, FaUserCircle } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";

function Menu({ showMenu, setShowMenu, active, setActive, navLink }) {
  const router = useRouter();

  // const toggle = (index) => {
  //   if (active === index) {
  //     return setActive(null);
  //   }

  //   setActive(index);
  // };

  const activeClass = (path) => {
    // router.pathname === path
    if (router.pathname === path) {
      return "bg-custom-blue5 text-white";
    }
    return "text-custom-blue2 hover:text-white hover:bg-custom-blue5";
  };

  // const SubMenuActiveClass = (path) => {
  //   // router.pathname === path
  //   if (router.pathname.includes(path)) {
  //     return "bg-slate-500 hover:bg-slate-500 border-l-4 border-slate-400 pl-6";
  //   }
  //   return "hover:bg-slate-600";
  // };

  return (
    <div className="">
      <div className="mb-10">
        {/* {navLink.heading && (
          <p className="text-xs text-custom-indigo ml-3 mb-4 font-bold uppercase">
            {navLink.heading}
          </p>
        )} */}
        {navLink.map((link, i) => (
          <div key={i} className="">
            <Link href={link.link} passHref>
              <a>
                <div
                  key={i}
                  className={`px-3 py-3 flex justify-between items-center font-semibold transition duration-300 rounded-sm ${activeClass(
                    link.link
                  )}`}
                  // onClick={() => toggle(link.name)}
                >
                  <div className="flex items-center gap-3">
                    {/* <span className="text-[15px]">
                       
                        {link.icon}
                      </span> */}

                    <p className="text-[13px]">{link.name}</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

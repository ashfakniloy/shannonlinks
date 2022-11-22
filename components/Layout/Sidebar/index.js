import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
// import SubMenu from "./SubMenu";
import Menu from "./Menu";
import { dashboardLinks } from "./navlinks/dashboardLinks";
import { useSession } from "next-auth/react";

function Sidebar({ showMenu, setShowMenu, name }) {
  // const [role, setRole] = useState("root");
  const router = useRouter();

  const { data } = useSession();

  const admin = data?.user?.admin;

  // console.log("usersession", data);

  // const username = data?.user?.username;

  const [active, setActive] = useState("");

  const activeClass = (path) => {
    // router.pathname === path
    if (router.pathname === path) {
      return "bg-custom-blue5 text-white";
    }
    return "text-custom-blue2 hover:text-white hover:bg-custom-blue5";
  };

  const filteredLinks = () => {
    if (admin === false) {
      return dashboardLinks.filter((item) => item.name !== "Posters");
    } else {
      return dashboardLinks;
    }
  };

  const navLinks = filteredLinks();

  return (
    <div
      className={`h-screen bg-custom-blue z-10 duration-300 top-0 bottom-0 sticky sidebar text-white w-[264px]
      `}
    >
      <div className="  items-center gap-10">
        <div className="text-white py-[16px] font-semibold">
          <h1 className=" pl-6 text-2xl">Shannon Links</h1>
        </div>

        <div className="mt-3 mx-3 space-y-5">
          {navLinks.map((navLink, i) => (
            <div key={i} className="">
              <Link href={navLink.link} passHref>
                <div
                  key={i}
                  className={`px-3 py-3 flex justify-between items-center font-semibold transition duration-300 rounded-sm ${activeClass(
                    navLink.link
                  )}`}
                  // onClick={() => toggle(navLink.name)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[15px]">{navLink.icon}</span>

                    <p className="text-[13px]">{navLink.name}</p>
                  </div>
                </div>
              </Link>
            </div>
            // <Menu
            //   key={i}
            //   showMenu={showMenu}
            //   setShowMenu={setShowMenu}
            //   active={active}
            //   setActive={setActive}
            //   navLink={navLink}
            // />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

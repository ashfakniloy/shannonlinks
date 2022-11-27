import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { dashboardLinks } from "./Sidebar/navlinks/dashboardLinks";
// import PageHeading from "./PageHeading";

function Layout({ children, heading }) {
  const [showMenu, setShowMenu] = useState(true);

  const { pathname } = useRouter();

  const { data } = useSession();

  const admin = data?.user?.admin;
  const username = data?.user?.username;

  // console.log("usersession", data);

  // const username = data?.user?.username;

  const filteredLinks = () => {
    if (admin === true) {
      return dashboardLinks.filter((item) => item.name !== "Collections");
    }
    if (admin === false) {
      return dashboardLinks.filter((item) => item.name !== "Posters");
    }
  };

  if (pathname.includes("/sign-")) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="flex">
        <Sidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          navLinks={filteredLinks()}
        />

        <div className="flex-1">
          <Header admin={admin} username={username} />

          <div className="p-7">
            {/* <PageHeading /> */}

            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;

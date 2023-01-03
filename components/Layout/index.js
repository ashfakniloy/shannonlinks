// import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Router, useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { dashboardLinks } from "./Sidebar/navlinks/dashboardLinks";
import useToggle from "../../hooks/useToggle";

function Layout({ children, heading }) {
  // const [showMenu, setShowMenu] = useState(false);
  const { toggle: showMenu, setToggle: setShowMenu, node } = useToggle();

  Router.events.on("routeChangeStart", (url) => {
    setShowMenu(false);
  });

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
      <div className="lg:flex">
        <Sidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          node={node}
          navLinks={filteredLinks()}
        />

        <div className="lg:flex-1">
          <Header
            admin={admin}
            username={username}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />

          <div className="py-7 px-2 lg:px-7">
            {/* <PageHeading /> */}

            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;

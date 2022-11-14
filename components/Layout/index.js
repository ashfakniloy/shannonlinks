import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import PageHeading from "./PageHeading";

function Layout({ children, heading }) {
  const [showMenu, setShowMenu] = useState(true);

  const { pathname } = useRouter();

  if (pathname.includes("/sign-")) {
    return <>{children}</>;
  }

  return (
    <>
      <NextNProgress options={{ showSpinner: false }} />
      <ToastContainer />
      <div className="flex">
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />

        <div className="flex-1">
          <Header />

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

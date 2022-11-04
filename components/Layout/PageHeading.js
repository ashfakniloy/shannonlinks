import React from "react";
import { useRouter } from "next/router";

function PageHeading() {
  const router = useRouter();

  const pageName = (path) =>
    path
      .substring(path.lastIndexOf("/") + 1)
      .split("-")
      .join(" ");

  return (
    <div className="mb-8">
      <h1 className="text-[22px] text-custom-gray2 font-semibold capitalize">
        {/* Admin Dashboard */}
        {router.pathname === "/admin"
          ? "admin dashboard"
          : pageName(router.pathname)}
      </h1>
      <div className="border-b border-slate-200 my-2" />
      <p className="text-xs font-semibold text-gray-600 capitalize">
        {router.pathname === "/admin"
          ? "dashboard"
          : router.asPath.split("/").join(" > ").split("-").join(" ")}
      </p>
    </div>
  );
}

export default PageHeading;

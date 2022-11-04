import React from "react";
import { FaGlobe } from "react-icons/fa";
import Table from "../components/Table";
import { linkColumn } from "../components/Table/columns/linkColumn";
import { linkData } from "../data/linkData";

function LinkPage() {
  return (
    <div className="">
      <div className="flex items-center gap-3">
        <span className="text-[28px] text-custom-blue2">
          <FaGlobe />
        </span>
        <h1 className="text-2xl font-bold text-custom-gray2">Link</h1>
      </div>

      <div className="mt-7">
        {linkData && <Table columnsHeading={linkColumn} usersData={linkData} />}
      </div>
    </div>
  );
}

export default LinkPage;

import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Table from "../components/Table";
import { infoColumn } from "../components/Table/columns/infoColumn";
import { infoData } from "../data/infoData";

function InformationPage() {
  return (
    <div className="">
      <div className="flex items-center gap-3">
        <span className="text-[28px] text-custom-blue2">
          <FaEnvelope />
        </span>
        <h1 className="text-2xl font-bold text-custom-gray2">Information</h1>
      </div>

      <div className="mt-7">
        {infoData && <Table columnsHeading={infoColumn} usersData={infoData} />}
      </div>
    </div>
  );
}

export default InformationPage;

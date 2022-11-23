import React from "react";
import { FaUser } from "react-icons/fa";
import EditPosterForm from "../../../components/Form/EditPosterForm";

function PosterEditPage() {
  return (
    <div className="">
      <div className="flex items-center gap-3">
        <span className="text-[28px] text-custom-blue2">
          <FaUser />
        </span>
        <h1 className="text-2xl font-bold text-custom-gray2">Edit Poster</h1>
      </div>

      <div className="mt-7 bg-white p-8 rounded shadow-md">
        <EditPosterForm />
        {/* <Tabs tabsData={tabsData} /> */}
      </div>
    </div>
  );
}

export default PosterEditPage;

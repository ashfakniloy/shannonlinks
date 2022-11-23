import { useRouter } from "next/router";
import React from "react";
import { FaUser } from "react-icons/fa";
import EditPosterForm from "../../../components/Form/EditPosterForm";
import useGetData from "../../../hooks/useGetData";

function PosterEditPage() {
  // const { data: session } = useSession();
  // const { id, username, admin, adminId } = session ? session.user : "";
  // const {
  //   query: { posterEditId },
  // } = useRouter();

  // const { fetchedData } = useGetData(`/poster/details/${posterDetailsId}`);
  // const username = fetchedData?.data?.username;
  // const password = fetchedData?.data?.password;
  // const posterId = fetchedData?.data?.posterId;
  // const links = fetchedData?.data?.links;
  // console.log("poster details", username);

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

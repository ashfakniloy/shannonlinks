import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { FaUser } from "react-icons/fa";
import Loader from "../../../components/common/Loader";
import EditPosterForm from "../../../components/Form/EditPosterForm";
import useGetData from "../../../hooks/useGetData";

function PosterEditPage() {
  const { data: session } = useSession();
  const { id, admin, adminId } = session ? session.user : "";

  const {
    back,
    query: { posterEditId },
  } = useRouter();

  const { fetchedData, isLoading } = useGetData(
    `/poster/details/${posterEditId}`
  );
  const username = fetchedData?.data?.username;
  const password = fetchedData?.data?.password;
  const posterId = fetchedData?.data?.posterId;
  const yourLinks = fetchedData?.data?.links;
  // console.log("poster details", username);

  const { fetchedData: fetchedLinks } = useGetData(`/link/get/${id}`);

  const allLinks = fetchedLinks?.users;

  const linksAvailable = allLinks?.filter((link) => {
    const newLink = `${link}/${adminId}/${posterId}`;
    return !yourLinks?.includes(newLink);
  });

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <span className="text-[28px] text-custom-blue2">
          <FaUser />
        </span>
        <h1 className="text-2xl font-bold text-custom-gray2">Edit Poster</h1>
      </div>

      <div className="my-5">
        <span
          className="text-sm text-blue-700 hover:text-blue-900 cursor-pointer"
          onClick={() => back()}
        >
          {"<"} Go Back
        </span>
      </div>

      <Loader isLoading={isLoading}>
        <div className="mt-7 bg-white p-4 lg:p-8 rounded shadow-md">
          <EditPosterForm
            id={id}
            posterEditId={posterEditId}
            adminId={adminId}
            username={username}
            password={password}
            posterId={posterId}
            yourLinks={yourLinks}
            linksAvailable={linksAvailable}
          />
        </div>
      </Loader>
    </div>
  );
}

export default PosterEditPage;

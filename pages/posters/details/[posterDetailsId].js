import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { FaUser } from "react-icons/fa";
import Table from "../../../components/Table";
import { collectionColumn } from "../../../components/Table/columns/collectionColumn";
import { API_URL } from "../../../config";
import useGetData from "../../../hooks/useGetData";

const usersData = [
  {
    site: "www.sitename.com/001/001",
    email: "email@email.com",
    password: "123456",
    skipcode: "abcd",
  },
  {
    site: "www.sitename.com/001/001",
    email: "email@email.com",
    password: "123456",
    skipcode: "abcd",
  },
  {
    site: "www.sitename.com/001/001",
    email: "email@email.com",
    password: "123456",
    skipcode: "abcd",
  },
  {
    site: "www.sitename.com/001/001",
    email: "email@email.com",
    password: "123456",
    skipcode: "abcd",
  },
  {
    site: "www.sitename.com/001/001",
    email: "email@email.com",
    password: "123456",
    skipcode: "abcd",
  },
  {
    site: "www.sitename.com/001/001",
    email: "email@email.com",
    password: "123456",
    skipcode: "abcd",
  },
];

function PosterDetailsPage({ data }) {
  // const { data: session } = useSession();
  // const { id, username, admin, adminId } = session ? session.user : "";
  // const {
  //   query: { posterDetailsId },
  // } = useRouter();

  // const { fetchedData } = useGetData(`/poster/details/${posterDetailsId}`);
  // const username = fetchedData?.data?.username;
  // const password = fetchedData?.data?.password;
  // const posterId = fetchedData?.data?.posterId;
  // const links = fetchedData?.data?.links;
  // console.log("poster details", username);

  const { username, password, posterId, links, details } = data?.data;

  console.log("dd", details);

  return (
    <div className="">
      <div className="flex items-center gap-3">
        <span className="text-[28px] text-custom-blue2">
          <FaUser />
        </span>
        <h1 className="text-2xl font-bold text-custom-gray2">Poster Details</h1>
      </div>

      <div className="mt-7 flex gap-8">
        <div className="sticky top-[157px] self-start">
          <div className="text-sm text-custom-gray3 font-semibold min-w-[350px] bg-white p-8 rounded shadow-md">
            <h4 className="text-xl text-black">Informations:</h4>
            <div className="mt-3 space-y-3">
              <p className="grid grid-cols-2">
                <span>Username:</span> <span>{username}</span>
              </p>
              <p className="grid grid-cols-2">
                <span>Password:</span> <span>{password}</span>
              </p>
              <p className="grid grid-cols-2">
                <span>Poster ID:</span> <span>{posterId}</span>
              </p>
            </div>

            <div className="mt-7">
              <h4 className="text-xl text-black">Links:</h4>
              <div className="mt-3 space-y-3">
                {links && links.map((link, i) => <p key={i}>{link}</p>)}
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-1">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-5">Collections:</h2>
            <div className="-mt-10">
              {details && (
                <Table columnsHeading={collectionColumn} usersData={details} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query: { posterDetailsId } }) {
  const url = `${API_URL}/poster/details/${posterDetailsId}`;
  const res = await fetch(url);
  const data = await res.json();

  // console.log(data);

  if (res.ok) {
    return { props: { data } };
  } else {
    return {
      notFound: true,
    };
  }
}

export default PosterDetailsPage;

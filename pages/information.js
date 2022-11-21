import { getSession } from "next-auth/react";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Table from "../components/Table";
import { infoColumn } from "../components/Table/columns/infoColumn";
import { API_URL } from "../config";
// import { infoData } from "../data/infoData";

function InformationPage({ data }) {
  console.log("data is", data);

  const infoData = data?.users;

  return (
    <div className="">
      <div className="flex items-center gap-3">
        <span className="text-[28px] text-custom-blue2">
          <FaEnvelope />
        </span>
        <h1 className="text-2xl font-bold text-custom-gray2">Information</h1>
      </div>

      <div className="mt-7 bg-white rounded shadow-md">
        {infoData && <Table columnsHeading={infoColumn} usersData={infoData} />}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const {
    user: { username, id, admin },
  } = await getSession(context);
  // const username = session.user.username;

  console.log(username);

  const url = `${API_URL}/info/${username}/${id}/${admin}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  console.log("data", data);

  return {
    props: { data },
  };
}

export default InformationPage;

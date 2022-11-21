import { getSession } from "next-auth/react";
import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import UserForm from "../components/Form/UserForm";
import Table from "../components/Table";
import { usersColumn } from "../components/Table/columns/usersColumn";
import Tabs from "../components/Tabs";

const userData = [
  { username: "user1", password: "1234", linkId: "001" },
  { username: "user2", password: "1234", linkId: "002" },
  { username: "user3", password: "1234", linkId: "003" },
  { username: "user4", password: "1234", linkId: "004" },
  { username: "user5", password: "1234", linkId: "005" },
];

function UsersPage() {
  const table = <Table columnsHeading={usersColumn} usersData={userData} />;
  const form = <UserForm />;

  const tabsData = [
    {
      label: "Add User",
      content: form,
    },
    {
      label: "All Users",
      content: table,
    },
  ];

  return (
    <div className="">
      <div className="flex items-center gap-3">
        <span className="text-[28px] text-custom-blue2">
          <FaUsers />
        </span>
        <h1 className="text-2xl font-bold text-custom-gray2">Users</h1>
      </div>

      <div className="mt-7 bg-white p-8 rounded shadow-md">
        <Tabs tabsData={tabsData} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const {
    user: { username, id, admin },
  } = await getSession(context);

  if (!admin) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

export default UsersPage;

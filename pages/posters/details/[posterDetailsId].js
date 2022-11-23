import React from "react";
import { FaUser } from "react-icons/fa";
import Table from "../../../components/Table";
import { collectionColumn } from "../../../components/Table/columns/collectionColumn";

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

function PosterDetailsPage() {
  return (
    <div className="">
      <div className="flex items-center gap-3">
        <span className="text-[28px] text-custom-blue2">
          <FaUser />
        </span>
        <h1 className="text-2xl font-bold text-custom-gray2">Poster Details</h1>
      </div>

      <div className="mt-7 flex gap-8">
        <div className="">
          <div className="text-base text-custom-gray3 font-semibold min-w-[350px] bg-white p-8 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-5 text-black">Details:</h2>
            <h4 className="grid grid-cols-2">
              <span>Username:</span> <span>Name</span>
            </h4>
            <h4 className="grid grid-cols-2">
              <span>Password:</span> <span>password</span>
            </h4>
            <h4 className="grid grid-cols-2">
              <span>Poster ID:</span> <span>posterid</span>
            </h4>

            <div className="mt-5">
              <h4 className="text-black">Links:</h4>
              <div className="">
                <h5 className="">https://www.Link.com/001/009</h5>
                <h5 className="">https://www.Link.com/001/009</h5>
                <h5 className="">https://www.Link.com/001/009</h5>
                <h5 className="">https://www.Link.com/001/009</h5>
                <h5 className="">https://www.Link.com/001/009</h5>
                <h5 className="">https://www.Link.com/001/009</h5>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-1">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-5">Collections:</h2>
            <div className="">
              {usersData && (
                <Table
                  columnsHeading={collectionColumn}
                  usersData={usersData}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PosterDetailsPage;

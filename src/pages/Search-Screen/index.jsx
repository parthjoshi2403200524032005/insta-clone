import React, { useState } from "react";
import { SimpleLayout } from "../../layouts/SimpleLayout";

function Search() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <SimpleLayout>
      <div
        className={`z-[9999] fixed top-0 left-0 h-full w-[400px] bg-[#000000] relative overflow-hidden  border-r border-gray-200 transform ${
          isOpen ? "translate-x-[-100px]" : "translate-x-0"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="">
          <h1 className="text-[20px] font-bold ml-[20px] mt-[20px] mb-[30px]">
            Search
          </h1>

          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleInputChange}
              className=" p-2 pl-10 rounded-lg bg-[#262626] text-white w-[360px] ml-[5px]"
            />
            <div className="absolute left-[10px] flex items-center pl-3 top-[13px]">
              {searchTerm ? (
                <svg
                  onClick={clearSearch}
                  className="w-4 h-4 text-gray-500 cursor-pointer "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 8.586L5.707 4.293a1 1 0 00-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 001.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10l4.293-4.293a1 1 0 00-1.414-1.414L10 8.586z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  aria-label="Search"
                  className="w-4 h-4  text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Search</title>
                  <path
                    d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="16.511"
                    x2="22"
                    y1="16.511"
                    y2="22"
                  ></line>
                </svg>
              )}
            </div>
            <hr className="mt-[30px]" />
            <div className="mt-4">
              {/* Example of search results */}
              <div className="flex items-center p-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="font-bold">Username</p>
                  <p className="text-gray-500">User's Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
}

export default Search;

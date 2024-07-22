import React from "react";
import { Link } from "react-router-dom";

export const SimpleLayout = ({ children }) => {
  return (
    <div className=" bg-[#000000] m-0">
      <main>
        <div
          style={{
            display: "flex",
          }}
        >
          <div className="border-r-2 rounded ml-0   p-10 mt-2 bg-[#000000] text-[#F5F5F5] shadow-md">
            <ul>
              <li>
                <Link to="/">
                  {" "}
                  <div className="flex text-[#F5F5F5] py-5  hover:bg-[#1A1A1A] gap-6 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#F5F5F5"
                      className="size-6"
                    >
                      <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                      <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>{" "}
                    Home
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/search">
                  <div className="flex py-5 text-[#F5F5F5] gap-6 hover:bg-[#1A1A1A] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#F5F5F5"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Search
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/create-post">
                  <div className="flex py-5 text-[#F5F5F5]  gap-6 hover:bg-[#1A1A1A] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#F5F5F5"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="black"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>{" "}
                    create
                  </div>
                </Link>
              </li>
              {/* <li><Link to="/search">Search</Link></li> */}
              <li>
                <Link to="/notification">
                  <div className="flex gap-6 py-5 text-[#F5F5F5]  hover:bg-[#1A1A1A] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#F5F5F5"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="black"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    Notifactions
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <div className="flex gap-6 py-5 text-[#F5F5F5]   hover:bg-[#1A1A1A] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#F5F5F5"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Login
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <div className="flex gap-6 py-5 text-[#F5F5F5]   hover:bg-[#1A1A1A] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#F5F5F5"
                      className="size-6"
                    >
                      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                    </svg>
                    Users
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <div className="flex gap-6 py-5 text-[#F5F5F5]   hover:bg-[#1A1A1A] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#F5F5F5"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="black"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                      />
                    </svg>
                    Signup
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/edit-profile">
                  <div className="flex py-5 text-[#F5F5F5] gap-6 hover:bg-[#1A1A1A]">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#F5F5F5"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="black"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                    EditDetails
                  </div>
                </Link>
              </li>
              <li>
                <Link >
               
               <div className="flex py-5 text-[#F5F5F5] gap-6 hover:bg-[#1A1A1A]">
               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#F5F5F5"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  More
               </div>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <div className="flex py-5 gap-6 text-[#F5F5F5]   hover:bg-[#1A1A1A] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#F5F5F5"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="black"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                    Profile
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div
            style={{
              // display: "flex",
               margin: "0px 0px 0px 0px",
              justifyContent: "space-evenly",
              // flexDirection: "column",
              // flex: 1,
              // marginBlockStart: "50px",
              // padding: "20px",
            }}
          >
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

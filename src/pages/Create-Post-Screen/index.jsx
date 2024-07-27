import React, { useState } from "react";
import { SimpleLayout } from "../../layouts/SimpleLayout";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <SimpleLayout>
      <div
        className={`fixed top-0 left-0 h-full w-full z-40 bg-black/50 blur-sm`}
      ></div>
      <div className={`fixed top-0 left-0 h-full w-full z-50 overflow-hidden`}>
        <div className=" text-center ml-[450px] mt-[80px] w-[680px] h-[700px] bg-[#262626] p-[10px] rounded-[15px]">
          <h1>Create new post</h1>
          <hr className="border-[20px solid] border-[#363636] h-[0px] w-full mt-[10px]" />

          <div className=" mt-[200px] ml-[0px] ">
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />

            <svg
              aria-label="Icon to represent media such as images or videos"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="100"
              role="img"
              viewBox="0 0 97.6 77.3"
              width="100"
              className="ml-[275px]"
            >
              <title>Icon to represent media such as images or videos</title>
              <path
                d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                fill="currentColor"
              ></path>
              <path
                d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                fill="currentColor"
              ></path>
              <path
                d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="font-semibold text-[18px] ">
              Drag photos and videos here
            </p>
            <h1
              onClick={handleButtonClick}
              className=" w-[180px] h-8 text-[white] cursor-pointer hover:bg-[#1877F2] font-medium text-[15px] bg-[#1877F2]  rounded-[8px] align-center text-center pt-1 ml-[240px] mt-[20px]"
            >
              Select from computer
            </h1>
          </div>
        </div>
        <div
          onClick={() => navigate(-1)}
          className="cursor-pointer  fixed top-[20px] right-0 mb-4 mr-4"
        >
          <svg
            aria-label="Close"
            class="x1lliihq x1n2onr6 x9bdzbf"
            fill="currentColor"
            height="18"
            role="img"
            viewBox="0 0 24 24"
            width="18"
          >
            <title>Close</title>
            <polyline
              fill="none"
              points="20.643 3.357 12 12 3.353 20.647"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            ></polyline>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              x1="20.649"
              x2="3.354"
              y1="20.649"
              y2="3.354"
            ></line>
          </svg>
        </div>
      </div>
    </SimpleLayout>
  );
}

export default CreatePost;

import React, { useState } from "react";

function Stories({ stories }) {
  const [currentPage, setCurrentPage] = useState(0);
  const storiesPerPage = 8;

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if ((currentPage + 1) * storiesPerPage < stories.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Slice the stories to show only the current page's worth of stories
  const displayedStories = stories.slice(
    currentPage * storiesPerPage,
    (currentPage + 1) * storiesPerPage
  );

  const showPrevArrow = currentPage > 0;
  const showNextArrow = (currentPage + 1) * storiesPerPage < stories.length;

  return (
    <div className="relative">
      <div className="flex space-x-4 overflow-x-auto">
        {displayedStories.map((story, index) => (
          <div
            key={index}
            className="w-[65px] h-[65px] flex-shrink-0 rounded-full border-2 border-red-500 overflow-hidden cursor-pointer"
          >
            <img
              src={story.imageUrl}
              alt="story"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {showPrevArrow && (
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            className="mt-[5px]"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zm1.289-15.7 1.422 1.4-4.3 4.344 4.289 4.245-1.4 1.422-5.714-5.648z" />
          </svg>
        </button>
      )}
      {showNextArrow && (
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            className="mt-[5px]"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Stories;

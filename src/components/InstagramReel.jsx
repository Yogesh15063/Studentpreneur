import React from "react";

const InstagramReel = () => {
  return (
    <div className="flex justify-center m-4 items-center">
      {/* Wrapper div for Instagram Reels */}
      <div className="flex justify-between flex-wrap m-4 max-w-screen-lg flex-col lg:flex-row">
        {/* Instagram Reels */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="relative flex-shrink-0 w-32 boder border-black  h-40 lg:w-72 lg:h-96 mb-8 lg:mb-0" style={{ marginRight: index < 2 ? "20px" : "0" }}>
            <iframe
              src="https://www.instagram.com/p/C1ZdQ1NJ4TG/embed/"
              allowtransparency="true"
              title={`Instagram Reel ${index + 1}`}
              className="border-none overflow-hidden rounded w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramReel;


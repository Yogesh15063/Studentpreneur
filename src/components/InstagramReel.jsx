import React from "react";

const InstagramReel = () => {
  return (
    <div className="flex justify-center m-4 items-center">
      {/* Wrapper div for Instagram Reels */}
      <div className="flex justify-between flex-wrap m-4 max-w-screen-lg flex-col lg:flex-row">
        {/* Instagram Reels */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="relative flex-shrink-0 w-full lg:w-1/3 xl:w-1/4 rounded-lg overflow-hidden mb-8 lg:mb-0 lg:mr-8">
            <div className="glow-wrapper overflow-hidden">
              <iframe
                src="https://www.instagram.com/p/C1ZdQ1NJ4TG/embed/"
                allowtransparency="true"
                title={`Instagram Reel ${index + 1}`}
                className="border-none w-full h-32 lg:h-48"
              ></iframe>
            </div>
            <div className="bg-white p-4 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Instagram Reel {index + 1}</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramReel;





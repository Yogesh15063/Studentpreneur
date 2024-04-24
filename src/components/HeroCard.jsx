import React from "react";

const Card = () => {
  const gradientStyle = {
    background: "linear-gradient(to right, #37136B, #94138B)",
  };

  const handleJoinNowClick = () => {
    // Replace the URL below with the link you want to redirect to
    window.location.href = "https://example.com";
  };

  return (
    <div
      className="max-w-md p-6 font-poppins rounded-lg shadow-lg dark:border-gray-600"
      style={gradientStyle}
    >
      <h4 className="text-xs text-gray-300 font-poppins font-semibold uppercase">
        Studentpreneur
      </h4>
      <h2 className="text-xl font-poppins font-semibold text-gray-200 mb-4">
        Community
      </h2>
      <div className="flex items-center mb-4">
        <img src="2.png" alt="Idea Icon" className="w-8 h-8 mr-2" />
        <h3 className="text-lg font-poppins font-semibold text-3xl text-white flex-shrink-0">
          Idea x Builders
        </h3>
        <img src="3.png" alt="Builders Icon" className="w-8 h-8 ml-1" />
      </div>
      <h3 className="italic font-semibold font-poppins text-gray-200">
        "Who Are We?"
      </h3>
      <div className="flex items-center">
        <p className="text-white flex-grow mr-4">
          We are shaping the future of the world by bringing together Ideas,
          execution and talent under one virtual roof
        </p>
        <button
          onClick={handleJoinNowClick}
          className="bg-transparent border-2 text-xs h-8 rounded-full border-white text-white p-1"
          style={{ minWidth: "80px" }}
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Card;

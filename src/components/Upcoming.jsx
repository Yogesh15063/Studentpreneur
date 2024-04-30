import React from "react";

const Upcoming = ({ title, description, imageSrc, website }) => {
  return (
    <div className="relative w-full sm:w-1/2 max-w-xl p-6 mb-4 sm:mb-0 font-poppins mr-2  rounded-lg shadow-lg dark:border-gray-600 transition duration-500 ease-in-out transform opacity-100 translate-y-0" style={{backgroundImage: "linear-gradient(to right, #37136B, #94138B)"}}>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs text-gray-300 mb-0 font-semibold uppercase">
            New
          </span>{" "}
          <br />
          <span className="text-xl font-semibold text-gray-200 ">
            {title}
          </span>
          <span className="flex items-center">
            <span className="font-bold text-4xl flex-shrink-0 text-white">
              {description}
            </span>
          </span>
          <button onClick={() => window.open(website, "_blank")} className="bg-transparent border-2 text-xs h-8 rounded-full border-white text-white p-1 mt-4" style={{ minWidth: "80px", width: "80px" }}>
            Try Now {/* Added width style */}
          </button>
        </div>
        <div className="w-32 sm:w-48 ml-4  flex justify-center">
  <img className="w-full h-full  rounded-lg" src={imageSrc} alt={title} /> {/* Adjusted class */}
</div>
      </div>
    </div>
  );
};

const UpcomingProducts = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="flex justify-center">
      
      </div>
      <div className="flex flex-col justify-center" id="products">
        <div className="max-w-screen-xl mb-8 w-full sm:flex justify-between">
          <Upcoming 
            title="Side Project"
            description="Litebulb"
            imageSrc="litebulb.png"
            website="https://ratofy.xyz/"
          />
          <Upcoming
            title="chatbot"
            description="Cyberbot"
            imageSrc="kabir.png"
            website="https://www.hoodiny.shop/"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingProducts;

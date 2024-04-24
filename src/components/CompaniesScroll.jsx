import React from "react";

const Marquee = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <marquee direction="left">{children}</marquee>
    </div>
  );
};

const CompanyLogosMarquee = () => {
  return (
      <>
      <div className="flex justify-center mb-8 text-4xl font-poppins text-white font-bold"><h1>Our Clients</h1></div>
    <div className="flex mb-8 justify-center items-center ">
        
      <div className="w-3/4 bg-slate-800 p-2"> {/* Adjusted max-width */}
        <Marquee>
          {/* Insert your company logos here */}
          <div className="flex ">
            <img src="Ratofy.png" alt="Company Logo 1" className="h-12 mx-8" />
            <img src="hoodiny.png" alt="Company Logo 2" className="h-12 mx-8" />
            <img src="3.png" alt="Company Logo 3" className="h-12 mx-8" />
          </div>
          {/* Add more logos as needed */}
        </Marquee>
      </div>
    </div>
    </>
  );
};

export default CompanyLogosMarquee;

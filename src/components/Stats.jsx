import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function Stats() {
  const gradientStyle = {
    background: "linear-gradient(to right, #37136B, #94138B)",
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [animated, setAnimated] = useState(false);

  if (inView && !animated) {
    setAnimated(true);
  }

  return (
    <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div
        className={`flex justify-center items-center w-full ${
          animated ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`max-w-3xl w-full p-8 sm:p-12 font-poppins rounded-lg shadow-lg dark:border-gray-600 ${
            animated ? "animate-fadeIn" : "opacity-0"
          }`}
          style={gradientStyle}
        >
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-xl lg:text-3xl text-gray-300 font-poppins font-semibold uppercase mb-2">
              Our Entrepreneurs
            </h1>
          </div>
          <div className="flex justify-around">
            <StatCounter start={0} end={8500} duration={2} text="Followers" />
            <StatCounter start={0} end={523} duration={2} text="Members" />
            <StatCounter start={0} end={30} duration={2} text="Gigs done" />
            <StatCounter start={0} end={8} duration={2} text="Side Projects" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Separate component for CountUp component to improve reusability and readability
const StatCounter = ({ start, end, duration, text }) => {
  return (
    <div className="text-center mb-4 inline-block w-32 sm:w-auto">
      <div className="flex flex-col items-center">
        <CountUp start={start} end={end} duration={duration}>
          {({ countUpRef }) => (
            <p className="text-3xl lg:text-4xl text-gray-200 font-semibold" ref={countUpRef} />
          )}
        </CountUp>
        <span className="text-xl ml-1 font-bold text-white">+</span>
        <p className="text-sm lg:text-base text-gray-300">{text}</p>
      </div>
    </div>
  );
};




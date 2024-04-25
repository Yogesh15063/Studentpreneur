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
    <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8"> {/* Add margin top and bottom to create distance from the screen edges */}
      <div
        className={`flex justify-center  items-center w-full ${animated ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className={`max-w-3xl w-full p-12 font-poppins rounded-lg shadow-lg dark:border-gray-600 ${animated ? "animate-fadeIn" : "opacity-0"}`}
          style={gradientStyle}
        >
          <div className="flex justify-center">
            <h1 className="text-2xl lg:text-3xl text-gray-300 font-poppins font-semibold uppercase mb-4">
              Our Entrepreneurs
            </h1>
          </div>
          <div className="flex justify-around">
            {/* Animated count-up components */}
            <div
              className="text-center transition-all duration-500 transform hover:scale-110"
            >
              <div className="flex justify-center">
                <CountUp start={0} end={8500} duration={2} redraw={true}>
                  {({ countUpRef }) => (
                    <p className="text-lg text-gray-200 font-semibold" ref={countUpRef} />
                  )}
                </CountUp>
                <span className="text-xl ml-1 font-bold text-white">+</span>
              </div>
              <p className="text-sm text-gray-300">Followers</p>
            </div>
            <div
              className="text-center transition-all duration-500 transform hover:scale-110"
            >
              <div className="flex justify-center">
                <CountUp start={0} end={523} duration={2} redraw={true}>
                  {({ countUpRef }) => (
                    <p className="text-lg text-gray-200 font-semibold" ref={countUpRef} />
                  )}
                </CountUp>
                <span className="text-xl ml-1 font-bold text-white">+</span>
              </div>
              <p className="text-sm text-gray-300">Members</p>
            </div>
            <div
              className="text-center transition-all duration-500 transform hover:scale-110"
            >
              <div className="flex justify-center">
                <CountUp start={0} end={30} duration={2} redraw={true}>
                  {({ countUpRef }) => (
                    <p className="text-lg text-gray-200 font-semibold" ref={countUpRef} />
                  )}
                </CountUp>
                <span className="text-xl ml-1 font-bold text-white">+</span>
              </div>
              <p className="text-sm text-gray-300">Gigs done</p>
            </div>
            <div
              className="text-center transition-all duration-500 transform hover:scale-110"
            >
              <div className="flex justify-center">
                <CountUp start={0} end={8} duration={2} redraw={true}>
                  {({ countUpRef }) => (
                    <p className="text-lg text-gray-200 font-semibold" ref={countUpRef} />
                  )}
                </CountUp>
                <span className="text-xl ml-1 font-bold text-white">+</span>
              </div>
              <p className="text-sm text-gray-300">Side Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


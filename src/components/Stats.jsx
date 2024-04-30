import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

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
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Our Numbers
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

const StatCounter = ({ start, end, duration, text }) => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    if (triggerAnimation) {
      setTriggerAnimation(false);
    }
  }, [triggerAnimation]);

  useEffect(() => {
    setTriggerAnimation(true);
  }, [start, end, duration, text]);

  return (
    <div className="text-center mb-4 inline-block w-32 sm:w-auto">
      <div className="flex flex-col items-center">
        <CountUp start={start} end={end} duration={duration} redraw={true} startOnMount={false} preserveValue={!triggerAnimation}>
          {({ countUpRef }) => (
            <p className="text-xl lg:text-2xl text-gray-200 font-semibold" ref={countUpRef} />
          )}
        </CountUp>
        <span className="text-lg font-bold text-white">+</span>
        <p className="text-xs lg:text-sm text-gray-300">{text}</p>
      </div>
    </div>
  );
};






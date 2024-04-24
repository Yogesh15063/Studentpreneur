import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

function Services() {
  const gradientStyle = {
    background: "linear-gradient(to right, #37136B, #94138B)",
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [animated, setAnimated] = useState(false);

  // Check if the element is in view and animation has not yet occurred
  // Then trigger animation and set state to mark it as animated
  if (inView && !animated) {
    setAnimated(true);
  }

  return (
    <div ref={ref} className="flex justify-center items-center mt-12 mb-8 w-full">
      <div
        className={`max-w-3xl w-full p-12 font-poppins rounded-lg shadow-lg dark:border-gray-600 transition duration-500 ease-in-out transform ${
          animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={gradientStyle}
      >
        <h4 className="text-l text-gray-300 font-poppins font-semibold uppercase">
          Our Services
        </h4>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-poppins font-semibold text-gray-200">
            <span className="font-bold text-3xl sm:text-4xl">Community</span><br />
            <span className="font-bold text-3xl sm:text-4xl">Sourced</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Services;

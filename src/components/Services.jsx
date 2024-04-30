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
    <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8"> {/* Add margin top to create distance from the screen edges */}
      <div className="flex justify-center items-center w-full">
        <div
          className={`max-w-3xl w-full p-12 font-poppins rounded-lg shadow-lg dark:border-gray-600 transition duration-500 ease-in-out transform ${
            animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={gradientStyle}
        >
          <h4 className="text-l text-white font-poppins text-xl font-bold uppercase m">
            <span className="font-bold text-3xl sm:text-4xl">Our Services</span> {/* Made "Our Services" slightly smaller */}
          </h4>
          <div>
            <h2 className="text-lg sm:text-xl font-poppins font-semibold text-gray-400">
              <span className="text-2xl sm:text-3xl font-bold">Community</span><br />
              <span className="text-2xl sm:text-3xl font-bold">Sourced</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;


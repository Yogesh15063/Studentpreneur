import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Services() {
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
    <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 m-2">
      <div className="flex flex-col justify-center items-center w-full">
        <motion.div
          className={`max-w-screen-xl w-full p-12 font-poppins rounded-lg shadow-lg dark:border-gray-600 transition duration-500 ease-in-out transform ${
            animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={gradientStyle}
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          <div className="text-center">
            <h4 className="text-l text-white font-poppins text-xl font-bold uppercase m">
              <span className="font-bold text-3xl sm:text-4xl">Our Services</span>
            </h4>
            <h2 className="text-lg sm:text-xl font-poppins font-semibold text-gray-400">
              <span className="text-2xl sm:text-3xl font-bold">Community</span><br />
              <span className="text-2xl sm:text-3xl font-bold">Sourced</span>
            </h2>
          </div>
          <div className="flex justify-center mt-4">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px #ccc", rotate: [0, -5, 5, -5, 0] }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 font-poppins text-white font-bold py-2 px-4 rounded-full sm:py-3 sm:px-6 sm:text-xs"
              >
                Explore Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Upcoming = ({ title, description, imageSrc, website }) => {
  const [animated, setAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !animated) {
      setAnimated(true);
    }
  }, [inView, animated]);

  return (
     <motion.div
      ref={ref}
      className={`relative w-full sm:w-1/2 max-w-xl p-6 sm:mb-0 font-poppins  mr-2 mt-2 rounded-lg shadow-lg dark:border-gray-600 transform`}
      style={{ backgroundImage: "linear-gradient(to right, #37136B, #94138B)" }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: animated ? 1 : 0, scale: animated ? 1 : 0.8 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs text-gray-300 mb-0 font-semibold uppercase">
            New
          </span>{" "}
          <br />
          <span className="text-xl font-semibold text-gray-200 ">{title}</span>
          <span className="flex items-center">
            <span className="font-bold text-4xl flex-shrink-0 text-white">
              {description}
            </span>
          </span>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px #ccc", rotate: [0, -5, 5, -5, 0] }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(website, "_blank")}
            className="bg-transparent border-2 text-xs h-8 rounded-full border-white text-white p-1 mt-4"
            style={{ minWidth: "80px", width: "80px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: animated ? 1 : 0, y: animated ? 0 : 20 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
          >
            Try Now
          </motion.button>
        </div>
        <motion.div
          className="w-32 sm:w-48 ml-4 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: animated ? 1 : 0, scale: animated ? 1 : 0.8 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
        >
          <img className="w-full h-full rounded-lg" src={imageSrc} alt={title} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const UpcomingProducts = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
      
      <div className="flex justify-center"> {/* Center-aligning container */}
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

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Card = () => {
  const [animated, setAnimated] = useState(false);
  const control = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimated(true);
      control.start({
        boxShadow: animated
          ? "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF00FF, 0 0 70px #FF00FF, 0 0 80px #FF00FF, 0 0 100px #FF00FF, 0 0 150px #FF00FF"
          : "none",
        transition: {
          duration: 2, // Adjust animation duration
          loop: Infinity,
          ease: "easeInOut", // Adjust easing function
        },
      });
    }, 100); // Add a brief delay before starting animation

    return () => clearTimeout(timeout);
  }, [animated, control]);

  const handleJoinNowClick = () => {
    window.location.href = "https://example.com";
  };

  return (
    <motion.div
      className="max-w-md p-6 font-poppins rounded-lg shadow-lg dark:border-gray-600 transition duration-500 ease-in-out transform"
      style={{
        backgroundImage: "linear-gradient(to right, #37136B, #94138B)",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h4 className="text-xs text-gray-300 font-semibold uppercase">
        Studentpreneur
      </h4>
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Community</h2>
      <div className="flex items-center mb-4">
        <img src="2.png" alt="Idea Icon" className="w-8 h-8 mr-2" />
        <h3 className="font-semibold text-3xl text-white flex-shrink-0">
          Idea x Builders
        </h3>
        <img src="3.png" alt="Builders Icon" className="w-8 h-8 ml-1" />
      </div>
      <h3 className="italic font-semibold text-gray-200">"Who Are We?"</h3>
      <div className="flex items-center">
        <p className="text-white flex-grow mr-4">
          We are shaping the future of the world by bringing together Ideas,
          execution and talent under one virtual roof
        </p>
        <motion.button
          onClick={handleJoinNowClick}
          className="bg-transparent text-xs h-8 rounded-full text-white p-1"
          style={{
            minWidth: "80px",
            border: "2px solid ",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Join Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Card;


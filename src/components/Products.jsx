import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Product = ({ title, description, imageSrc, website, isFirst, isLast }) => {
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
          {title === "AI Fashion Brand" ? (
            <span className="text-xs text-gray-300 font-semibold uppercase">
              India's First
            </span>
          ) : (
            <span className="text-xs text-gray-300 font-semibold uppercase">
              Decentralized
            </span>
          )}
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
            className="bg-transparent border-2 text-xs h-8 rounded-full border-white text-white p-1 mt-4"
            style={{ minWidth: "80px", width: "80px" }}
            onClick={() => window.open(website, "_blank")}
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
          <img className="w-full h-full rounded" src={imageSrc} alt={title} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  return (
    <div id="products" className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 ">
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="font-poppins mb-6 font-bold text-white text-4xl">
          Our Products
        </h1>
      </motion.div>
      <div className="flex justify-center"> {/* Center-aligning container */}
        <motion.div
          className="max-w-full mb-5 w-full sm:flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        >
          <Product
            title="Social Media"
            description="Ratofy"
            imageSrc="access.png"
            website="https://ratofy.xyz/"
            isFirst
          />
          <Product
            title="AI Fashion Brand"
            description="Hoodiny"
            imageSrc="hoodiny.png"
            website="https://www.hoodiny.shop/"
            isLast
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

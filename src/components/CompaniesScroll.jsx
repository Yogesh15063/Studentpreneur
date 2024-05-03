import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <marquee direction="left">{children}</marquee>
    </div>
  );
};

const CompanyLogosMarquee = ({ images }) => {
  return (
    <>
      <div className="mb-20">
        <div className="flex justify-center mb-8 text-4xl font-poppins text-white font-bold">
          <h1>Our Clients</h1>
        </div>
        <div className="flex mb-8 justify-center items-center">
          <div className="w-3/4 rounded-lg p-2">
            {/* Apply animation to the Marquee component */}
            <Marquee>
              <div className="flex">
                {images.map((imageUrl, index) => (
                  <motion.img
                    key={index}
                    src={imageUrl}
                    alt={`Company Logo ${index + 1}`}
                    className="h-12 mx-8 animate-pulse"
                    whileHover={{ scale: 1.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyLogosMarquee;



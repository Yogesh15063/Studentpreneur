import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const Product = ({ title, description, imageSrc, website }) => {
  const [animated, setAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (inView && !animated) {
    setAnimated(true);
  }

  return (
    <div
      ref={ref}
      className={`relative w-full sm:w-1/2 max-w-xl p-6  sm:mb-0 font-poppins mr-2 mt-2 rounded-lg shadow-lg dark:border-gray-600 transition duration-500 ease-in-out transform ${
        animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundImage: "linear-gradient(to right, #37136B, #94138B)" }}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs text-gray-300 font-semibold uppercase">
            Decentralized
          </span>{" "}
          <br />
          <span className="text-xl font-semibold text-gray-200 ">{title}</span>
          <span className="flex items-center">
            <span className="font-bold text-4xl flex-shrink-0 text-white">
              {description}
            </span>
          </span>
          <button
            onClick={() => window.open(website, "_blank")}
            className="bg-transparent border-2 text-xs h-8 rounded-full border-white text-white p-1 mt-4"
            style={{ minWidth: "80px", width: "80px" }}
          >
            Try Now
          </button>
        </div>
        <div className="w-32 sm:w-48 ml-4 flex justify-center">
          <img className="w-full h-full rounded" src={imageSrc} alt={title} />
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="flex justify-center">
        <h1 className="font-poppins mb-6 font-bold text-white text-4xl transition duration-500 ease-in-out transform">
          Our Products
        </h1>
      </div>
      <div className="flex flex-col justify-center" id="products">
        <div className="max-w-screen-xl mb-8 w-full sm:flex justify-between">
          <Product 
            title="Social Media"
            description="Ratofy"
            imageSrc="access.png"
            website="https://ratofy.xyz/"
          />
          <Product 
            title="AI Fashion Brand"
            description="Hoodiny"
            imageSrc="hoodiny.png"
            website="https://www.hoodiny.shop/"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;

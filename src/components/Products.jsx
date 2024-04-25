import React from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

const Product = ({ name, description, imageUrl, websiteUrl }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: 100,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`w-full sm:w-1/2 max-w-md p-6 mb-4 sm:mb-0 font-poppins mr-2 mt-2 rounded-lg shadow-lg dark:border-gray-600 transition duration-500 ease-in-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        backgroundImage: "linear-gradient(to right, #37136B, #94138B)",
      }}
    >
      <div className="flex justify-between mt-3">
        <div>
          <span className="text-xs text-gray-300 font-semibold uppercase">
            Decentralized
          </span>{" "}
          <br />
          <span className="text-xl font-semibold text-gray-200 mb-4">
            {description}
          </span>
          <span className="flex items-center mb-4">
            <span className="font-bold text-4xl flex-shrink-0 text-white">
              {name}
            </span>
          </span>
        </div>
        <img className="w-24 h-24 mt-11 mr-9" src={imageUrl} alt={name} />
      </div>
      <span className="flex items-center">
        <button
          onClick={() => window.open(websiteUrl, "_blank")}
          className="bg-transparent border-2 text-xs h-8 rounded-full border-white text-white p-1"
          style={{ minWidth: "80px" }}
        >
          Try Now
        </button>
      </span>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
};

const Products = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="flex justify-center">
        <h1 className="font-poppins mb-6 font-bold text-white text-4xl transition duration-500 ease-in-out transform">
          Our Products
        </h1>
      </div>
      <div className="flex justify-center" id="products">
        <div className="max-w-screen-lg mb-8 w-full">
          <div className="flex flex-wrap justify-around">
            <Product
              name="Ratofy"
              description="Social Media"
              imageUrl="Ratofy.png"
              websiteUrl="https://ratofy.xyz/"
            />
            <Product
              name="Hoodiny"
              description="AI Fashion Brand"
              imageUrl="hoodiny.png"
              websiteUrl="https://www.hoodiny.shop/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

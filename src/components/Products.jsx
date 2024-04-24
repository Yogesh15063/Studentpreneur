import React from "react";
import { useInView } from "react-intersection-observer";

export default function Products() {
  const handleJoinNowClick = (url) => {
    window.open(url, "_blank");
  };

  // Using useInView for animation on scroll
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.5,
    delay: 100, // Add a delay to ensure the animation happens after the element is fully in view
    triggerOnce: true, // Trigger animation only once
  });

  // Using useInView for animation on scroll
  const { ref: product1Ref, inView: product1InView } = useInView({
    threshold: 0.5,
    delay: 100, // Add a delay to ensure the animation happens after the element is fully in view
    triggerOnce: true, // Trigger animation only once
  });

  // Using useInView for animation on scroll
  const { ref: product2Ref, inView: product2InView } = useInView({
    threshold: 0.5,
    delay: 100, // Add a delay to ensure the animation happens after the element is fully in view
    triggerOnce: true, // Trigger animation only once
  });

  return (
    <>
      <div className="flex justify-center">
        <h1
          ref={headingRef}
          className={`font-poppins mb-6 font-bold text-white text-4xl transition duration-500 ease-in-out transform ${
            headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ willChange: "opacity, transform" }}
        >
          Our Products
        </h1>
      </div>
      <div className="flex justify-center" id="products">
        <div className="max-w-screen-lg mb-8 w-full">
          <div className="flex flex-wrap justify-around">
            {/* Product 1 */}
            <div
              ref={product1Ref}
              className={`w-full sm:w-1/2 max-w-md p-6 mb-4 sm:mb-0 font-poppins rounded-lg shadow-lg dark:border-gray-600 transition duration-500 ease-in-out transform ${
                product1InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                    Social Media
                  </span>
                  <span className="flex items-center mb-4">
                    <span className="font-bold text-4xl flex-shrink-0 text-white">
                      Ratofy
                    </span>
                  </span>
                </div>
                <img
                  className="w-24 h-24 mt-11 mr-9"
                  src="Ratofy.png"
                  alt="Ratofy"
                />
              </div>
              <span className="flex items-center">
                <button
                  onClick={() => handleJoinNowClick("https://ratofy.xyz/")}
                  className="bg-transparent border-2 text-xs h-8 rounded-full border-white text-white p-1"
                  style={{ minWidth: "80px" }}
                >
                  Try Now
                </button>
              </span>
            </div>

            {/* Product 2 */}
            <div
              ref={product2Ref}
              className={`w-full sm:w-1/2 max-w-md p-6 mb-4 sm:mb-0 font-poppins rounded-lg shadow-lg dark:border-gray-600 transition duration-500 ease-in-out transform ${
                product2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                backgroundImage: "linear-gradient(to right, #37136B, #94138B)",
              }}
            >
              <div className="flex justify-between mt-3">
                <div>
                  <span className="text-xs text-gray-300 font-semibold uppercase">
                    AI Fashion
                  </span>{" "}
                  <br />
                  <span className="text-xl font-semibold text-gray-200 mb-4">
                    Brand
                  </span>
                  <span className="flex items-center mb-4">
                    <span className="font-bold text-4xl flex-shrink-0 text-white">
                      Hoodiny
                    </span>
                  </span>
                </div>
                <img
                  className="w-24 h-24 mt-11 mr-9"
                  src="hoodiny.png"
                  alt="Hoodiny"
                />
              </div>
              <span className="flex items-center">
                <button
                  onClick={() => handleJoinNowClick("https://www.hoodiny.shop/")}
                  className="bg-transparent border-2 text-xs h-8 rounded-full border-white text-white p-1"
                  style={{ minWidth: "80px" }}
                >
                  Try Now
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


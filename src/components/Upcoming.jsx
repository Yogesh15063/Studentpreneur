import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Upcoming() {
    const [headingAnimated, setHeadingAnimated] = useState(false);
    const [project1Animated, setProject1Animated] = useState(false);
    const [project2Animated, setProject2Animated] = useState(false);

    const gradientStyle = {
        background: "linear-gradient(to right, #37136B, #94138B)",
    };

    const handleJoinNowClick = () => {
        window.open("https://www.litebulb.xyz/", "_blank");
    };

    const handleJoinNowClick2 = () => {
        window.open("https://example.com", "_blank");
    };

    // Using useInView for animation on scroll
    const { ref: headingRef, inView: headingInView } = useInView({
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px', // Trigger animation when scrolled 50px from the bottom
    });

    // Using useInView for animation on scroll
    const { ref: project1Ref, inView: project1InView } = useInView({
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px', // Trigger animation when scrolled 50px from the bottom
    });

    // Using useInView for animation on scroll
    const { ref: project2Ref, inView: project2InView } = useInView({
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px', // Trigger animation when scrolled 50px from the bottom
    });

    // Check if the element is in view and animation has not yet occurred
    // Then trigger animation and set state to mark it as animated
    if (headingInView && !headingAnimated) {
        setHeadingAnimated(true);
    }

    if (project1InView && !project1Animated) {
        setProject1Animated(true);
    }

    if (project2InView && !project2Animated) {
        setProject2Animated(true);
    }

    return (
        <>
            <div className="flex justify-center">
                <h1
                    ref={headingRef}
                    className={`font-poppins mb-6 font-bold text-white text-4xl transition duration-500 ease-in-out transform ${
                        headingAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ willChange: 'opacity, transform' }}
                >
                    Upcoming Projects
                </h1>
            </div>
            <div className="flex justify-center">
                <div className="max-w-screen-lg mb-8 w-full">
                    <div className="flex flex-wrap justify-around">
                        {/* Project 1 */}
                        <span
                            ref={project1Ref}
                            className={`w-full sm:w-1/2 max-w-md p-6 mb-4 sm:mb-0 font-poppins relative rounded-lg shadow-lg dark:border-gray-600 transition duration-500 ease-in-out transform ${
                                project1Animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={gradientStyle}
                        >
                            <div className="flex justify-between mt-3">
                                <div>
                                    <span className="text-xs text-gray-300 font-poppins font-semibold uppercase">
                                        New
                                    </span>{' '}
                                    <br />
                                    <span className="text-xl font-poppins font-semibold text-gray-200 mb-4">
                                        Side Project
                                    </span>
                                    <span className="flex items-center mb-4">
                                        <span className="font-poppins text-white font-bold text-4xl flex-shrink-0">
                                            Light Bulb
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <span className="flex items-center">
                                <button
                                    onClick={handleJoinNowClick}
                                    className="bg-transparent border-2 text-xs h-8 rounded-full border-white text-white p-1"
                                    style={{ minWidth: '80px' }}
                                >
                                    Try Now
                                </button>
                            </span>
                        </span>

                        {/* Project 2 */}
                        <span
                            ref={project2Ref}
                            className={`w-full sm:w-1/2 max-w-md p-6 mb-4 sm:mb-0 font-poppins relative rounded-lg shadow-lg dark:border-gray-600 transition duration-500 ease-in-out transform ${
                                project2Animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={gradientStyle}
                        >
                            <div className="flex justify-between mr-3 mt-3">
                                <div>
                                    <span className="text-xs text-gray-300 font-poppins font-semibold uppercase">
                                        New
                                    </span>{' '}
                                    <br />
                                    <span className="text-xl font-poppins font-semibold text-gray-200 mb-4">
                                        Cyberbot
                                    </span>
                                    <span className="flex items-center mb-4">
                                        <span className="font-poppins text-white font-bold text-4xl flex-shrink-0">
                                            Kabir
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <img className="absolute right-1 bottom-0 w-80" src="cyber.png" alt="" />
                            <span className="flex items-center mr-3">
                                <button
                                    onClick={handleJoinNowClick2}
                                    className="bg-transparent border-2 text-xs h-8 rounded-full border-white text-white p-1"
                                    style={{ minWidth: '80px' }}
                                >
                                    Try Now
                                </button>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}


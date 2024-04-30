import React from 'react';
import Card from './HeroCard'; // Assuming Card component is in a separate file

const HeroSection = () => {
  return (
    <div id='HeroSection'className="container mx-auto  flex flex-col md:flex-row items-center justify-between px-4 py-8">
      {/* Image */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8 flex justify-center ">
        <img src="Hero.png" alt="Hero Image" className="w-full h-full " style={{ maxWidth: '100%' }} />
      </div>
      
      {/* Card */}
      <div className="md:w-1/2 md:ml-8">
        <Card /> 
      </div>
    </div>
  );
}

export default HeroSection;

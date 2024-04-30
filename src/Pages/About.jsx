import React from 'react';

const About = () => {
  const gradientStyle = {
    background: "linear-gradient(to right, #37136B, #94138B)",
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white font-poppins mb-12">About Us</h2>

        {/* Our Story Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-semibold font-poppins text-white mb-6">Our Story</h3>
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-500 hover:scale-105" style={gradientStyle}>
            <div className="px-6 py-8 sm:p-12">
              <p className="text-lg text-white font-poppins mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac justo porttitor, et consequat quam aliquet. Fusce fermentum ex quis lorem rhoncus, sit amet mattis lacus blandit. Duis sed nunc nec metus volutpat lobortis nec nec sem. Aenean vulputate elit et ante sollicitudin, id malesuada lorem accumsan. Nam eget mi quis purus elementum feugiat eget ac tortor. Vestibulum mollis tellus vel tellus tempor vulputate. Cras vel sollicitudin metus. Aenean vestibulum consequat efficitur. Sed pharetra sollicitudin posuere. 
              </p>
              <p className="text-lg text-white font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac justo porttitor, et consequat quam aliquet. Fusce fermentum ex quis lorem rhoncus, sit amet mattis lacus blandit. Duis sed nunc nec metus volutpat lobortis nec nec sem. Aenean vulputate elit et ante sollicitudin, id malesuada lorem accumsan. Nam eget mi quis purus elementum feugiat eget ac tortor. Vestibulum mollis tellus vel tellus tempor vulputate. Cras vel sollicitudin metus. Aenean vestibulum consequat efficitur. Sed pharetra sollicitudin posuere. 
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-semibold text-white font-poppins mb-6">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Member 1', 'Member 2', 'Member 3'].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300" style={gradientStyle}>
                <div className="p-6">
                  {/* Placeholder image */}
                  <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 sm:mx-auto"></div>
                  <h3 className="text-xl font-semibold text-white font-poppins mb-4">{member}</h3>
                  <p className="text-white font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Vision Section */}
        <section>
          <h3 className="text-3xl font-semibold text-white font-poppins mb-6">Our Vision</h3>
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-500 hover:scale-105" style={gradientStyle}>
            <div className="px-6 py-8 sm:p-12">
              <p className="text-lg text-white font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac justo porttitor, et consequat quam aliquet. Fusce fermentum ex quis lorem rhoncus, sit amet mattis lacus blandit. Duis sed nunc nec metus volutpat lobortis nec nec sem. Aenean vulputate elit et ante sollicitudin, id malesuada lorem accumsan. Nam eget mi quis purus elementum feugiat eget ac tortor. Vestibulum mollis tellus vel tellus tempor vulputate. Cras vel sollicitudin metus. Aenean vestibulum consequat efficitur. Sed pharetra sollicitudin posuere. 
              </p>
              <p className="text-lg text-white font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac justo porttitor, et consequat quam aliquet. Fusce fermentum ex quis lorem rhoncus, sit amet mattis lacus blandit. Duis sed nunc nec metus volutpat lobortis nec nec sem. Aenean vulputate elit et ante sollicitudin, id malesuada lorem accumsan. Nam eget mi quis purus elementum feugiat eget ac tortor. Vestibulum mollis tellus vel tellus tempor vulputate. Cras vel sollicitudin metus. Aenean vestibulum consequat efficitur. Sed pharetra sollicitudin posuere. 
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

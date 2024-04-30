import React from 'react';

const About = () => {
  return (
    <div className="py-16 fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Us</h2>

        {/* Our Story Section */}
        <section className="bg-white rounded-lg overflow-hidden shadow-md mb-12 transition-transform duration-500 hover:scale-105">
          <div className="px-6 py-8 sm:p-12">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h3>
            <p className="text-lg text-gray-600 mb-8">
              {/* Your story content */}
            </p>
            <p className="text-lg text-gray-600">
              {/* More content */}
            </p>
          </div>
        </section>

        {/* Services Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          {['Development', 'Designing', 'Video Editing'].map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

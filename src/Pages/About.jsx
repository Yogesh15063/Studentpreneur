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
                As a young entrepreneur we suffered a lot, be it being new to the market, or choosing the unconventional path of entrepreneurship, we have been through all of it.

                I built a complete decentralized social media and got grants worth 32k$ to pursue my dream of entrepreneurship and making a dream product, 

                while Shahzeb worked with many social media clients to make their social media better..

                We understood the complementary skills of making tech a reality and advertising it through social media,

                So and tanmay ( co-founder of ratofy, the decentralized social media) joined in the mission to build a community for student entrepreneurs
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-semibold text-white font-poppins mb-6">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Shanzil', image: 'shanzilImage.jpeg' },
              { name: 'Shahzeb', image: 'shahzebImage.PNG' },
              { name: 'Tanmay', image: 'tanmayImage.jpeg' }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300" style={gradientStyle}>
                <div className="p-6">
                  {/* Inserting actual image */}
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full bg-gray-200 mb-4 sm:mx-auto" />
                  <h3 className="text-xl font-semibold text-white font-poppins mb-4">{member.name}</h3>
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
                Our vision is to build a vibrant community for student entrepreneurs. We aim to provide a platform where young innovators can connect, collaborate, and grow. By leveraging our expertise in technology and social media, we aspire to create an ecosystem that nurtures entrepreneurial talent, fosters creativity, and empowers the next generation of leaders.

                Join us on this exciting journey to make a lasting impact and help student entrepreneurs turn their dreams into reality. 
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

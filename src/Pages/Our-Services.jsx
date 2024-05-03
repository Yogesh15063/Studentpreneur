import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, imageUrl, description }) => {
  const gradientStyle = {
    background: "linear-gradient(to right, #37136B, #94138B)",
  };

  return (
    <motion.div
      className="rounded-lg shadow-md p-6 m-5"
      style={gradientStyle}
      initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.1,
        rotate: 10,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="flex items-center justify-center mb-4"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={imageUrl} alt={title} className="h-12 w-12" />
      </motion.div>
      <motion.h3
        className="text-xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const OurServices = () => {
  return (
    <div className="container mx-auto py-12">
      <div className='text-center mb-8'>
        <h2 className="text-3xl text-white mt-4 font-bold">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="Web Development"
          imageUrl="code.png"
          description="We offer professional web development services tailored to your needs."
        />
        <ServiceCard
          title="Video Editing"
          imageUrl="video-editing-app.png"
          description="Let us bring your vision to life with our expert video editing services."
        />
        <ServiceCard
          title="Graphic Designing"
          imageUrl="pen-tablet.png"
          description="From logos to branding, our graphic designers can create stunning visuals for your business."
        />
        <ServiceCard
          title="AI/Chatbots"
          imageUrl="artificial-intelligence.png"
          description="Harness the power of artificial intelligence with our custom AI and chatbot solutions."
        />
        <ServiceCard
          title="Digital Marketing"
          imageUrl="digital-marketing.png"
          description="Reach your target audience and grow your business with our comprehensive digital marketing strategies."
        />
        <ServiceCard
          title="UI/UX"
          imageUrl="website.png"
          description="We design intuitive and user-friendly interfaces to enhance your users' experience."
        />
      </div>
    </div>
  );
};

export default OurServices;

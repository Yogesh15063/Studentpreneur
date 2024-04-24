import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-4">
      <div className="flex justify-center">
        <a href="#" className="mr-4">
        <img src="instagram.png" className='w-8 h-8 mx-5' alt="" srcset="" />
        </a>
        <a href="#" className="mr-4">
          <img src="whatsapp.png" className='w-8 h-8 mx-5' alt="" />
        </a>
        <a href="#">
          <img src="discord.png"  className='w-8 h-8 mx-5' alt="" srcset="" />
        </a>
      </div>
      <hr className="my-4 border-gray-600" />
      <p className="text-center">© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

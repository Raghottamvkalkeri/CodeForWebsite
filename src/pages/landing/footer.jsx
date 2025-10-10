import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#332929] text-white px-6 md:px-80 py-12 ">
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Registered Address */}
        <div>
          <h3 className="p-text text-[16px] !font-semibold mb-2">Registered Address</h3>
          <p className='caption-text'>AVETO Consulting Pvt Ltd</p>
          <p className='caption-text'>C 002, Krishna Diamond Apt</p>
          <p className='caption-text'>Sahakar Nagar</p>
          <p className='caption-text'>Bangalore, Karnataka 560092</p>
        </div>

        {/* Bangalore Office */}
        <div>
          <h3 className="p-text text-[16px] !font-semibold mb-2">Bangalore Office</h3>
          <p className='caption-text'>AVETO Consulting Pvt Ltd</p>
          <p className='caption-text'>Vista Pixel</p>
          <p className='caption-text'>8/2B and 8/2C, Jakkuru Layout</p>
          <p className='caption-text'>Jakkuru, Bengaluru, Karnataka 560092</p>
        </div>

        {/* US Subsidiary */}
        <div>
          <h3 className="p-text text-[16px] !font-semibold mb-2">US Subsidiary</h3>
          <p className='caption-text'>AVETO LLC</p>
          <p className='caption-text'>1309 Coffeen Ave. Suite 1200</p>
          <p className='caption-text'>Sheridan WY, 82801</p>
        </div>

        {/* About AVETO */}
        <div>
          <h3 className="p-text text-[16px] !font-semibold mb-2">About AVETO</h3>
          
            <p className='caption-text'>Enterprise Platforms</p>
            <p className='caption-text'>Data</p>
            <p className='caption-text'>Integration</p>
            <p className='caption-text'>AI</p>
         
        </div>
      </div>

      <hr className="my-8 border-white/30" />

      <div className="text-center text-sm">
        © Copyright 2025 - AVETO Consulting Private Limited - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

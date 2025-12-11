import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#332929] text-white py-16 px-6 md:px-20 lg:px-20 xl:px-40 2xl:px-40 ">
      <div className="max-w-8xls container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20">
        
        {/* Registered Address */}
        <div>
          <h3 className="p-text text-[16px] !font-semibold mb-4">Registered Address</h3>
          <p className='caption-text mb-2'>AVETO Consulting Pvt Ltd</p>
          <p className='caption-text mb-2'>C 002, Krishna Diamond Apt</p>
          <p className='caption-text mb-2'>Sahakar Nagar</p>
          <p className='caption-text mb-2'>Bangalore, Karnataka 560092</p>
        </div>

        {/* Bangalore Office */}
        <div>
          <h3 className="p-text text-[16px] !font-semibold mb-4">Bangalore Office</h3>
          <p className='caption-text mb-2'>AVETO Consulting Pvt Ltd</p>
          <p className='caption-text mb-2'>Vista Pixel</p>
          <p className='caption-text mb-2'>8/2B and 8/2C, Jakkuru Layout</p>
          <p className='caption-text mb-2'>Jakkuru, Bengaluru, Karnataka 560092</p>
        </div>

        {/* US Subsidiary */}
        <div>
          <h3 className="p-text text-[16px] !font-semibold mb-4">US Subsidiary</h3>
          <p className='caption-text mb-2'>AVETO LLC</p>
          <p className='caption-text mb-2'>1309 Coffeen Ave. Suite 1200</p>
          <p className='caption-text mb-2'>Sheridan WY, 82801</p>
        </div>

        {/* About AVETO */}
        <div>
          <h3 className="p-text text-[16px] !font-semibold mb-4">About AVETO</h3>
          
            <p className='caption-text mb-2'>Enterprise Platforms</p>
            <p className='caption-text mb-2'>Data</p>
            <p className='caption-text mb-2'>Integration</p>
            <p className='caption-text mb-2'>AI</p>
         
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

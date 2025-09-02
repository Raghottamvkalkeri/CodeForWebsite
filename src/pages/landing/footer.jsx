import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#332929] text-white px-6 md:px-16 py-12 ">
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Registered Address */}
        <div>
          <h3 className="font-bold mb-2">Registered Address</h3>
          <p>AVETO Consulting Pvt Ltd</p>
          <p>C 002, Krishna Diamond Apt</p>
          <p>Sahakar Nagar</p>
          <p>Bangalore, Karnataka 560092</p>
        </div>

        {/* Bangalore Office */}
        <div>
          <h3 className="font-bold mb-2">Bangalore Office</h3>
          <p>AVETO Consulting Pvt Ltd</p>
          <p>Vista Pixel</p>
          <p>8/2B and 8/2C, Jakkuru Layout</p>
          <p>Jakkuru, Bengaluru, Karnataka 560092</p>
        </div>

        {/* US Subsidiary */}
        <div>
          <h3 className="font-bold mb-2">US Subsidiary</h3>
          <p>AVETO LLC</p>
          <p>1309 Coffeen Ave. Suite 1200</p>
          <p>Sheridan WY, 82801</p>
        </div>

        {/* About AVETO */}
        <div>
          <h3 className="font-bold mb-2">About AVETO</h3>
          <ul className="space-y-1">
            <li>Enterprise Platforms</li>
            <li>Data</li>
            <li>Integration</li>
            <li>AI</li>
          </ul>
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

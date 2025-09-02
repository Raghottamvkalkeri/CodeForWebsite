import React from 'react';

const OurVision = () => {
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-white">
      {/* First Vision Section */}
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-10">
        {/* Left Image */}
        <div className="w-full md:w-2/5">
          <img
            src="https://www.thoughtworks.com/content/dam/thoughtworks/images/photography/side-by-side/homepage/hp_side_by_side_design_engineering_ai.jpg"
            alt="Our Vision"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-3/5 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Vision</h2>
          <div className="text-lg text-slate-700 mb-6 leading-relaxed space-y-4">
            <p>
              Our consulting services are designed to help organizations make informed decisions in the areas of Enterprise Platforms, Data management, Integrations, and AI technologies.
            </p>
            <p>
              We work closely with senior leadership to provide strategic guidance that aligns technology initiatives with business goals.
            </p>
            <p>
              By focusing on both short-term challenges and long-term objectives, we ensure that our clients can navigate complex decisions and drive sustainable growth.
            </p>
          </div>
          <div className="self-center md:self-start bg-pink-800 hover:bg-pink-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
            Learn More
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;

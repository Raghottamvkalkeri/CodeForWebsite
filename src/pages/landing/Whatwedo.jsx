"use client";
import React from "react";

const whatwedo = [
  {
    header: (
    //   <>
    //     Built to Solve. We bring clarity to complexity. With expertise in{" "}
    //     <span className="font-semibold">
    //       enterprise platforms, data, integration, AI,
    //     </span>{" "}
    //     and <span className="font-bold">custom solutions,</span> we design
    //     technology that adapts, scales, and creates lasting impact.
    //   </>
    <>
    We are built to solve business challenges!  At AVETO, we solve problems by bringing deep specialization in Enterprise Platforms, Data, Integration, AI, and Custom Solutions.  We help organizations through three key offerings : 
    </>
    ),
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 lg:px-80 xl:px-80 2xl:px-80">
      <div className="container mx-auto px-4">
        <h2 className="page-subheader">What we do</h2>

        {/* Intro Paragraph */}
        <div className="text-left mt-10 mb-10">
          <h3 className="page-paragraph">{whatwedo[0].header}</h3>
        </div>

        {/* Added Section: From Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="page-secondary-header pb-2">Consulting</h3>
            <p className="text-gray-600 page-paragraph">
              We help organizations align technology with business goals through
              strategy, process, and transformation advisory.
            </p>
          </div>

          <div>
            <h3 className="page-secondary-header pb-2">Technology Services</h3>
            <p className="text-gray-600 page-paragraph">
              We design, build, and manage enterprise platforms, integrations,
              and data-driven solutions that deliver measurable impact.
            </p>
          </div>

          <div>
            <h3 className="page-secondary-header pb-2">Workforce Solutions</h3>
            <p className="text-gray-600 page-paragraph">
              We enable agility through on-demand expertise, bridging skill gaps
              and accelerating business transformation.
            </p>
          </div>
        </div>

        {/* Existing Card Grid */}
        <h2 className="page-subheader">Areas of specialization</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="page-secondary-header pb-[8px]">Data</h3>
              <p className="text-gray-600 page-paragraph">
                Turn Insight into Impact. Harness the power of modern data platforms to drive confident decisions.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="page-secondary-header pb-[8px]">
                Custom Solutions
              </h3>
              <p className="text-gray-600 page-paragraph">
                Apps built around you. Modern web, mobile, and cloud solutions tailored to your business needs.
              </p>
            </div>
          </div>

          {/* Center Column */}
          <div className="bg-red-600 text-white shadow-md rounded-xl p-6 flex flex-col justify-center">
            <h3 className="text-lg page-secondary-header font-semibold mb-3">
              Enterprise Platform <span className="font-light">at the Core.</span>
            </h3>
            <p className="page-paragraph">
              {/* SAP, Oracle, NetSuite, Infor—implement, optimize, and evolve with
              confidence. */}
              Implement, optimize, and evolve with confidence.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="page-secondary-header pb-[8px]">Integration</h3>
              <p className="text-gray-600 page-paragraph">
                Connected by design. Seamless, secure connections across platforms, partners, and devices.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="page-secondary-header pb-[8px]">
                Artificial Intelligence
              </h3>
              <p className="text-gray-600 page-paragraph">
                Smarter, faster, predictive. From automation to intelligence—make workflows intelligent and outcomes better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
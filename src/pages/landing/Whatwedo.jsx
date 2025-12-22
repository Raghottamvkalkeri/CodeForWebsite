"use client";

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
    We work with organizations on enterprise platforms, data, integration, AI, and custom solutions. Our work is delivered through three offerings: 
    </>
    ),
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 lg:px-20 xl:px-40 2xl:px-40">
      <div className="container mx-auto px-4">
        <h2 className="page-subheader">What we do</h2>

        {/* Intro Paragraph */}
        <div className="text-left mt-10 mb-10">
          <h3 className="page-paragraph">{whatwedo[0].header}</h3>
        </div>

        {/* Added Section: From Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="page-secondary-header pb-2 !text-[24px]">Consulting</h3>
            <p className="text-gray-600 page-paragraph">
              We support organizations in aligning technology with business goals through strategy, process, and architectural guidance.
            </p>
          </div>

          <div>
            <h3 className="page-secondary-header pb-2 !text-[24px]">Technology Services</h3>
            <p className="text-gray-600 page-paragraph">
             We design, build, integrate, and manage enterprise platforms and data systems.
            </p>
          </div>

          <div>
            <h3 className="page-secondary-header pb-2 !text-[24px]">Workforce Solutions</h3>
            <p className="text-gray-600 page-paragraph">
              We provide on-demand technology talent to meet project and capability needs.
            </p>
          </div>
        </div>

        {/* Existing Card Grid */}
        <h2 className="page-subheader pt-[64px]">Areas of specialization</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch " >
          {/* Left Column */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="bg-white roundedhover p-6 h-full">
              <h3 className="page-secondary-header pb-[8px] !text-[24px]">Data</h3>
              <p className="text-gray-600 page-paragraph">
                Turn Insight into Impact. Harness the power of modern data platforms to drive confident decisions.
              </p>
            </div>

            <div className="bg-white roundedhover p-6 h-full">
              <h3 className="page-secondary-header pb-[8px] !text-[24px]">
                Custom Solutions
              </h3>
              <p className="text-gray-600 page-paragraph">
                Apps built around you. Modern web, mobile, and cloud solutions tailored to your business needs.
              </p>
            </div>
          </div>

          {/* Center Column */}
          <div className="bg-sky-500 text-white roundedhover p-6 flex flex-col justify-center">
            <h3 className="text-lg page-secondary-header font-semibold mb-3 !text-[24px]">
              Enterprise Platform <span className="font-light">at the Core.</span>
            </h3>
            <p className="page-paragraph">
              {/* SAP, Oracle, NetSuite, Infor—implement, optimize, and evolve with
              confidence. */}
              Implement, optimize, and evolve with confidence.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="bg-white roundedhover p-6 h-full">
              <h3 className="page-secondary-header pb-[8px] !text-[24px]">Integration</h3>
              <p className="text-gray-600 page-paragraph">
                Connected by design. Seamless, secure connections across platforms, partners, and devices.
              </p>
            </div>

            <div className="bg-white roundedhover p-6 h-full">
              <h3 className="page-secondary-header pb-[8px] !text-[24px]">
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
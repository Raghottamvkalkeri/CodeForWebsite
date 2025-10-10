"use client";
import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Oracle Commerce Cloud",
    subtitle: "Oracle Commerce Cloud",
    description:
      "Manage Oracle Commerce Cloud for a leading US-based manufacturer in safety, infrastructure, and industrial systems",
    image: "https://blog.avenuecode.com/hubfs/oracle-commerce-cloud.png",
  },
  {
    title: "From concept to launch",
    subtitle: "Retail Consulting",
    description:
      "Optimizing operations and strategy in combination with established tools and proprietary technology.",
    image: "/images/Retailvector.svg",
  },
  {
    title: "Intelligent and responsive",
    subtitle: "Experience Design",
    description:
      "Designing increasingly intelligent customer experiences to accelerate user decisions.",
    image: "/images/ExperienceVector.svg",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => refs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  return (
    <section className="flex flex-col md:flex-row relative min-h-[300vh] px-[4vw] pb-[13vw] pt-[24vw] md:px-[3.7vw] md:pb-[7vw] md:pt-[7vw]">
      {/* Left Sticky Section */}
      <div className="sticky top-0 flex flex-col w-full md:w-1/2 h-[40vh] md:h-[93vh] bg-white z-10 p-[5vw]">
        {/* Static Label */}
        <div className="text-left text-gray-800 font-semibold text-lg mb-6">
          Our Services
        </div>

        {/* Dynamic Title (Fade Transition) */}
        <div className="flex-1 flex items-center">
          <div
            key={active}
            className="transition-opacity duration-700 ease-in-out opacity-100"
          >
            <div className="text-left text-3xl md:text-5xl font-bold max-w-[80%]">
              {services[active].title}
            </div>
          </div>
        </div>
      </div>

      {/* Right Scrollable Section */}
      <div className="w-full md:w-1/2 md:p-[5.7vw] px-[3.8vw] py-[11vw] space-y-[30vh]">
        {services.map((service, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (refs.current[index] = el)}
            className={`flex flex-col justify-center min-h-[80vh] md:min-h-[100vh] transition-all duration-700 ease-in-out ${
              active === index ? "opacity-100" : "opacity-30"
            }`}
          >
            <img
              src={service.image}
              alt={service.subtitle}
              className="w-[24vw] md:w-[6vw] mb-6"
            />
            <div className="text-xl font-bold text-gray-900 capitalize">
              {service.subtitle}
            </div>
            <p className="mt-4 text-gray-600 text-base md:w-[25vw]">
              {service.description}
            </p>
            <button className="mt-6 px-6 py-2 border rounded-full text-sm font-semibold border-gray-300 hover:bg-gray-900 hover:text-white transition-all duration-300">
              Know More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
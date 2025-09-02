import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    message: "We partnered with AVETO to develop our video interview product. Their team's expertise was exceptional.",
    name: "Kumar Pandurangan",
    role: "Chief Digital Officer, CURATAL",
  },
  {
    message: "I would like to thank you and especially the team for their patience and perseverance!You have delivered a top notch program that we can all be proud of. Nothing ever goes as planned and I think we all managed to work together to achieve the needed result. I’m sure there will be bumps in the road over the next few months but I am confident we will work through them successfully.",
    name: "James B",
    role: "Client, Sponsor, GESINC",
  },
  {
    message: "Aveto rebuilt our legacy system and mobile apps. We saw consistent double-digit growth thanks to them.",
    name: "Harsh Patel",
    role: "Digital Strategy Lead, NexTech",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const clear = () => clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(nextSlide, 3000);
    return clear;
  }, [index]);

  const goToSlide = (i) => {
    setIndex(i);
  };

  const getPosition = (i) => {
    const total = testimonials.length;
    if (i === index) return 'center';
    if ((i + 1) % total === index) return 'left';
    if ((i - 1 + total) % total === index) return 'right';
    return 'hidden';
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold text-slate-900 mb-2">Testimonials</h2>
        <p className="text-slate-600 text-lg max-w-xl mx-auto">What our clients say about working with Aveto.</p>
      </div>

      <div className="relative max-w-5xl mx-auto flex items-center justify-center h-[320px]">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          <FaChevronRight />
        </button>

        {/* Cards */}
        <div className="flex items-center justify-center w-full h-full relative">
          {testimonials.map((item, i) => {
            const position = getPosition(i);
            const isSideCard = position === 'left' || position === 'right';
            const isHidden = position === 'hidden';

            return (
              <div
              key={i}
              className={`
                absolute transition-all duration-700 ease-in-out w-[340px] md:w-[460px] h-[300px] p-8 rounded-xl bg-white shadow-lg
                flex flex-col
                ${position === 'center' ? 'scale-100 z-30' : ''}
                ${position === 'left' ? 'translate-x-[-90%] scale-80 opacity-50 z-20' : ''}
                ${position === 'right' ? 'translate-x-[90%] scale-80 opacity-50 z-20' : ''}
                ${isSideCard ? 'hidden lg:flex' : ''}
                ${isHidden ? 'opacity-0 pointer-events-none' : ''}
              `}
            >
              <p className="text-slate-700">“{item.message}”</p>
            
              {/* Bottom name/role always pinned at bottom */}
              <div className="text-right mt-auto pt-4">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
            
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? 'bg-gray-600 scale-110' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

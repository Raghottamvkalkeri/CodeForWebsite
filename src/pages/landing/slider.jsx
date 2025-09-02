import React, { useRef, useEffect, useState } from "react";

const cards = [
  {
    title: "Web Development",
    desc: "We build scalable and robust web applications tailored to your business needs.",
  },
  {
    title: "UI/UX Design",
    desc: "Our design team crafts beautiful and user-friendly interfaces for your products.",
  },
  {
    title: "Cloud Solutions",
    desc: "Leverage the power of the cloud with our secure and efficient solutions.",
  },
];

function clamp(val, min, max) {
  return Math.max(min, Math.min(val, max));
}

export default function SliderSection() {
  const sectionRef = useRef();
  const [progress, setProgress] = useState(0);
  const numCards = cards.length;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = (numCards - 1) * windowHeight;
      if (rect.top <= 0 && Math.abs(rect.top) < rect.height - windowHeight) {
        const rawProgress = Math.min(
          Math.max((Math.abs(rect.top) / totalScrollable), 0),
          1
        );
        setProgress(rawProgress * (numCards - 1));
      } else if (rect.top > 0) {
        setProgress(0);
      } else if (Math.abs(rect.top) >= rect.height - windowHeight) {
        setProgress(numCards - 1);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [numCards]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${numCards * 100}vh` }}
    >
      <div className="flex w-full h-screen top-0 left-0 sticky">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col justify-center items-start px-16 h-full bg-white z-10 border-r border-gray-100">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-md">
            Discover the range of services we offer to help your business grow and succeed in the digital world. From web development to cloud solutions, we have you covered.
          </p>
        </div>
        {/* Right Side */}
        <div className="w-1/2 h-full flex items-center justify-center relative overflow-hidden">
          <div className="w-full h-full relative">
            {cards.map((card, idx) => {
              // Each card's step progress: 0 (not started) to 1 (fully in place)
              const stepProgress = clamp(progress - (idx - 1), 0, 1);
              // Card is at 100% translateY when not started, 0% when fully in place
              const translateY = 100 - stepProgress * 100;
              return (
                <div
                  key={card.title}
                  className={`w-4/5 h-4/5 flex flex-col justify-center items-center absolute left-1/2 -translate-x-1/2 bg-white shadow-lg transition-all duration-500 ease-in-out`}
                  style={{
                    zIndex: idx + 1,
                    transform: `translateY(${translateY}%)`,
                    transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                    boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08), 0 -8px 16px -8px rgba(0,0,0,0.10)", // subtle shadow + top shadow
                  }}
                >
                  <div className="w-full h-2 rounded-t-lg bg-gradient-to-b from-black/10 to-transparent absolute top-0 left-0 pointer-events-none" />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 relative z-10">{card.title}</h3>
                  <p className="text-gray-600 text-center relative z-10">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

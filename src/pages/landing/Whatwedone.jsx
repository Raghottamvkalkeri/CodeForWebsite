"use client";
import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const impacts = [
  {
    main: (
      <>
        Manage <span className="font-semibold">Oracle Commerce Cloud</span> for a
        leading <span className="font-bold">US-based manufacturer</span> in
        safety, infrastructure, and industrial systems.
      </>
    ),
    sub: "Powering digital commerce across sectors including public safety, sewer cleaning, material transport, and warning systems.",
  },
  {
    main: (
      <>
        Deliver <span className="font-semibold">SAP Solutions</span> for a{" "}
        <span className="font-bold">global logistics leader</span> to enhance
        supply chain and operations.
      </>
    ),
    sub: "Optimizing transport, warehouse, and distribution management with digital transformation.",
  },
  {
    main: (
      <>
        Implement <span className="font-semibold">AI-driven analytics</span> for
        a <span className="font-bold">top healthcare provider</span> to improve
        patient care and decision-making.
      </>
    ),
    sub: "Enabling predictive insights and automation in healthcare systems worldwide.",
  },
];

export default function ProofOfImpact() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current.swiper;

    const updateArrows = () => {
      const prevBtn = document.querySelector(".custom-prev");
      if (prevBtn) {
        if (swiper.activeIndex === 0) {
          prevBtn.classList.add("hidden"); // hide on first slide
        } else {
          prevBtn.classList.remove("hidden");
        }
      }
    };

    swiper.on("slideChange", updateArrows);
    updateArrows(); // run once on load
  }, []);

  return (
    <section className="font-sans text-gray-800 py-16 px-6 md:px-20 lg:px-80 xl:px-80 2xl:px-80">
      {/* Header */}
      <div className="max-w-5xls mx-auto">
        <h2 className="page-subheader">
          Proof of Impact <span className="font-normal">Outcomes that speak louder than words</span>
        </h2>
        <p className="page-paragraph">
          {/* Every engagement is measured by one yardstick: did we make it easier,
          faster, or better for you? <br />
          Our clients stay with us because we bring thinking and doing
          together—solving today’s problems while anticipating tomorrow’s. */}
          
        </p>
      </div>

      {/* Swiper */}
      <div className="max-w-4xls mx-auto mt-12 bg-[#4b4262] p-10">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          slidesPerView={1}
          spaceBetween={30}
        >
          {impacts.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-left">
                <h3 className="  font-light leading-relaxed text-white p-text  md:!text-[24px] lg:!text-[30px]">
                  {item.main} , { item.sub}
                </h3>
                {/* <p className="page-paragraph text-white">{item.sub}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom arrows placed BELOW swiper */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="custom-prev px-4 py-2 rounded-full border border-white text-white hover:bg-gray-800 hover:text-white transition hidden">
            ←
          </button>
          <button className="custom-next px-4 py-2 rounded-full border border-white text-white hover:bg-gray-800 hover:text-white transition">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TeamCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    {
      id: 1,
      topLeft: "https://avetoconsulting.com/assets/images/img-569-1800x1013.jpg",
      topRight: "https://avetoconsulting.com/assets/images/img-567-1800x1013.jpg",
      bottom: "https://avetoconsulting.com/assets/images/img-554-1980x1114.jpg",
    },
    {
      id: 2,
      topLeft: "https://avetoconsulting.com/assets/images/Image_20251107_122932_607-img_691488f430ae2.webp",
      topRight: "https://avetoconsulting.com/assets/images/Image_20251107_122932_677-img_69148949c35e8.webp",
      bottom: "https://avetoconsulting.com/assets/images/Image_20251107_122932_677-img_69148949c35e8.webp",
    },
    {id: 3,
      topLeft: "http://avetoconsulting.com/assets/images/SAP%20LABS1-img_691489deda15e.webp",
      topRight: "https://avetoconsulting.com/assets/images/SAP%20LABS2-img_69148a3aab893.webp",
      bottom: "https://avetoconsulting.com/assets/images/Image_20250823_143957_851-img_69148b0ada428.webp",
    }
  ];

  return (
    <div className="relative overflow-hidden mx-auto max-w-7xl shadow-2xl bg-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay ]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
          swiper.navigation.update();
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* === Full Image Collage with Gaps === */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-[600px] md:h-[700px] p-2 bg-white">
              {/* Top Left */}
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img
                  src={slide.topLeft}
                  alt="Top Left"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Top Right */}
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img
                  src={slide.topRight}
                  alt="Top Right"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Bottom (Spanning Both Columns) */}
              <div className="col-span-2 relative w-full h-full overflow-hidden rounded-lg">
                <img
                  src={slide.bottom}
                  alt="Bottom"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute bottom-4 right-4 z-20 flex gap-3">
          <button
            ref={prevRef}
            className="w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 transition text-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            ref={nextRef}
            className="w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 transition text-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default TeamCarousel;
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CaseCard from '../../components/caseCard';
import { useBanner } from '../../context/BannerContext';

const CaseStudyCarouselPage = () => {
  const { data, loading, error } = useBanner();
  const [caseStudies, setCaseStudies] = useState([]);
  const [maxHeight, setMaxHeight] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://avetoconsulting.com/apis/casestudies.php')
      .then((res) => res.json())
      .then((data) => {
        setCaseStudies(data);
      })
      .catch((err) => console.error('Error fetching case studies:', err));
  }, []);

  if (loading) return <p>Loading banner...</p>;
  if (error) return <p>Error loading banner</p>;

  const handleCardClick = (study) => {
    const encodedTitle = encodeURIComponent(study.slug);
    navigate(`/case-studies/${encodedTitle}`);
  };

  // Track tallest card height dynamically
  const updateHeight = (h) => {
    setMaxHeight((prev) => (h > prev ? h : prev));
  };

  return (
    <div className="w-full">
      {/* Banner Section */}
    

      {/* Intro Section */}
      <section className="">
        <p className="text-left page-paragraph mb-6">
          <span className="font-bold">{data.description}</span>
        </p>

        {/* 🔹 Carousel Section */}
        <div className="mt-14 mb-14">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={false}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide key={index}>
                <div style={{ height: maxHeight || 'auto' }}>
                  <CaseCard
                    image={study.thumbnail_image}
                    title={study.title}
                    subtitle={study.subtitle}
                    onClick={() => handleCardClick(study)}
                    setMaxHeight={updateHeight}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyCarouselPage;
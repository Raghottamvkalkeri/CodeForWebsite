import React, { useEffect, useRef, useState } from 'react';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerSection from '../../components/BannerSection';
import CaseCard from '../../components/caseCard';
import { useBanner } from '../../context/BannerContext';


const CaseStudyPage2 = () => {
    const { data, loading, error } = useBanner();

    const [caseStudies, setCaseStudies] = useState([]);
    const [selectedStudy, setSelectedStudy] = useState(null);
    const detailsRef = useRef(null);

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
        setSelectedStudy(study);
        setTimeout(() => {
            detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };




    return (
        <div className="w-full">
            {/* 🔹 Banner Section */}


            {/* 🔹 Banner Section (Side-by-Side Layout) */}
            <BannerSection {...data} />

            {/* 🔹 Intro Content */}
            <section className="bg-white text-slate-800 py-16 px-6 sm:px-10 md:px-80">
                {/* <div className="max-w-6xl mx-auto space-y-6 text-center">
                    <h2 className="text-3xl h2 text-primary">Our Impact Across Industries</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        From manufacturing and healthcare to retail and IT services, our case studies span diverse sectors,
                        showcasing measurable results, scalable architecture, and meaningful business transformation.
                    </p>
                </div> */}

                {/* 🔹 Cards Carousel */}
                <div className="mt-14 mb-14">
                    <Swiper
                        modules={[Navigation, Grid]}
                        navigation
                        spaceBetween={30}
                        slidesPerView={3}
                        grid={{ rows: 2, fill: "row" }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1, // Mobile (small screens)
                                grid: { rows: 1 },
                            },
                            640: {
                                slidesPerView: 2, // Tablets
                                grid: { rows: 1 },
                            },
                            1024: {
                                slidesPerView: 2, // Desktop
                                grid: { rows: 3 },
                            },
                        }}
                    >
                        {caseStudies.map((study, index) => (
                            <SwiperSlide className='mb-14' key={index}>
                                <CaseCard
                                    image={study.image}
                                    title={study.title}
                                    subtitle={study.subtitle}
                                    onClick={() => handleCardClick(study)} // ✅ Set study on click
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


                {selectedStudy && (
  <div ref={detailsRef} className="bg-white">
    
    {/* 🔹 Intro & Image Section (Top Half) */}
    <div className="order-2 lg:order-1">
        <h4 className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">
          Case Study
        </h4>
        <h2 className="page-subheader mb-4">
          {selectedStudy.title}
        </h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
      
      {/* 🩵 Left: Heading & Subtitle */}
      <div className="order-2 lg:order-1 mt-10">
        
        {/* Adjusted the structure to include the main descriptive paragraph here */}
        <p className="text-lg page-paragraph text-slate-700 max-w-4xl mb-8">
          {selectedStudy.subtitle} 
        </p>
      </div>

      {/* 🩶 Right: Image Banner */}
      <div className="order-1 lg:order-2 w-full h-64 md:h-72 lg:h-full overflow-hidden rounded-xl shadow-lg self-stretch">
        <img
          src={selectedStudy.image}
          alt={selectedStudy.title}
          className="w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-md object-cover object-center"
        />
      </div>
    </div>

    {/* --- */}

    {/* 🔹 Main Content Grid (Bottom Half) */}
    {/* Grid setup for Challenge/Results/Tech on the left, Solution/Final Thoughts on the right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-12 items-start">

      {/* 🩵 Left Column: Challenge, Results, Technologies */}
      <div className="space-y-10">
        
        {/* Challenge */}
        <section>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Challenge</h3>
          <ul className="text-slate-600 page-paragraph leading-relaxed">
            {Array.isArray(selectedStudy.details?.challenge)
              ? selectedStudy.details.challenge.map((item, i) => <li key={i}>{item}</li>)
              : <li>{selectedStudy.details?.challenge || "No challenge available"}</li>}
          </ul>
        </section>

        {/* Results */}
        <section>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Results</h3>
          <ul className="text-slate-600 page-paragraph leading-relaxed">
            {Array.isArray(selectedStudy.details?.results)
              ? selectedStudy.details.results.map((item, i) => <li key={i}>{item}</li>)
              : <li>{selectedStudy.details?.results || "No results available"}</li>}
          </ul>
        </section>

        {/* Technologies */}
        {selectedStudy.technologies && (
          <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Technologies used</h3>
            <ul className="text-slate-600 page-paragraph leading-relaxed">
              {selectedStudy.technologies.map((tech, i) => <li key={i}>{tech}</li>)}
            </ul>
          </section>
        )}
      </div>

      {/* 🩶 Right Column: Solution, Final Thoughts */}
      <div className="space-y-10">
        
        {/* The Solution */}
        <section>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">The Solution</h3>
          {/* Note: In the image, 'The Solution' seems to be a list, so I kept the <ul> structure */}
          <ul className="text-slate-600 page-paragraph leading-relaxed">
            {Array.isArray(selectedStudy.details?.solution)
              ? selectedStudy.details.solution.map((item, i) => <li key={i}>{item}</li>)
              : <li>{selectedStudy.details?.solution || "No solution available"}</li>}
          </ul>
        </section>

        {/* Final Thoughts */}
        <section>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Final Thoughts</h3>
          <p className="text-slate-600 leading-relaxed">
            {selectedStudy.details?.final_thoughts || "No final thoughts available"}
          </p>
        </section>
      </div>

    </div>
  </div>
)}
            </section>
        </div>
    );
};

export default CaseStudyPage2;
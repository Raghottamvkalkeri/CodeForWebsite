// import React, { useEffect, useRef, useState } from 'react';
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/navigation";
// import { Grid, Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import BannerSection from '../../components/BannerSection';
// import CaseCard from '../../components/caseCard';
// import { useBanner } from '../../context/BannerContext';


// const CaseStudyPage2 = () => {
//   const { data, loading, error } = useBanner();

//   const [caseStudies, setCaseStudies] = useState([]);
//   const [selectedStudy, setSelectedStudy] = useState(null);
//   const detailsRef = useRef(null);

//   useEffect(() => {
//     fetch('https://avetoconsulting.com/apis/casestudies.php')
//       .then((res) => res.json())
//       .then((data) => {
//         setCaseStudies(data);
//       })
//       .catch((err) => console.error('Error fetching case studies:', err));
//   }, []);

//   if (loading) return <p>Loading banner...</p>;
//   if (error) return <p>Error loading banner</p>;

//   const handleCardClick = (study) => {
//     setSelectedStudy(study);
//     setTimeout(() => {
//       detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }, 100);
//   };




//   return (
//     <div className="w-full">
//       {/* 🔹 Banner Section */}


//       {/* 🔹 Banner Section (Side-by-Side Layout) */}
//       <BannerSection {...data} />

//       {/* 🔹 Intro Content */}
//       <section className="bg-white text-slate-800 py-16 px-6 sm:px-10 md:px-80">
//         {/* <div className="max-w-6xl mx-auto space-y-6 text-center">
//                     <h2 className="text-3xl h2 text-primary">Our Impact Across Industries</h2>
//                     <p className="text-lg text-slate-600 max-w-3xl mx-auto">
//                         From manufacturing and healthcare to retail and IT services, our case studies span diverse sectors,
//                         showcasing measurable results, scalable architecture, and meaningful business transformation.
//                     </p>
//                 </div> */}

//         {/* 🔹 Cards Carousel */}
//         <div className="mt-14 mb-14">
//           <Swiper
//             modules={[Navigation, Grid]}
//             navigation
//             spaceBetween={30}
//             slidesPerView={3}
//             grid={{ rows: 2, fill: "row" }}
//             breakpoints={{
//               320: {
//                 slidesPerView: 1, // Mobile (small screens)
//                 grid: { rows: 1 },
//               },
//               640: {
//                 slidesPerView: 2, // Tablets
//                 grid: { rows: 1 },
//               },
//               1024: {
//                 slidesPerView: 2, // Desktop
//                 grid: { rows: 3 },
//               },
//             }}
//           >
//             {caseStudies.map((study, index) => (
//               <SwiperSlide className='mb-14' key={index}>
//                 <CaseCard
//                   image={study.image}
//                   title={study.title}
//                   subtitle={study.subtitle}
//                   onClick={() => handleCardClick(study)} // ✅ Set study on click
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>


//         {selectedStudy && (
//   <div ref={detailsRef} className="bg-white">

//     {/* 🔹 Intro & Image Section */}
//     <div className="order-2 lg:order-1">
//       <h4 className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">
//         Case Study
//       </h4>
//       <h2 className="page-subheader mb-4">{selectedStudy.title}</h2>
//     </div>

//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
//       {/* 🩵 Left: Heading & Subtitle */}
//       <div className="order-2 lg:order-1 mt-10">
//         <p className="!text-[24px] page-paragraph text-slate-700 max-w-4xl mb-8">
//           {selectedStudy.subtitle}
//         </p>
//       </div>

//       {/* 🩶 Right: Image Banner */}
//       <div className="order-1 lg:order-2 w-full h-64 md:h-72 lg:h-full overflow-hidden rounded-xl shadow-lg self-stretch">
//         <img
//           src={selectedStudy.image}
//           alt={selectedStudy.title}
//           className="w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-md object-cover object-center"
//         />
//       </div>
//     </div>

//     {/* 🔹 Unified List Renderer */}
//     {(() => {
//       const renderListContent = (content, fallback = "No data available") => {
//         if (!content) return `<li>${fallback}</li>`;

//         // Case 1: Array
//         if (Array.isArray(content)) {
//           return content.map(item => `<li>${item}</li>`).join("");
//         }

//         // Case 2: HTML with <li>
//         if (/<li>/i.test(content)) {
//           return content;
//         }

//         // Case 3: Plain text — split into sentences
//         const points = content
//           .split(/\. |\n|, (?=[A-Z])/)
//           .map(p => p.trim())
//           .filter(Boolean);

//         return points.length
//           ? points.map(p => `<li>${p}</li>`).join("")
//           : `<li>${fallback}</li>`;
//       };

//       return (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-12 items-start">

//           {/* 🩵 Left Column */}
//           <div className="space-y-10">

//             {/* Challenge */}
//             <section>
//               <h3 className="text-xl font-semibold text-slate-800 mb-4">Challenge</h3>
//               <ul
//                 className="text-slate-600 page-paragraph leading-relaxed ml-5"
//                 dangerouslySetInnerHTML={{
//                   __html: renderListContent(
//                     selectedStudy.details?.challenge,
//                     "No challenge available"
//                   ),
//                 }}
//               />
//             </section>

//             {/* Solution */}
//             <section>
//               <h3 className="text-xl font-semibold text-slate-800 mb-4">The Solution</h3>
//               <ul
//                 className="text-slate-600 page-paragraph leading-relaxed ml-5"
//                 dangerouslySetInnerHTML={{
//                   __html: renderListContent(
//                     selectedStudy.details?.solution,
//                     "No solution available"
//                   ),
//                 }}
//               />
//             </section>

//             {/* Technologies */}
//             {selectedStudy.technologies && (
//               <section>
//                 <h3 className="text-xl font-semibold text-slate-800 mb-4">Technologies Used</h3>
//                 <ul
//                   className="text-slate-600 page-paragraph leading-relaxed ml-5"
//                   dangerouslySetInnerHTML={{
//                     __html: renderListContent(
//                       selectedStudy.technologies,
//                       "No technologies listed"
//                     ),
//                   }}
//                 />
//               </section>
//             )}
//           </div>

//           {/* 🩶 Right Column */}
//           <div className="space-y-10">
//             {/* Results */}
//             <section>
//               <h3 className="text-xl font-semibold text-slate-800 mb-4">Results</h3>
//               <ul
//                 className="text-slate-600 page-paragraph leading-relaxed ml-5"
//                 dangerouslySetInnerHTML={{
//                   __html: renderListContent(
//                     selectedStudy.details?.results,
//                     "No results available"
//                   ),
//                 }}
//               />
//             </section>
//           </div>

//         </div>
//       );
//     })()}
//   </div>
// )}

//       </section>
//     </div>
//   );
// };

// export default CaseStudyPage2;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import BannerSection from '../../components/BannerSection';
import CaseCard from '../../components/caseCard';
import { useBanner } from '../../context/BannerContext';

const CaseStudyPage2 = () => {
  const { data, loading, error } = useBanner();
  const [caseStudies, setCaseStudies] = useState([]);
  const [filteredStudies, setFilteredStudies] = useState([]);

  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [categories, setCategories] = useState([{ id: 0, name: "All", slug: "all" }]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [categoryCounts, setCategoryCounts] = useState({});

  // Fetch case studies
  const fetchCaseStudies = async (pageNum = 1, categoryId = 0) => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
  
    try {
      const res = await fetch(
        `https://avetoconsulting.com/apis/casestudiespagination.php?page=${pageNum}&per_page=6&category=${categoryId}`
      );
      const data = await res.json();
  
      // Set categories only once — on first ALL fetch
      if (categoryId === 0 && pageNum === 1) {
        const counts = {};
  
        data.data.forEach(item => {
          counts[item.category_id] = (counts[item.category_id] || 0) + 1;
        });
  
        setCategoryCounts(counts);
  
        const validCategories = data.categories.filter(cat => counts[cat.id] > 0);
  
        setCategories([
          { id: 0, name: "All", slug: "all" },
          ...validCategories
        ]);
      }
  
      // When switching category, don't append. Replace.
      if (pageNum === 1) {
        setCaseStudies(data.data || []);
      } else {
        // For load more
        if (data.data && data.data.length > 0) {
          setCaseStudies(prev => {
            const newData = data.data.filter(
              item => !prev.some(p => p.id === item.id)
            );
            return [...prev, ...newData];
          });
        }
      }
  
      setHasMore(data.total_pages && pageNum < data.total_pages);
  
    } catch (err) {
      console.error("Error fetching case studies:", err);
    } finally {
      setLoadingMore(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchCaseStudies(1);
  }, []);

  // Filter when tab changes
  useEffect(() => {
    setFilteredStudies(caseStudies);
  }, [caseStudies]);

  // Infinite scroll using window.scroll
  // useEffect(() => {
  //   let fetching = false;
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
  //       !fetching &&
  //       hasMore
  //     ) {
  //       fetching = true;
  //       setPage(prev => prev + 1);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [hasMore]);


  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        !loadingMore && // rely on state instead of local variable
        hasMore
      ) {
        setPage(prev => prev + 1);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadingMore, hasMore]);

  // Fetch next page when `page` changes
  useEffect(() => {
    if (page > 1) fetchCaseStudies(page);
  }, [page]);

  const handleCardClick = (study) => {
      console.log("Clicked slug:", study.slug, "ID:", study.id);
    const encodedTitle = encodeURIComponent(study.slug);
    location.href = `/case-studies/${encodedTitle}`;
  };

  // Tab click handler
  const handleTabClick = (catId) => {
    setActiveCategory(catId); // highlight the tab

    // Reset state for new tab
    setCaseStudies([]);       // clear previous data
    setFilteredStudies([]);   // clear filtered
    setPage(1);               // start from first page
    setHasMore(true);         // allow loading more
  };

  // Fetch next page when `page` changes (same as before)
  useEffect(() => {
    fetchCaseStudies(page, activeCategory); // pass activeCategory if needed for API
  }, [page, activeCategory]);

  if (loading) return <p>Loading banner...</p>;
  if (error) return <p>Error loading banner</p>;

  return (
    <div className="w-full">
      <BannerSection title={data.title} subtitle={data.subtitle} image={data.image} />

      <section className="bg-white text-slate-800 py-16 px-6 md:px-20 lg:px-20 xl:px-40 2xl:px-40">
        <p className="text-left page-paragraph mb-4">
          <span className="font-bolds">{data.description}</span>
        </p>

        {/* Tabs */}
        <div className="flex gap-6 mb-10 overflow-x-auto no-scrollbar py-2 whitespace-nowrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleTabClick(cat.id)}
              className={`
                relative px-2 py-1 font-medium text-[#10375C] page-paragraph
                ${activeCategory === cat.id ? "after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#10375C]" : ""}
                hover:bg-[#10375C] hover:text-white transition-colors rounded-md
              `}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Case Study Grid */}
        <div className="relative mt-8 mb-8 sm:mt-12 sm:mb-14 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {filteredStudies.map((study, index) => (
              <div key={study.id || index} className="w-full">
                <CaseCard
                  image={study.thumbnail_image}
                  title={study.title}
                  index={index}
                  subtitle={study.subtitle}
                  onClick={() => handleCardClick(study)}
                />
              </div>
            ))}

            {loadingMore && (
              <div className="flex justify-center mt-8 sm:mt-10 col-span-full">
                <p className="text-gray-500 text-sm sm:text-base">Loading more...</p>
              </div>
            )}

            {/* {!hasMore && !loadingMore && filteredStudies.length > 0 && (
              <div className="flex justify-center mt-8 sm:mt-10 col-span-full">
                <p className="text-gray-400 text-sm sm:text-base">All case studies loaded</p>
              </div>
            )} */}

            {!loadingMore && filteredStudies.length === 0 && (
              <div className="flex justify-center mt-8 sm:mt-10 col-span-full">
                <p className="text-gray-400 text-sm sm:text-base">No case studies found</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage2;
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CaseCard from "../../components/caseCard";

const CaseStudyCarouselPage = ({ categoryId = 0, skipId, onDataAvailable }) => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const swiperRef = useRef(null);

    const fetchCaseStudies = async (pageNum = 1) => {
        if (loadingMore || !hasMore) return;
        setLoadingMore(true);

        const perPage = skipId ? 7 : 6;

        try {
            const res = await fetch(
                `https://avetoconsulting.com/apis/casestudiespagination.php?page=${pageNum}&per_page=${perPage}&category=${categoryId}`
            );
            const data = await res.json();

            if (data.data && data.data.length > 0) {
                setCaseStudies((prev) => {
                    const newData = data.data.filter(
                        (item) => !prev.some((p) => p.id === item.id)
                    );

                    const merged = [...prev, ...newData];

                    // ✅ AFTER skipId filtering
                    const visibleItems = merged.filter(
                        (item) => Number(item.id) !== Number(skipId)
                    );

                    // ✅ notify parent ONCE
                    onDataAvailable?.(visibleItems.length > 0);

                    return merged;
                });

                setHasMore(pageNum < data.total_pages);
            } else {
                setHasMore(false);
                onDataAvailable?.(false);
            }
        } catch (err) {
            console.error("Error fetching case studies:", err);
        } finally {
            setLoadingMore(false);
        }
    };

  useEffect(() => {
    setCaseStudies([]);
    setPage(1);
    setHasMore(true);
    fetchCaseStudies(1);
  }, [categoryId]);

  // Track tallest card height
  const updateHeight = (h) => setMaxHeight((prev) => (h > prev ? h : prev));

  // Handle card click
  const handleCardClick = (study) => {
    const encodedTitle = encodeURIComponent(study.slug);
    location.href = `/case-studies/${encodedTitle}?category=${categoryId}`;
  };

  // Detect when user reaches the last slide and fetch next page
  const handleSlideChange = (swiper) => {
    if (swiper.activeIndex >= caseStudies.length - 1 && hasMore && !loadingMore) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (page > 1) fetchCaseStudies(page);
  }, [page]);

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={2.5}
        onSlideChange={handleSlideChange}
        loop={false} // loop=false so that last slide triggers fetch
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.5 },
        }}
      >
        {caseStudies.filter((study) => Number(study.id) !== Number(skipId)).map((study, index) => ( 
          <SwiperSlide key={study.id}>
            <div
              style={{
                height: maxHeight ? `${parseInt(maxHeight) * 0.95}px` : "auto",
                transform: "scale(0.95)",
                transformOrigin: "top left",
              }}
            >
              <CaseCard
                image={study.thumbnail_image}
                index={index}
                title={study.title}
                subtitle={study.subtitle}
                onClick={() => handleCardClick(study)}
                setMaxHeight={updateHeight}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {loadingMore && <p className="text-center mt-4">Loading more...</p>}
    </div>
  );
};

export default CaseStudyCarouselPage;
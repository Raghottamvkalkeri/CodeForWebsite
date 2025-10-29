import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BannerSection from "../../components/BannerSection";
import { useBanner } from "../../context/BannerContext";
import CaseStudyCarouselPage from "./CaseStudyCarouselPage";

const CaseStudyDetail = () => {
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);
    const [caseStudy, setCaseStudy] = useState(null);
    const { data, loading, error } = useBanner();

    useEffect(() => {
        fetch(`https://avetoconsulting.com/apis/casestudies.php`)
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item) => item.slug === decodedTitle);
                setCaseStudy(found);
            })
            .catch((err) => console.error("Error fetching case study:", err));
    }, [decodedTitle]);

    if (!caseStudy) return <p className="p-10 text-center">Loading case study...</p>;
    if (loading) return <p>Loading banner...</p>;
    if (error) return <p>Error loading banner</p>;

    const renderListContent = (content, fallback = "No data available") => {
        if (!content) return `<li>${fallback}</li>`;
        if (Array.isArray(content)) return content.map((i) => `<li>${i}</li>`).join("");
        if (/<li>/i.test(content)) return content;
        const points = content
            .split(/\. |\n|, (?=[A-Z])/)
            .map((p) => p.trim())
            .filter(Boolean);
        return points.length
            ? points.map((p) => `<li>${p}</li>`).join("")
            : `<li>${fallback}</li>`;
    };

    return (
        <div className="w-full">
            {/* 🔹 Banner Section */}
            <BannerSection title={caseStudy.title} subtitle={''} image={caseStudy.thumbnail_image} />

            <section className="bg-white text-slate-800 py-16 px-6 sm:px-10 md:px-80">
                <div className="order-2 lg:order-1">
                    <h4 className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">
                        Case Study
                    </h4>
                    <h2 className="page-subheader mb-4">{caseStudy.title}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
                    <div className="order-2 lg:order-1 mt-10">
                        <p className="!text-[24px] page-paragraph text-slate-700 max-w-4xl mb-8">
                            {caseStudy.subtitle}
                        </p>
                    </div>
                    <div className="order-1 lg:order-2 w-full h-64 md:h-72 lg:h-full overflow-hidden rounded-xl shadow-lg self-stretch">
                        <img
                            src={caseStudy.image}
                            alt={caseStudy.title}
                            className="w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-md object-cover object-center"
                        />
                    </div>
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-12 items-start">
                    <div className="space-y-10">
                        <section>
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Challenge</h3>
                            <ul
                                className="text-slate-600 page-paragraph leading-relaxed ml-5"
                                dangerouslySetInnerHTML={{
                                    __html: renderListContent(caseStudy.details?.challenge),
                                }}
                            />
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">The Solution</h3>
                            <ul
                                className="text-slate-600 page-paragraph leading-relaxed ml-5"
                                dangerouslySetInnerHTML={{
                                    __html: renderListContent(caseStudy.details?.solution),
                                }}
                            />
                        </section>

                        {caseStudy.technologies && (
                            <section>
                                <h3 className="text-xl font-semibold text-slate-800 mb-4">Technologies Used</h3>
                                <ul
                                    className="text-slate-600 page-paragraph leading-relaxed ml-5"
                                    dangerouslySetInnerHTML={{
                                        __html: renderListContent(caseStudy.technologies),
                                    }}
                                />
                            </section>
                        )}
                    </div>

                    <div className="space-y-10">
                        <section>
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Results</h3>
                            <ul
                                className="text-slate-600 page-paragraph leading-relaxed ml-5"
                                dangerouslySetInnerHTML={{
                                    __html: renderListContent(caseStudy.details?.results),
                                }}
                            />
                        </section>
                    </div>
                </div>
            </section>
            <section className="bg-white text-slate-800 py-16 px-6 sm:px-10 md:px-80">
            <h4 className="page-subheader mb-4">
                       Read Case Study
                    </h4>
                <CaseStudyCarouselPage />
            </section>
        </div>
    );
};

export default CaseStudyDetail;
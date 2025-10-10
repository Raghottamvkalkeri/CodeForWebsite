import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BannerSection from "../../components/BannerSection";
import Servicedetails from "./servicedetails";

const ServicesPage = () => {
    const { service } = useParams(); // e.g. /services/sap
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log("Service param:", service);
    useEffect(() => {
        setLoading(true);
        fetch(`https://avetoconsulting.com/apis/services.php?service=${service}`)
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                console.error("API fetch error:", err);
                setLoading(false);
            });
    }, [service]);

    if (loading) {
        return <div className="text-center py-20">Loading...</div>;
    }

    if (!data || data.error) {
        return (
            <div className="text-center py-20 text-red-500">
                {data?.error || "Service not found"}
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Banner */}
            <BannerSection
                subtitle={data.banner?.subtitle}
                title={data.banner?.title}
                description={data.banner?.description}
                image={data.banner?.image}
            />


            {/* Service Cards */}
            <section className="bg-white py-16 px-6 md:px-80">
                <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
                    {data.cards?.map((card, i) => (
                        <div
                            key={i}
                            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <h3 className="page-subheader">{card.title}</h3>
                            <p className="page-paragraph mt-2">
                                {card.subtitle}
                            </p>
                            <p className="page-paragraph mt-3">{card.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Used only for oracle */}
            {service?.toLowerCase() === "oracle" && (
            <section className="bg-gray-100 py-16 px-6 md:px-80">
                <Servicedetails/>
            </section>
            )}

            {/* Highlights Section */}
            <section className="bg-gray-50 py-16 px-6 md:px-80">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-left page-subheader">
                        {data.highlights_heading && data.highlights_heading.trim() !== ""
                            ? data.highlights_heading
                            : "What sets us apart"}
                    </h2>
                    <p className="text-slate-700 text-left page-paragraph mt-4">
                        {data.highlights_intro ||
                            "We take pride in delivering impactful solutions for businesses of all sizes."}
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4">
                    {data.highlights?.map((point, i) => (
                        <div key={i} className="p-6 bg-white rounded-xl shadow">
                            <p className="page-paragraph">{point}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
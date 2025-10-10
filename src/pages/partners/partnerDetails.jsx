import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BannerSection from "../../components/BannerSection"; // ✅ same as Case Study

const PartnerDetails = () => {
  const { slug } = useParams();
  const [partner, setPartner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);

    fetch(`https://avetoconsulting.com/apis/partners.php?partner=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setPartner(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching partner:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        Loading partner details...
      </div>
    );
  }

  if (!partner || partner.error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        Partner details not found.
      </div>
    );
  }

  const { name, logo_url, details, short_description } = partner;

  // 🔹 Map Partner API fields to BannerSection props
  const bannerData = {
    subtitle: `Our Partner`,                             // small blue label on top
    title: name || "Partner",                             // main big heading
    description:
      short_description ||
      "Discover how we've empowered global organizations through transformative digital initiatives.",
    image: logo_url || "https://avetoconsulting.com/assets/images/mbr-1256x792.jpg",
  };

  return (
    <div className="font-sans text-gray-800">
      {/* 🔹 TOP Banner — same style as Case Study */}
      <BannerSection {...bannerData} />

      {/* 🔹 Partner Story Section */}
      <section className="bg-white px-6 md:px-20 lg:px-80 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div
            className="page-paragraph"
            dangerouslySetInnerHTML={{ __html: details?.long_description_1 }}
          />

          <div className="text-right">
            <div className="text-red-600 page-paragraph italic font-medium text-right p-text md:!text-[24px] lg:!text-[24px]">
              Precision meets purpose.<br />
              Expertise meets scale.<br />
              <span className="font-semibold">Together, we deliver<br />what's next in SAP ILM.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Blue Image Banner */}
      <section className="px-6 md:px-80 lg:px-80 pb-16">
        <img
          src={details.banner_url}
          alt="Data servers"
          className="w-full h-50 rounded-xl object-contain object-bottom shadow-lgs"
        />
      </section>

      {/* 🔹 Our Story Section */}
      <section className="bg-white px-6 md:px-80 lg:px-80 pb-16">
        <h2 className="page-subheader mb-10">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="page-secondary-header mb-3">About {name}</h3>
            <div
              className="page-paragraph"
              dangerouslySetInnerHTML={{ __html: details?.additional_info_1 }}
            />
            <div
              className="page-paragraph"
              dangerouslySetInnerHTML={{ __html: details?.additional_info_2 }}
            />
            <div
              className="page-paragraph"
              dangerouslySetInnerHTML={{ __html: details?.additional_info_3 }}
            />
          </div>

          <div>
            <h3 className="h3 mb-3 invisible">About AVETO</h3>
            <div
              className="page-paragraph"
              dangerouslySetInnerHTML={{ __html: details?.extra_info }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerDetails;

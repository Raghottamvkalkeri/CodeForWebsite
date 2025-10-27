import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PartnersSection = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://avetoconsulting.com/apis/partners.php?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setPartners(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching partners:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 lg:px-80 xl:px-80 2xl:px-80">
      <div className="max-w-7xl mx-auto grid md:grid-cols-1 gap-10 items-start">
        {/* Left Column - Heading */}
        <div className="md:col-span-1">
          <h2 className="page-subheader">Our Partners</h2>
          {/* <p className="text-2xl font-light text-sky-500 italic mt-2">
            built to solve
          </p> */}
        </div>

        {/* Right Column - Cards */}
        <div className="md:col-span-2 grid sm:grid-cols-3 gap-10">
          {loading ? (
            <p className="text-gray-500">Loading partners...</p>
          ) : (
            partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition"
              >
                {/* Logo */}
                {partner.logo_url && (
                  <img
                    src={partner.logo_url}
                    alt={partner.name}
                    className="h-10 mb-4 object-contain"
                  />
                )}

                {/* Title */}
                {/* <p className="page-secondary-headers lg:!text-[19px]">
                 
                </p> */}

                {/* Description */}
                <p className="page-paragraph text-gray-600 mt-2 lg:!text-[16px] flex-grow">
                {partner.short_title} &nbsp;
                  {/* {partner.short_description} */}
                </p>

                {/* Button */}
                <Link
                  to={`/partners/${partner.slug}`}
                  className="mt-4 inline-block  text-white text-sm px-5 py-2 rounded-md  transition self-start"
                >
                  {/* {partner.button_text || "Know mores"} */}
                  <svg width="45" height="16" viewBox="0 0 45 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.7071 8.70711C45.0976 8.31658 45.0976 7.68342 44.7071 7.29289L38.3431 0.928932C37.9526 0.538408 37.3195 0.538408 36.9289 0.928932C36.5384 1.31946 36.5384 1.95262 36.9289 2.34315L42.5858 8L36.9289 13.6569C36.5384 14.0474 36.5384 14.6805 36.9289 15.0711C37.3195 15.4616 37.9526 15.4616 38.3431 15.0711L44.7071 8.70711ZM0 8V9H44V8V7H0V8Z" fill="#DA0F0F" />
                  </svg>

                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
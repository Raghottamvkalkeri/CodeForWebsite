import React from 'react';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import BannerSection from '../../components/BannerSection';
import { useBanner } from '../../context/BannerContext';
import Whatwestandfor from '../landing/Whatwestandfor';

const AboutUs = () => {
  const { data, loading, error } = useBanner();
  if (loading) return <p>Loading banner...</p>;
  if (error) return <p>Error loading banner</p>;
  if (!data) return null;
  const leaders = [
    {
      name: "Suresh Kori",
      title: "Founder, Managing Director & CEO",
      img: "https://avetoconsulting.com/assets/images/suresh-2-596x574.jpeg",
    },
    {
      name: "Manjunath Shankar",
      title: "Director, Chief Technology Officer",
      img: "https://avetoconsulting.com/assets/images/manju-596x795.jpg",
    },
    {
      name: "Rajat Kumar Rana",
      title: "Director, Chief Delivery Officer",
      img: "https://avetoconsulting.com/assets/images/rajat-3-551x679.jpeg",
    },
    {
      name: "Niranjan Murthy",
      title: "Director, Chief Operating Officer",
      img: "https://avetoconsulting.com/assets/images/niranjan-596x798.png",
    },
    {
      name: "Sudeesh Madathil",
      title: "Associate Vice President - Sales",
      img: "https://avetoconsulting.com/assets/images/sudeesh-3-585x738.png",
    },
    {
      name: "Sreenivas Gadhar",
      title: "Advisor - Data and Digital",
      img: "https://avetoconsulting.com/assets/images/whatsapp-image-2024-12-31-at-12.53.40-596x808.jpg",
    },
    {
      name: "Praveen Kumar Kalasa",
      title: "Senior Consulting Partner - Oracle",
      img: "https://avetoconsulting.com/assets/images/praveen-596x728.png",
    },
  ];

  return (
    <div className="w-full">


      <BannerSection {...data} />

      {/* 🔹 Intro Content */}
      <section className="bg-white text-slate-800  px-6 sm:px-10 md:px-80 lg:px-80 xl:px-80 2xl:px-80">
        {/* Team Aveto */}
        <div className="mt-16">
          {/* <h2 className="h1">Our</h2> */}
          <h3 className="page-subheader">
            Team aveto
          </h3>
        </div>
        <div className="max-w-7xl mx-auto ">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Left Image */}
            <div className="md:col-span-2">
              <img
                src="https://avetoconsulting.com/assets/images/img-569-1800x1013.jpg"
                alt="Team"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Side Two Images */}
            <div className="flex flex-col gap-6">
              <img
                src="https://avetoconsulting.com/assets/images/img-567-1800x1013.jpg"
                alt="Team Top"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <img
                src="https://avetoconsulting.com/assets/images/img-554-1980x1114.jpg"
                alt="Team Bottom"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="relative bg-[#edefeb] !mt-[64px] !mb-[64px] pt-10 pb-10 h-80 bg-left bg-cover bg-no-repeat">
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gray-800/50"></div> */}

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center flex-col h-full text-black">
              <h5 className="page-subheader text-center !m-0 !text-[32px]">
                Join team aveto
              </h5>
              <span className="text-center block text-[24px]">
                Please send resume to{" "}
                <a className="font-bold text-black underline" href="mailto:work@avetoconsulting.com">
                  work@avetoconsulting.com
                </a>
              </span>
            </div>
          </div>

          {/* Leadership Title */}
          <div className="mt-16">
            {/* <h2 className="h1">Our</h2> */}
            <h3 className="page-subheader">
              Leadership
            </h3>
          </div>

          {/* Leadership Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center mb-10">
            {leaders.map((leader, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-60 h-60 object-cover rounded-xl shadow-md"
                />
                <h4 className="mt-4 p-text text-[16px] !font-semibold">
                  {leader.name}
                </h4>
                <p className="caption-text-medium text-[14px] text-gray-600">{leader.title}</p>
              </div>
            ))}
          </div>






        </div>








      </section>

      <Whatwestandfor />
    </div>
  );
};

export default AboutUs;
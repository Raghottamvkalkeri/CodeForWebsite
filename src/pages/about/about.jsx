import { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import BannerSection from '../../components/BannerSection';
import { useBanner } from '../../context/BannerContext';
import Whatwestandfor from '../landing/Whatwestandfor';
import TeamCarousel from './TeamCarousel';

const AboutUs = () => {
  const [leaders , setLeaders] = useState([])
  const { data, loading, error } = useBanner();
  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const res = await fetch("https://avetoconsulting.com/apis/getleaders.php");
        if (!res.ok) throw new Error("Failed to fetch leaders");
        const data = await res.json();
        setLeaders(data);
      } catch (err) {
        console.error(err);

      } finally {
        // You can handle loading state here if needed
      }
    };

    fetchLeaders();
  }, []);

  const loadLinkedIn = (url) => () => {
    window.open(url, '_blank');
  };
  if (loading) return <p>Loading banner...</p>;
  if (error) return <p>Error loading banner</p>;
  if (!data) return null;


  const bannerData = {
    subtitle: data.subtitle,                             // small blue label on top
    title: data.title || "Partner",                             // main big heading
    description: ``,
    image: ``,
  };

  return (
    <div className="w-full">




      <BannerSection {...bannerData} />

      {/* 🔹 Intro Content */}
      <section className="bg-white text-slate-800 max-w-10xl  py-16 px-6 md:px-20 lg:px-20 xl:px-40 2xl:px-40">

        <div className="container mx-auto">
          <p class=" text-left page-paragraph mt-4s mb-4"><p class="font-bold page-subheader"></p>
            <span class="font-bolds">{data.description}</span></p>

          {/* Team Aveto */}
          <div className="mt-16">
            {/* <h2 className="h1">Our</h2> */}
            <h3 className="page-subheader ">
              Team aveto
            </h3>
          </div>
          <div className="max-w-7xls mx-auto mt-10">
          <TeamCarousel />
          </div>


            {/* Leadership Title */}
            <div className="mt-16">
              {/* <h2 className="h1">Our</h2> */}
              <h3 className="page-subheader">
                Leadership
              </h3>
            </div>

            {/* Leadership Grid */}
           <div className=" flex justify-center">
  <div className=" flex justify-center">
 <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center ">
  {leaders.map((leader, index) => {
    // number of columns on lg
    const cols = 5;

    // total items
    const total = leaders.length;

    // items in last row
    const remainder = total % cols;

    // index where last row starts
    const lastRowStart = total - remainder;

    // center offset logic
    let colStart = "";
    if (remainder > 0 && index === lastRowStart) {
      if (remainder === 1) colStart = "lg:col-start-3";
      if (remainder === 2) colStart = "lg:col-start-3";
      if (remainder === 3) colStart = "lg:col-start-2";
      if (remainder === 4) colStart = "lg:col-start-2";
    }

    return (
      <div
        key={index}
        onClick={loadLinkedIn(leader.linkedIn)}
        className={`flex flex-col items-start cursor-pointer ${colStart}`}
      >
        <img
          src={leader.img}
          alt={leader.name}
          className="w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-50 xl:w-100 xl:h-50 object-cover rounded-xl shadow-md"
        />
        <h4 className="mt-4 p-text text-[16px] !font-semibold text-left">
          {leader.name}
        </h4>
        <p className="caption-text-medium text-[14px] text-gray-600 text-left">
          {leader.title}
        </p>
      </div>
    );
  })}
</div>


</div>

</div>      
        </div>








      </section>

      <Whatwestandfor />

      <section className="bg-white py-0 px-6 md:px-20 lg:px-80 xl:px-80 2xl:px-80">
      <div className="container mx-auto">

      </div>
      </section>
<div className="relative bg-[#edefeb] !mt-[64px]s  pt-10 pb-10 h-80 bg-left bg-cover bg-no-repeat">

          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-gray-800/50"></div> */}

          {/* Content */}

          <div className="relative z-10 flex items-center justify-center flex-col h-full text-black">
          {/* <p class=" text-left page-paragraph px-63 mb-2">
              We believe meaningful impact comes from doing the basics exceptionally well — speed, quality, cost, flexibility, and transparency. Excellence is not an ambition on the horizon; it’s the everyday discipline of how we work. We look for people who care about outcomes over optics, who collaborate openly, adapt with intent, and deliver value one solution at a time. Together, we learn, improve, and earn trust through the work itself.
              <span class="font-bolds"></span></p> */}
            <h5 className="page-subheader text-center !m-0 !text-[32px]">
              Join team aveto
            </h5>
            <span className="page-paragraph text-center block !text-[24px]">
              Please send resume to{" "}
              <a className="font-bold text-black underline" href="mailto:work@avetoconsulting.com">
                work@avetoconsulting.com
              </a>
            </span>
          </div>
        </div>

    </div>
  );
};

export default AboutUs;


// import React from 'react';
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import BannerSection from '../../components/BannerSection';
// import { useBanner } from '../../context/BannerContext';
// import Whatwestandfor from '../landing/Whatwestandfor';
// import TeamCarousel from './TeamCarousel';

// const AboutUs = () => {
//   const { data, loading, error } = useBanner();
//   if (loading) return <p>Loading banner...</p>;
//   if (error) return <p>Error loading banner</p>;
//   if (!data) return null;
//   const leaders = [
//     {
//       name: "Suresh Kori",
//       title: "Founder, Managing Director & CEO",
//       img: "https://avetoconsulting.com/assets/images/suresh-2-596x574.jpeg",
//     },
//     {
//       name: "Manjunath Shankar",
//       title: "Director, Chief Technology Officer",
//       img: "https://avetoconsulting.com/assets/images/manju-596x795.jpg",
//     },
//     {
//       name: "Rajat Kumar Rana",
//       title: "Director, Chief Delivery Officer",
//       img: "https://avetoconsulting.com/assets/images/rajat-3-551x679.jpeg",
//     },
//     {
//       name: "Niranjan Murthy",
//       title: "Director, Chief Operating Officer",
//       img: "https://avetoconsulting.com/assets/images/niranjan-596x798.png",
//     },
//     {
//       name: "Sudeesh Madathil",
//       title: "Associate Vice President - Sales",
//       img: "https://avetoconsulting.com/assets/images/sudeesh-3-585x738.png",
//     },
//     {
//       name: "Sreenivas Gadhar",
//       title: "Advisor - Data and Digital",
//       img: "https://avetoconsulting.com/assets/images/whatsapp-image-2024-12-31-at-12.53.40-596x808.jpg",
//     },
//     {
//       name: "Praveen Kumar Kalasa",
//       title: "Senior Consulting Partner - Oracle",
//       img: "https://avetoconsulting.com/assets/images/praveen-596x728.png",
//     },
//     {
//       name: "Bhaskaran G",
//       title: "Principal Consultant – SAP",
//       img: "https://avetoconsulting.com/assets/images/Bhaskaran%20(1)-img_69142cfe155bb.webp"
//     }
//   ];

//   const bannerData = {
//     subtitle: data.subtitle,                             // small blue label on top
//     title: data.title || "Partner",                             // main big heading
//     description: ``,
//     image: ``,
//   };

//   return (
//     <div className="w-full">




//       <BannerSection {...bannerData} />

//       {/* 🔹 Intro Content */}
//       <section className="bg-white text-slate-800  px-6 sm:px-10 md:px-80 lg:px-80 xl:px-80 2xl:px-80">

//         <div className="container mx-auto px-4s">
//           <p class=" text-left page-paragraph mt-4s mb-4"><p class="font-bold page-subheader"></p>
//             <span class="font-bolds">{data.description}</span></p>

//           {/* Team Aveto */}
//           <div className="mt-16">
//             {/* <h2 className="h1">Our</h2> */}
//             <h3 className="page-subheader">
//               Team aveto
//             </h3>
//           </div>
//           <div className="max-w-7xls mx-auto ">

//             <TeamCarousel />

//             {/* Leadership Title */}
//             <div className="mt-16">
//               {/* <h2 className="h1">Our</h2> */}
//               <h3 className="page-subheader">
//                 Leadership
//               </h3>
//             </div>

//             {/* Leadership Grid */}
//             <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center mb-10">
//               {leaders.map((leader, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <img
//                     src={leader.img}
//                     alt={leader.name}
//                     className="w-60 h-60 object-cover rounded-xl shadow-md"
//                   />
//                   <h4 className="mt-4 p-text text-[16px] !font-semibold">
//                     {leader.name}
//                   </h4>
//                   <p className="caption-text-medium text-[14px] text-gray-600">{leader.title}</p>
//                 </div>
//               ))}
//             </div>






//           </div>
//         </div>








//       </section>

//       <Whatwestandfor />



//       <div className="container mx-auto">
//         <div className="relative bg-[#edefeb] !mt-[64px]s !mb-[64px] pt-10 pb-10 h-80 bg-left bg-cover bg-no-repeat">
//           <div className="relative z-10 flex items-center justify-center flex-col h-full text-black py-16 px-6 md:px-20 lg:px-80 xl:px-60 2xl:px-20">
//             <p class=" text-left page-paragraph mb-2">
//               We believe meaningful impact comes from doing the basics exceptionally well — speed, quality, cost, flexibility, and transparency. Excellence is not an ambition on the horizon; it’s the everyday discipline of how we work. We look for people who care about outcomes over optics, who collaborate openly, adapt with intent, and deliver value one solution at a time. Together, we learn, improve, and earn trust through the work itself.
//               <span class="font-bolds"></span></p>
//             <h5 className="page-subheader text-center !m-0 !text-[32px]">
//               Join team aveto
//             </h5>
//             <span className="page-paragraph text-center block !text-[24px]">
//               Please send resume to{" "}
//               <a className="font-bold text-black underline" href="mailto:work@avetoconsulting.com">
//                 work@avetoconsulting.com
//               </a>
//             </span>
//           </div>
//         </div>
//       </div>



//     </div>
//   );
// };

// export default AboutUs;
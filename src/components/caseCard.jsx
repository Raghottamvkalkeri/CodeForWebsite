// // import React from 'react';

// // const CaseCard = ({ image, title, subtitle, onClick }) => {
// //   return (
// //     <div onClick={onClick} className="bg-white h-[450px] rounded-xls shadow-md hover:shadow-lg overflow-hidden transition-shadow duration-300 group  cursor-pointer">
// //       {/* Image with zoom on hover */}
// //       <div className="overflow-hidden h-48">
// //         <img
// //           src={image}
// //           alt={title}
// //           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// //         />
// //       </div>

// //       {/* Content */}
// //       <div className="flex flex-col justify-between h-[calc(100%-rem)] p-5">
// //         <div>
// //           <h3 className="group-hover:text-orange-700 h3 transition-colors duration-300">
// //             {title}
// //           </h3>
// //           <p className="text-sm text-slate-600 mt-1 page-paragraph">{subtitle}</p>
// //         </div>

// //         <div className="mt-4">
// //           <p
// //             href="#"
// //             className="page-paragraph group-hover:text-orange-700 group-hover:underline  transition-colors duration-300"
// //           >
// //             READ MORE →
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CaseCard;


// import React, { useEffect, useRef } from "react";

// const CaseCard = ({ image, title, subtitle, onClick, setMaxHeight }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (ref.current) {
//       const h = ref.current.offsetHeight;
//       setMaxHeight?.(h);
//     }
//   }, [title, subtitle]);

//   return (
//     <div
//       ref={ref}
//       onClick={onClick}
//       className="group relative flex flex-col justify-start bg-white hover:bg-[#0f172a] hover:text-white p-10 transition-all duration-500 cursor-pointer overflow-hidden h-full border border-[#c9d2e0]"
//     >
//       {/* Small red title */}
//       <p className="text-sm font-light text-blue-500 group-hover:text-slate-300 mb-3">
//         {title}
//       </p>

//       {/* Main text */}
//       {subtitle && (
//          <p className="text-black font-semibold text-[24px] group-hover:text-sky-400 mb-6">
//          {subtitle}
//        </p>
//       )}

//       <div className="min-h-25 mb-10">
//         {/* Details link */}
//       <div className="absolute left-10 bottom-10 flex items-center gap-2 text-slate-800 group-hover:text-white font-light transition-all">
//         <p className="text-[16px]">Details</p>
//         <span className="text-black group-hover:text-sky-400 transform group-hover:translate-x-2 transition-transform duration-300">
//           →
//         </span>
//       </div>

//       {/* Image - bottom-right but never overlapping text */}
//       {image && (
//         <div className="absolute bottom-6 right-6 w-[120px] h-auto flex justify-end">
//           <img
//             src={image}
//             alt={title}
//             className="max-w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
//           />
//         </div>
//       )}
//       </div>
//     </div>
//   );
// };

// export default CaseCard;

import React, { useEffect, useRef } from "react";

const CaseCard = ({ title, subtitle, onClick, setMaxHeight, index }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const h = ref.current.offsetHeight;
      setMaxHeight?.(h);
    }
  }, [title, subtitle]);

  // Alternate shape by index
  const shapeType = index % 2 === 0 ? "circle" : "square";

  // Shape styles with 3D effect
  const shapeStyles =
    shapeType === "circle"
      ? {
          background: "radial-gradient(circle at 30% 30%, #60a5fa, #1e3a8a)",
          borderRadius: "50%",
          width: "80px",
          height: "80px",
          boxShadow:
            "0 6px 10px rgba(0,0,0,0.25), inset -2px -3px 6px rgba(255,255,255,0.2)",
          transformStyle: "preserve-3d",
        }
      : {
          background: "linear-gradient(145deg, #f87171, #b91c1c)",
          borderRadius: "10px",
          width: "80px",
          height: "80px",
          boxShadow:
            "0 8px 15px rgba(0,0,0,0.3), inset 2px 2px 5px rgba(255,255,255,0.15)",
          transformStyle: "preserve-3d",
        };

  return (
    <div
      ref={ref}
      onClick={onClick}
      className="group relative flex flex-col justify-start bg-white hover:bg-[#0f172a] hover:text-white p-10 transition-all duration-500 cursor-pointer overflow-hidden h-full border border-[#c9d2e0]"
    >
      {/* Title */}
      <p className="text-sm font-light text-blue-500 group-hover:text-slate-300 mb-3">
        {title}
      </p>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-black font-semibold text-[24px] group-hover:text-sky-400 mb-6">
          {subtitle}
        </p>
      )}

      <div className="min-h-25 mb-10">
        {/* Details link */}
        <div className="absolute left-10 bottom-10 flex items-center gap-2 text-slate-800 group-hover:text-white font-light transition-all">
          <p className="text-[16px]">Details</p>
          <span className="text-black group-hover:text-sky-400 transform group-hover:translate-x-2 transition-transform duration-300">
            →
          </span>
        </div>

        {/* 3D Shape */}
        <div className="absolute bottom-6 right-6 flex justify-end items-end perspective-1000">
          <div
            style={shapeStyles}
            className="transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-[10deg]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
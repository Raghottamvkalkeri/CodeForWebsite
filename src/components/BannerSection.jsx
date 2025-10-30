// export default function BannerSection({ subtitle, title, description, image }) {
//   return (
//     <section className="bg-gray-50 py-16 px-6 md:px-20 lg:px-80 mt-10 lg:h-[425px] md:h-[425px]">
//       <div
//         className={`max-w-7xls mx-auto grid gap-12 sm:gap-0 h-full ${
//           image ? "md:grid-cols-[60%_40%]" : "md:grid-cols-1"
//         }`}
//       >
//         {/* Left (Text) */}
//         <div className="flex flex-col justify-center">
//           <p className="text-sky-400 p-text mb-3">{subtitle}</p>
//           <h1
//             className="ft-header !italic text-black break-words leading-snug"
//             dangerouslySetInnerHTML={{ __html: title }}
//           />
//           <p
//             className="text-lg p-text text-slate-700 max-w-lg"
//             dangerouslySetInnerHTML={{ __html: description }}
//           />
//         </div>
//
//         {/* Right (Image) */}
//         {image && (
//           <div className="flex justify-end items-center">
//             <img
//               src={image}
//               alt="Services"
//               className="rounded-2xl shadow-lg w-full max-w-md object-cover"
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

export default function BannerSection({ subtitle, title, description, image }) {
    return (
        <section className="bg-gray-50 py-14 px-6 md:px-16 lg:px-60 mt-10 lg:h-[380px] md:h-[380px]">
            <div
                className={`max-w-7xl mx-auto grid gap-8 sm:gap-0 h-full ${
                    image ? "md:grid-cols-[58%_42%]" : "md:grid-cols-1"
                }`}
            >
                {/* Left (Text) */}
                <div className="flex flex-col justify-center">
                    <p className="text-sky-400 text-sm md:text-base mb-2">{subtitle}</p>
                    <h1
                        className="ft-header text-black break-words leading-snug text-2xl md:text-3xl lg:text-4xl"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <p
                        className="text-base md:text-lg text-slate-700 max-w-md md:max-w-lg mt-2"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>

                {/* Right (Image) */}
                {image && (
                    <div className="flex justify-end items-center">
                        <img
                            src={image}
                            alt="Services"
                            className="rounded-2xl shadow-md w-[85%] md:w-[80%] lg:w-[75%] max-w-sm object-cover"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}

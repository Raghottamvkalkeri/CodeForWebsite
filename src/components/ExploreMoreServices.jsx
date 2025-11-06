// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useServices } from "../context/ServiceContext.jsx";
//
// const ExploreMoreServices = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const [showServices, setShowServices] = useState(false);
//     const { services, loading, error } = useServices();
//
//     useEffect(() => {
//         const toggleVisibility = () => {
//             setIsVisible(window.scrollY > 600); // show after user scrolls down enough
//         };
//         window.addEventListener("scroll", toggleVisibility);
//         return () => window.removeEventListener("scroll", toggleVisibility);
//     }, []);
//
//     return (
//         <>
//             {/* Floating Explore Button */}
//             {isVisible && !showServices && (
//                 <button
//                     onClick={() => setShowServices(true)}
//                     className="fixed bottom-50 top-50 right-0 w-auto px-5 py-2 h-15 bg-sky-500 text-white text-sm font-semibold flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
//                 >
//                     🔍 Explore More Services
//                 </button>
//             )}
//
//             {/* More Services Section */}
//             {showServices && (
//                 <div className="fixed bottom-50 top-50 right-0 w-120 bg-white shadow-2xl rounded-t-2xl p-6 transition-all duration-500 ease-in-out z-50">
//                     <div className="flex justify-between items-center mb-4">
//                         <h2 className="text-xl font-semibold text-gray-800">
//                             Service we Provide
//                         </h2>
//                         <button
//                             onClick={() => setShowServices(false)}
//                             className="text-gray-500 hover:text-gray-800 text-lg font-bold"
//                         >
//                             ✕
//                         </button>
//                     </div>
//
//                     <div className="flex flex-col  flex-wrap  md:grid-cols-3 gap-4 overflow-auto h-100">
//                         {services.map((service) => (
//                             <div className="bg-gray-50 p-4 rounded-xl hover:shadow-md transition w-1/2">
//                                 <Link
//                                     key={service.name}
//                                     to={service.path}
//                                     className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                                 >
//                                     {service.name}
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };
//
// export default ExploreMoreServices;

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useServices } from "../context/ServiceContext.jsx";

const ExploreMoreServices = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { services, loading, error } = useServices();
    const navigate = useNavigate();
    const location = useLocation();

    // Show navigation buttons only after some scroll
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Instantly reset scroll to top on route change (no smooth behavior)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % services.length;
        setCurrentIndex(nextIndex);
        navigate(services[nextIndex].path);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + services.length) % services.length;
        setCurrentIndex(prevIndex);
        navigate(services[prevIndex].path);
    };

    if (loading || error) return null;

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed right-6 bottom-[40%] flex flex-col gap-3 z-50"
                    >

                        <div className="fixed right-6 bottom-[40%] flex flex-col gap-3 z-50">
                            {/* Next Button */}
                            <div className="relative group">
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleNext}
                                    className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 border border-gray-200 text-gray-400 shadow-[inset_0_0_8px_rgba(255,255,255,0.3),0_4px_10px_rgba(0,0,0,0.2)] backdrop-blur-md hover:bg-white/40 hover:text-gray-600 hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.4),0_6px_12px_rgba(0,0,0,0.3)] transition-all duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-6 h-6"
                                    >
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </motion.button>

                                {/* Tooltip for Next */}
                                <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap transition">
                                 {`${services[(currentIndex + 1) % services.length]?.name}`}
                                </span>
                            </div>

                            {/* Previous Button */}
                            <div className="relative group">
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handlePrev}
                                    className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 border border-gray-200 text-gray-400 shadow-[inset_0_0_8px_rgba(255,255,255,0.3),0_4px_10px_rgba(0,0,0,0.2)] backdrop-blur-md hover:bg-white/40 hover:text-gray-600 hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.4),0_6px_12px_rgba(0,0,0,0.3)] transition-all duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-6 h-6"
                                    >
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </motion.button>

                                {/* Tooltip for Previous */}
                                <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap transition">
                                 {`${services[(currentIndex - 1 + services.length) % services.length]?.name}`}
                                </span>
                            </div>
                        </div>


                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ExploreMoreServices;
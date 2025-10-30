import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useServices } from "../context/ServiceContext.jsx";

const ExploreMoreServices = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const { services, loading, error } = useServices();

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 600); // show after user scrolls down enough
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {/* Floating Explore Button */}
            {isVisible && !showServices && (
                <button
                    onClick={() => setShowServices(true)}
                    className="fixed bottom-50 top-50 right-0 w-auto px-5 py-2 h-15 bg-sky-500 text-white text-sm font-semibold flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
                >
                    🔍 Explore More Services
                </button>
            )}

            {/* More Services Section */}
            {showServices && (
                <div className="fixed bottom-50 top-50 right-0 w-120 bg-white shadow-2xl rounded-t-2xl p-6 transition-all duration-500 ease-in-out z-50">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Service we Provide
                        </h2>
                        <button
                            onClick={() => setShowServices(false)}
                            className="text-gray-500 hover:text-gray-800 text-lg font-bold"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="flex flex-col  flex-wrap  md:grid-cols-3 gap-4 overflow-auto h-100">
                        {services.map((service) => (
                            <div className="bg-gray-50 p-4 rounded-xl hover:shadow-md transition w-1/2">
                                <Link
                                    key={service.name}
                                    to={service.path}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    {service.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default ExploreMoreServices;
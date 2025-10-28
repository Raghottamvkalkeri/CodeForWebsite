import { useEffect, useState } from "react";

// Reusable scroll function
export const scrollToTop = (isSmooth = true) => {
    window.scrollTo({
        top: 0,
        behavior: isSmooth ? "smooth" : "auto",
    });
};

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={() => scrollToTop(true)} // smooth scroll when clicking the arrow
                    className="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-sky-600 text-white text-xl flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50"
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default BackToTop;

import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button depending on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top when clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <button
  onClick={scrollToTop}
  className="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-sky-600 text-white text-xl flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50"
>
  ↑
</button>
      )}
    </>
  );
};

export default BackToTop;
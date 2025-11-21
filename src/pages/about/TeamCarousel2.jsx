import { ArrowLeft, ArrowRight } from 'lucide-react'; // Using lucide-react for icons
import React, { useCallback, useMemo, useState } from 'react';

// --- SLIDE DATA ---
// Mock data is set up with placeholder URLs that mimic the colors and layout seen in the GIF.
const slides = [
  {
    id: 1,
    color: 'text-orange-500',
    bgColor: 'bg-orange-100',
    subtitle: "SLIDE ONE",
    title: "A Fresh Look at Modern Design.",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    imageGrid: [
      "https://avetoconsulting.com/assets/images/img-569-1800x1013.jpg", // Yellow/Orange
      "https://avetoconsulting.com/assets/images/img-567-1800x1013.jpg", // Pink
      "https://avetoconsulting.com/assets/images/img-554-1980x1114.jpg", // Blue BG
      "https://placehold.co/200x200/F05663/fff?text=Strawberries", // Red/Berries
    ],
  },
  {
    id: 2,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    subtitle: "SLIDE TWO",
    title: "Minimalist Structure, Maximum Impact.",
    body: "The point of using design templates is that they have a more-or-less normal distribution of letters, giving a professional visual appearance.",
    imageGrid: [
      "https://placehold.co/300x300/2ECC71/fff?text=Kiwi+Lime",
      "https://placehold.co/200x200/9B59B6/fff?text=Grapes+Purple",
      "https://placehold.co/600x250/3498DB/fff?text=Sky+Blue+Pattern",
      "https://placehold.co/200x200/E67E22/fff?text=Orange+Peel",
    ],
  },
  {
    id: 3,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    subtitle: "SLIDE THREE",
    title: "Clean Typography and Visual Flow.",
    body: "Many desktop publishing packages and web page editors now use this structure as their default model, achieving a great balance between text and visuals.",
    imageGrid: [
      "https://placehold.co/300x300/34495E/fff?text=Dark+Wood",
      "https://placehold.co/200x200/E74C3C/fff?text=Red+Apple",
      "https://placehold.co/600x250/F1C40F/333?text=Sunny+Yellow+BG",
      "https://placehold.co/200x200/ECF0F1/333?text=White+Texture",
    ],
  },
];

// --- IMAGE PANEL COMPONENT ---
// This component renders the dynamic collage on the right side using a grid layout.
const ImagePanel = React.memo(({ imageGrid }) => {
  // Utility for graceful image loading in case placeholders fail
  const handleImageError = (e, fallbackText) => {
    e.target.onerror = null;
    e.target.src = `https://placehold.co/200x200/ccc/333?text=${fallbackText}`;
  };

  return (
    <div className="h-full grid grid-cols-2 grid-rows-2 gap-0">
      {/* Top Left - Image/Pattern Block 1 (e.g., Citrus Slices) */}
      <div className="col-span-1 row-span-1 bg-yellow-300 overflow-hidden">
        <img
          src={imageGrid[0]}
          alt="Pattern Block 1"
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          onError={(e) => handleImageError(e, 'Block 1')}
        />
      </div>

      {/* Top Right - Image/Pattern Block 2 (e.g., Banana on Pink) */}
      <div className="col-span-1 row-span-1 bg-pink-300 p-8 flex items-center justify-center relative overflow-hidden">
        <img
          src={imageGrid[1]}
          alt="Pattern Block 2"
          className="object-contain w-full h-full shadow-xl transition-transform duration-500 hover:rotate-3"
          onError={(e) => handleImageError(e, 'Block 2')}
        />
      </div>

      {/* Bottom Section - Single Wide Block with layering (e.g., Blue and Strawberries) */}
      <div className="col-span-2 row-span-1 bg-blue-400 relative overflow-hidden p-6 flex justify-end items-end">
        {/* Blue texture background (imageGrid[2]) */}
        <img
          src={imageGrid[2]}
          alt="Background Texture"
          className="absolute inset-0 object-cover w-full h-full opacity-60"
          onError={(e) => handleImageError(e, 'Texture')}
        />
        {/* Layered Foreground Element (imageGrid[3]) */}
        <div className="relative z-10 p-2 bg-white rounded-full shadow-2xl">
          <img
            src={imageGrid[3]}
            alt="Foreground Element"
            className="object-cover w-40 h-40 rounded-full border-4 border-white"
            onError={(e) => handleImageError(e, 'Foreground')}
          />
        </div>
      </div>
    </div>
  );
});

// --- MAIN APP COMPONENT ---
const TeamCarousel2 = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = slides.length;

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Calculate the inline style for the inner wrapper to create the smooth horizontal sliding animation.
  const wrapperStyle = useMemo(() => ({
    transform: `translateX(-${currentSlideIndex * 100}%)`,
    width: `${totalSlides * 100}%`,
  }), [currentSlideIndex, totalSlides]);

  // Get the current slide's data to apply dynamic colors to navigation
  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="font-['Inter'] flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-8">
      {/* Main Carousel Container: Fixed height, overflow hidden to clip the slides */}
      <div className="relative w-full max-w-6xl h-[550px] overflow-hidden rounded-xl shadow-2xl bg-white">

        {/* --- INNER SLIDE WRAPPER (The element that slides horizontally) --- */}
        <div
          style={wrapperStyle}
          className="flex h-full transition-transform duration-700 ease-in-out"
        >
          {slides.map((slide) => (
            // Each slide is a full-width container (Text Panel + Image Panel)
            <div key={slide.id} className="flex w-full flex-shrink-0 h-full">
              
              {/* --- LEFT CONTENT PANEL (Responsive width split) --- */}
              {/* For smaller screens, the image panel will disappear via CSS (see media queries below) */}
              <div className="w-full sm:w-7/12 p-8 sm:p-16 flex flex-col justify-between bg-white">
                <div>
                  <p className={`text-sm font-semibold tracking-widest ${slide.color} mb-3`}>
                    {slide.subtitle}
                  </p>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-gray-600 text-base md:text-lg max-w-lg mb-8">
                    {slide.body}
                  </p>
                  <a href="#" className={`text-base font-medium ${slide.color} hover:opacity-75 transition duration-200 border-b-2 border-dashed ${slide.color}`}>
                    More &rarr;
                  </a>
                </div>

                {/* --- NAVIGATION CONTROLS --- */}
                <div className="flex justify-end space-x-2 mt-8 sm:mt-0">
                  <button
                    onClick={goToPrevSlide}
                    className="p-3 bg-gray-200 hover:bg-gray-300 transition duration-200 rounded-lg text-gray-700 shadow-md border border-gray-300 active:scale-95"
                    aria-label="Previous slide"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goToNextSlide}
                    className={`p-3 ${slide.bgColor} hover:opacity-90 transition duration-200 rounded-lg ${slide.color} shadow-md border border-gray-300 active:scale-95`}
                    aria-label="Next slide"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* --- RIGHT IMAGE PANEL (Hidden on small screens) --- */}
              <div className="hidden sm:block sm:w-5/12">
                <ImagePanel imageGrid={slide.imageGrid} />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

//  old code 
<div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-[600px] md:h-[700px] p-2 bg-white">
              {/* Top Left */}
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img
                  src={slide.topLeft}
                  alt="Top Left"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Top Right */}
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img
                  src={slide.topRight}
                  alt="Top Right"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Bottom (Spanning Both Columns) */}
              <div className="col-span-2 relative w-full h-full overflow-hidden rounded-lg">
                <img
                  src={slide.bottom}
                  alt="Bottom"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

export default TeamCarousel2;
import { useRef } from 'react';

const Card3d = ({ children, className = '' }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetRotation = () => {
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={cardRef}
      // onMouseMove={handleMouseMove}
      // onMouseLeave={resetRotation}
      className={`w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-[20px] shadow-2xl transition-transform ease-in duration-100 transform-style-3d perspective-[1000px] p-6 will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

export default Card3d;

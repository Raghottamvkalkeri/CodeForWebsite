import React from 'react';

const CaseCard = ({ image, title, subtitle, onClick }) => {
  return (
    <div onClick={onClick} className="bg-white h-[400px] rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-shadow duration-300 group  cursor-pointer">
      {/* Image with zoom on hover */}
      <div className="overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between h-[calc(100%-12rem)] p-5">
        <div>
          <h3 className="group-hover:text-orange-700 text-xl font-semibold text-slate-900 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-slate-600 mt-1">{subtitle}</p>
        </div>

        <div className="mt-4">
          <p
            href="#"
            className="text-primary group-hover:text-orange-700 group-hover:underline text-md font-medium transition-colors duration-300"
          >
            READ MORE →
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;

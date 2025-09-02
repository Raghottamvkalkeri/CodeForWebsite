import React from 'react';

const cards = [
  {
    title: 'Strategy',
    description: 'We help define long-term technology vision aligned to your goals.',
  },
  {
    title: 'Data',
    description: 'We build robust pipelines to unlock data insights at scale.',
  },
  {
    title: 'Integration',
    description: 'We ensure your systems communicate seamlessly and securely.',
  },
  {
    title: 'AI Solutions',
    description: 'Our AI services drive automation, prediction, and innovation.',
  },
];

const VerticalHoverCards = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-8xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group relative h-72 w-20 hover:w-64 transition-all duration-500 bg-[#6466E9] text-white rounded-lg shadow-lg overflow-hidden cursor-pointer flex items-center justify-center"
          >
            {/* Rotated Title (initial state) */}
            <div className="absolute inset-0 flex items-center justify-center group-hover:hidden transition-opacity duration-300">
              <h2 className="text-xl transform -rotate-90 whitespace-nowrap">{card.title}</h2>
            </div>

            {/* Expanded Content on Hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 text-left">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-sm text-white/90">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalHoverCards;

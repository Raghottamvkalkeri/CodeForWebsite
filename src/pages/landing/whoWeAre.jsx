import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const stats = [
    {
      number: 10,
      suffix: '+',
      label: 'Years of Experience',
      description: 'Over a decade of crafting impactful digital solutions with precision and passion.',
    },
    {
      number: 200,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Successfully completed 200+ projects for clients across multiple industries.',
    },
    {
      number: 50,
      suffix: '+',
      label: 'Satisfied Clients',
      description: 'Trusted by over 50 clients worldwide for quality, reliability, and results.',
    },
    {
      number: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Consistently high satisfaction rates through transparent and timely delivery.',
    },
  ];
  
const WhoWeAre = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="w-full bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
                {/* Left Section */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-snug">
                        Who We Are
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                        At <span className="font-semibold text-primary-600">Aveto</span>, we’re not just a software provider —
                        we are innovators, collaborators, and strategic partners dedicated to delivering impactful solutions
                        tailored to your business growth.
                    </p>
                    <button className="bg-orange-800 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition">
                        <Link>Know More</Link>
                    </button>
                </div>

                {/* Right Section - Stats */}
                <div ref={ref} className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-10">
                    {stats.map((item, index) => (
                        <div key={index} className="text-left">
                            <div className='flex items-center'>
                                <div className="text-5xl md:text-6xl font-semibold text-primary-700">
                                    {isInView && <CountUp end={item.number} duration={2} />}
                                </div>
                                <p className='text-5xl font-regular pl-2 text-slate-700'>{item.suffix}</p>
                                <p className='text-md'>{item.label}</p>
                            </div>
                            <p className="text-base text-slate-600 mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;

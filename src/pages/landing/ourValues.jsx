import React from 'react';
import { FaHandshake, FaLightbulb, FaRocket, FaShieldAlt } from 'react-icons/fa';
import Card3d from '../../components/card3d';

const OurValues = () => {
    const values = [
        {
            icon: <FaLightbulb size={30} className="text-primary-600" />,
            title: 'Strategic Focus',
            subtitle: 'We align technology initiatives with business objectives to drive measurable outcomes and sustainable growth.',
        },
        {
            icon: <FaHandshake size={30} className="text-primary-600" />,
            title: 'Client Centric',
            subtitle: 'Our approach centers on understanding your unique challenges and delivering tailored solutions that exceed expectations.',
        },
        {
            icon: <FaRocket size={30} className="text-primary-600" />,
            title: 'Innovation First',
            subtitle: 'We leverage cutting-edge technologies and industry best practices to keep you ahead of the competition.',
        },
        {
            icon: <FaShieldAlt size={30} className="text-primary-600" />,
            title: 'Agile Execution',
            subtitle: 'Our agile methodology ensures rapid delivery, continuous improvement, and adaptability to changing needs.',
        },
    ];

    return (
        <section className="w-full px-20 lg:px-80 xl:px-80 2xl:px-80 md:px-80 py-16 bg-gray-100">
            <div className="max-w-7xls mx-auto text-center mb-16">
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-4">Our Values</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    At Aveto, our values shape every solution we craft, every decision we make, and every partnership we build.
                </p>
            </div>

            {/* 3-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-7xls mx-auto">
                {/* Left Column (2 Cards) */}
                <div className="space-y-8">
                    <Card3d>
                        <div className="flex flex-col items-left gap-4">
                            {values[0].icon}
                            <div className='pt-3'>
                                <h3 className="text-xl pb-3 font-semibold">{values[0].title}</h3>
                                <p className="font-roboto text-slate-500 text-md ">{values[0].subtitle}</p>
                            </div>
                        </div>
                    </Card3d>

                    <Card3d>
                        <div className="flex flex-col items-left gap-4">
                            {values[1].icon}
                            <div className='pt-3'>
                                <h3 className="font-bitter text-xl pb-3 font-semibold text-slate-800">{values[1].title}</h3>
                                <p className="font-roboto text-slate-500 text-md">{values[1].subtitle}</p>
                            </div>
                        </div>
                    </Card3d>
                </div>

                {/* Middle Image */}
                <div className="flex justify-center h-full w-full">
                    <img
                        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                        alt="Our Values"
                        className="rounded-xl shadow-xl w-full max-w-sm h-auto object-cover"
                    />
                </div>

                {/* Right Column (2 Cards) */}
                <div className="space-y-8">
                    <Card3d>
                        <div className="flex flex-col items-left gap-4">
                            {values[2].icon}
                            <div className='pt-3'>
                                <h3 className="font-bitter text-xl pb-3 font-semibold text-slate-800">{values[2].title}</h3>
                                <p className="font-roboto text-slate-500 text-md">{values[2].subtitle}</p>
                            </div>
                        </div>
                    </Card3d>

                    <Card3d>
                        <div className="flex flex-col items-left gap-4">
                            {values[3].icon}
                            <div className='pt-3'>
                                <h3 className="font-bitter text-xl pb-3 font-semibold text-slate-800">{values[3].title}</h3>
                                <p className="font-roboto text-slate-500 text-md">{values[3].subtitle}</p>
                            </div>
                        </div>
                    </Card3d>
                </div>
            </div>
        </section>
    );
};

export default OurValues;

import React from 'react';
import CaseCard from '../../components/caseCard';
import './caseStudies.css';
import { useNavigate } from 'react-router-dom';

const caseStudies = [
    {
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
        title: 'SAP Integration with Enovia 3DX',
        subtitle: 'Centralized Material & BOM Management for a Valve Manufacturer',
    },
    {
        image: 'https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg',
        title: 'AI-Driven Predictive Maintenance',
        subtitle: 'Reducing downtime using ML & IoT at scale',
    },
    {
        image: 'https://images.pexels.com/photos/7579836/pexels-photo-7579836.jpeg',
        title: 'Cloud Migration Strategy',
        subtitle: 'Seamless transition from legacy to modern cloud architecture',
    },
    {
        image: 'https://images.pexels.com/photos/4386327/pexels-photo-4386327.jpeg',
        title: 'Smart Factory Enablement',
        subtitle: 'Transforming shop floor operations with IoT and analytics',
    },
    {
        image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg',
        title: 'Data Governance Framework',
        subtitle: 'Creating unified data policies and governance structure',
    },
    {
        image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
        title: 'Omnichannel Retail Integration',
        subtitle: 'Unified customer journey across platforms',
    },
];

const CaseStudyPage2 = () => {

const navigate=useNavigate();

    return (
        <div className="w-full">

            {/* 🔹 Banner Section with zooming image */}
            <section className="relative h-[45vh] md:h-[70vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center scale-110 animate-zoom"
                    style={{
                        // backgroundImage: `url('https://images.pexels.com/photos/31992985/pexels-photo-31992985.jpeg')`,
                        backgroundImage: `url('https://images.pexels.com/photos/5710681/pexels-photo-5710681.jpeg')`,

                    }}
                ></div>
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold leading-snug">
                        Inspiring Case Studies
                    </h1>
                    <p className="text-lg md:text-xl mt-2 max-w-2xl text-slate-100">
                        Discover how we’ve empowered global organizations through transformative digital initiatives.
                    </p>
                </div>
            </section>

            {/* 🔹 Intro Content */}
            <section className="bg-white text-slate-800 py-16 px-6 sm:px-10 md:px-20 ">
                <div className="max-w-6xl mx-auto space-y-6 text-center">
                    <h2 className="text-3xl font-semibold text-primary">Our Impact Across Industries</h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        From manufacturing and healthcare to retail and IT services, our case studies span diverse sectors,
                        showcasing measurable results, scalable architecture, and meaningful business transformation.
                    </p>
                    <p className="text-md text-slate-500">
                        Whether it's optimizing operations with AI, modernizing legacy systems, or streamlining data strategy — we deliver lasting value through tailored solutions.
                    </p>
                </div>

                {/* 🔹 Cards Grid */}
                <div className="mt-14 grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {caseStudies.map((study, index) => (
                        <CaseCard
                            key={index}
                            image={study.image}
                            title={study.title}
                            subtitle={study.subtitle}
                            onClick={() => {
                                // or navigate to a details page:
                                navigate('/sap')
                            }}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CaseStudyPage2;

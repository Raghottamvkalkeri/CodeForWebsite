import React from 'react';
import CaseCard from '../../components/caseCard';

const CaseStudyPage = () => {
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
    // Add more case studies as needed
  ];

  return (
    <div className="w-full">
      {/* 🔹 Banner Section */}
      {/* <section
        className="relative h-[40vh] md:h-[60vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/31992985/pexels-photo-31992985.jpeg')`,
        }}
      >
        <div className="bg-black/50 w-full h-full absolute inset-0" />
        <div className="relative z-10 max-w-8xl px-6 md:px-12 lg:px-20 py-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Charting New Waters:</h1>
          <h1 className="text-4xl md:text-5xl font-bold">Inspiring Case Studies</h1>
        </div>
      </section> */}

      {/* 🔹 Content Section */}
      <section className="bg-white text-slate-800 py-16 px-6 sm:px-10 md:px-16 lg:px-32 xl:px-48 transition-all">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* 🌐 Main Case Study */}
          <h2 className="text-2xl font-semibold text-primary">SAP Integration with Enovia 3DX</h2>

          <div>
            <h2 className="text-xl font-semibold text-primary">Overview</h2>
            <p style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-2 ">
              A leading global valve manufacturer transformed its operations by integrating SAP with Enovia 3DX PLM. This initiative aimed to streamline material and BOM creation, reduce backend dependencies, and enhance agility across business units.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary">The Challenge</h2>
            <p style={{ fontFamily: 'Roboto, sans-serif' }} className="mt-2">
              Previously, the company operated multiple SAP instances managed independently by different business units. This resulted in:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Redundant material records and inconsistent BOMs</li>
              <li>Heavy dependency on SAP backend teams</li>
              <li>Delays in procurement, planning, and new product launches</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary">The Solution</h2>
            <p className="mt-2">
              By integrating SAP’s Material and BOM modules with Enovia 3DX PLM, the company established a centralized hub for master data creation and governance. Notable changes included:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Centralized workflows through Enovia 3DX</li>
              <li>Standardized processes for material and BOM management</li>
              <li>Introduction of Class 200 and 300 configurable materials</li>
              <li>Reduction of backend reliance by empowering business units</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary">Results</h2>
            <p className="mt-2">
              The integration led to measurable improvements across business operations:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>~40% reduction in manual material creation time</li>
              <li>Eliminated data redundancies across SAP instances</li>
              <li>Improved collaboration and data accuracy</li>
              <li>Streamlined procurement and MRP processes</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary">Technologies Used</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>SAP ECC / S4 HANA</li>
              <li>Enovia 3DEXPERIENCE PLM</li>
              <li>Class 200 & 300 Configurable Material Support</li>
              <li>Custom Middleware for Integration</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-primary">Final Thoughts</h2>
            <p className="mt-2">
              By creating a centralized system of truth for materials and BOMs, the company eliminated fragmentation and unlocked new levels of operational efficiency. Teams gained autonomy, collaboration improved, and backend load was significantly reduced.
            </p>
          </div>

          {/* 🌐 Related Case Studies */}
          <div>
            <h2 className="mt-20 text-2xl font-semibold text-primary">Explore more case studies</h2>

            <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2">
              {caseStudies.map((study, index) => (
                <CaseCard
                  key={index}
                  image={study.image}
                  title={study.title}
                  subtitle={study.subtitle}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;

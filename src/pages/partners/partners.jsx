import React from "react";

const Partners = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-80 lg:px-80 mt-10 h-[405px]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-light leading-snug">
            <span className="text-orange-500 font-semibold">AVETO Consulting</span> and{" "}
            <span className="text-gray-700 font-semibold">Onibex</span>{" "}
            join forces to accelerate{" "}
            <span className="text-blue-600 font-bold">SAP Data Modernization</span>
          </h1>
        </div>
      </section>

      {/* Strategic Partnership */}
      <section className="px-6 md:px-20 lg:px-80 xl:px-80 2xl:px-80 py-16">
        <h2 className="page-subheader">Strategic Partnership</h2>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-5 page-paragraph text-gray-700 leading-relaxed">
            <p className="page-paragraph">
              We are pleased to announce that AVETO has entered into a strategic
              partnership with Onibex, the company behind the powerful One
              Connect platform that simplifies and accelerates SAP data integration.
            </p>
            <p className="page-paragraph">
              This collaboration brings together AVETO's deep SAP consulting and
              implementation expertise, their Data practice with Onibexs innovative
              low-code technology that enables seamless integration of SAP ECC and
              S/4HANA data with leading cloud platforms such as Snowflake,
              Databricks, and Confluent Cloud — for both historical and real-time
              data.
            </p>
            <p className="page-paragraph">
              Through this partnership, we aim to deliver an integrated solution that
              simplifies SAP data access, accelerates modernization initiatives, and
              enables enterprises to make faster, more informed business decisions.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 page-paragraph text-gray-700 leading-relaxed">
            <p className="page-paragraph">
              “Partnering with AVETO strengthens our ability to deliver impactful
              outcomes to SAP customers,” said{" "}
              <span className="font-semibold">Gustavo Irastorza, CEO of Onibex.</span>
            </p>
            <p className="page-paragraph">
              “Their proven track record in SAP consulting and implementation
              perfectly complements our technology. Together, we aim to help
              organizations modernize their data infrastructure and democratize
              access to SAP insights.”
            </p>
            <p className="page-paragraph">
              “We are excited to join forces with Onibex to help enterprises unlock
              the true potential of their SAP data. It closely aligns with our focus
              and long-term vision,” said{" "}
              <span className="font-semibold">Suresh Kori, CEO of AVETO.</span>
            </p>
            <p className="page-paragraph">
              “At AVETO, our mission has always been to simplify and accelerate SAP
              transformations. With One Connect, we now have a game-changing solution
              that allows our clients to integrate SAP data faster, more securely,
              and with less complexity.”
            </p>
          </div>
        </div>

        {/* Diagram Centered */}
        <div className="flex justify-center mt-12">
          <div className="w-80 h-56  rounded-lg shadow-sm flex items-center justify-center text-gray-500">
            <img src="https://avetoconsulting.com/assets/images/screenshot-2025-05-02-at-11.53.27-am-663x375.png" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 md:px- lg:px-80 xl:px-80 2xl:px-80 py-16 bg-gray-50">
        <h2 className="page-subheader">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="page-secondary-header mb-3">About AVETO</h3>
            <p className="text-gray-700 page-paragraph leading-relaxed">
              AVETO is a technology consulting firm with a core focus on Enterprise
              Platforms, Data, Integration, and AI. SAP is a key part of its broader
              ERP services portfolio. AVETO serve clients primarily in the
              Manufacturing and BFSI (Banking, Financial Services, and Insurance)
              sectors, helping them drive operational excellence, innovation, and
              digital transformation. With a strong foundation in enterprise systems
              and a forward-looking approach, AVETO delivers scalable, secure, and
              value-driven solutions.
            </p>
            <a
              href="https://www.avetoconsulting.com"
              className="text-blue-600 hover:underline mt-3 inline-block"
            >
              www.avetoconsulting.com
            </a>
          </div>
          <div>
            <h3 className="page-secondary-header mb-3">About Onibex</h3>
            <p className="text-gray-700 page-paragraph leading-relaxed">
              Onibex is the creator of One Connect, a low-code platform that enables
              seamless and secure integration of SAP ECC and S/4HANA data with modern
              cloud data platforms such as Snowflake, Databricks, and Confluent.
              Designed to simplify and accelerate access to SAP data, One Connect
              empowers organizations to enable real-time analytics, democratize
              enterprise data, and fast-track their digital transformation journey.
            </p>
            <a
              href="https://www.onibex.com"
              className="text-blue-600 hover:underline mt-3 inline-block"
            >
              www.onibex.com
            </a>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Partners;
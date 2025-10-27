import React from "react";

const OracleCloudApplicationLayout = ({ applications }) => {
  // Default data structure if no props are passed
  const defaultApplications = [
    {
      title: "Enterprise Resource Planning.",
      description:
        "Financial Management, Procurement, Project Management, Risk Management and Compliance, Enterprise Performance Management",
    },
    {
      title: "Supply Chain Management.",
      description:
        "Supply Chain Planning, Inventory Management, Manufacturing, Maintenance, Product Lifecycle Management",
    },
    {
      title: "Human Capital Management.",
      description:
        "Human Resources, Talent Management, Workforce Management, Payroll",
    },
    {
      title: "Customer Experience.",
      description: "Marketing, Sales, Service.",
    },
  ];

  const data = applications || defaultApplications;

  return (
    <div className=" bg-gray-100 flex flex-col justify-start py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xls mx-auto w-full flex flex-col md:flex-row items-start">
        {/* Left Section: Heading */}
        <div className="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0">
          <h2 className="page-subheader">
            Oracle Cloud Application
          </h2>
        </div>

        {/* Right Section: Content Box */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl">
            <ul className="space-y-6">
              {data.map((item, index) => (
                <li key={index} className="flex items-start">
                  {/* Custom green bullet point */}
                  <div className="w-3 h-3 min-w-[0.75rem] rounded-full bg-sky-500 mt-2 mr-3"></div>
                  <p className="page-paragraph">
                    <strong className="font-bold">{item.title}</strong>{" "}
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OracleCloudApplicationLayout;
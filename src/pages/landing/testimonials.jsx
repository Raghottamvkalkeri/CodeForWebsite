import Card3d from '../../components/card3d';

const TestimonialsSection = () => {
    const values = [
        {
          role: 'Chief Digital Officer, CURATAL',
            title: 'Kumar Pandurangan',
            subtitle: "We partnered with AVETO to develop our video interview product. Their team's expertise was exceptional.",
        },
        {
          role: 'Client, Sponsor, GESINC',
            title: 'James B',
            subtitle: "I would like to thank you and especially the team for their patience and perseverance!You have delivered a top notch program that we can all be proud of. Nothing ever goes as planned and I think we all managed to work together to achieve the needed result. I’m sure there will be bumps in the road over the next few months but I am confident we will work through them successfully.",
        },
        {
          role: 'CIO ,SHOOTPOINT BLANK',
            title: 'Ken Roth',
            subtitle: 'Great work in simplifying the Customer Onboarding and Contact Management mechanism and integrating with our core legacy application',
        },
        {
          role: 'FoodRelated',
            title: 'Raul Ciorciari',
            // subtitle: "When we faced challenges with an outdated eCommerce experience and disconnected back-end systems, Aveto stepped in with deep technical expertise and a hands-on approach. They led the full redesign of our Miva site and developed a custom Heroku middleware to connect it with our legacy ERP—streamlining operations and eliminating manual processes. <br /><br /> As we scaled, Aveto continued to deliver. They built a seamless mobile app tied directly to our product catalog and played a lead role in our NetSuite ERP implementation, including integration via Celigo and zero-downtime deployments. Their ability to handle complex system architecture, provide creative design input, and consistently deliver on time made them invaluable. Thanks in part to this collaboration, we achieved consistent double-digit annual growth. If you're looking for a true technology partner who owns the work and grows with you, I highly recommend Aveto.",
            subtitle: "When outdated eCommerce systems slowed us down, Aveto stepped in with deep expertise—redesigning our Miva site, building Heroku middleware for ERP integration, delivering a catalog-tied mobile app, leading our NetSuite ERP rollout with Celigo and zero-downtime deployments, managing complex architecture with creative design, and consistently driving double-digit growth.",
        },
    ];

    return (
        <section className="w-full px-6 md:px-20 py-16 px-6 md:px-20 lg:px-20 xl:px-40 2xl:px-40 bg-gray-100">
            <div className="max-w-7xls container mx-auto  mb-16">
                <h2 className="page-subheader">What our customers say !</h2>
                {/* <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    At Aveto, our values shape every solution we craft, every decision we make, and every partnership we build.
                </p> */}
            

            {/* 3-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-7xls mx-auto">
                {/* Left Column (2 Cards) */}
                <div className="space-y-8">
                    <Card3d>
                        <div className="flex flex-col items-left gap-4">
                            {/* {values[0].icon} */}
                            <div className='pt-3'>
                                <p className="page-paragraph text-slate-500 text-md ">{values[0].subtitle}</p>
                                <h3 className="pt-3 page-paragraph !font-bold">{values[0].title}</h3>
                                <p className="text-slate-400 caption-text-medium">{values[0].role}</p>
                            </div>
                        </div>
                    </Card3d>

                    <Card3d>
                        <div className="flex flex-col items-left gap-4">
                            {/* {values[1].icon} */}
                            <div className='pt-3'>
                                <p className="page-paragraph text-slate-500 text-md">{values[1].subtitle}</p>
                                <h3 className="font-bitter pt-3 page-paragraph !font-bold">{values[1].title}</h3>
                                <p className="text-slate-400 caption-text-medium">{values[1].role}</p>
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
                            {/* {values[2].icon} */}
                            <div className='pt-3'> 
                                <p className="page-paragraph text-slate-500 text-md">{values[2].subtitle}</p>
                                <h3 className="font-bitter pt-3 page-paragraph !font-bold">{values[2].title}</h3>
                                <p className="text-slate-400 caption-text-medium">{values[2].role}</p>
                            </div>
                        </div>
                    </Card3d>

                    <Card3d>
                        <div className="flex flex-col items-left gap-4">
                            {/* {values[3].icon} */}
                            <div className='pt-3'>
                                <p className="page-paragraph text-slate-500 text-md" dangerouslySetInnerHTML={{ __html: values[3].subtitle }}></p>
                                <h3 className="font-bitter pt-3 page-paragraph !font-bold">{values[3].title}</h3>
                                <p className="text-slate-400 caption-text-medium">{values[3].role}</p>
                            </div>
                        </div>
                    </Card3d>
                </div>
            </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

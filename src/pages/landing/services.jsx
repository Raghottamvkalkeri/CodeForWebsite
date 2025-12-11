import React from 'react';


const ServiceCard = ({
    title,
    subtext,
    imgSrc,
    height = 'h-65',
    bgColor = 'bg-white/90',
}) => (
    <div className={`relative overflow-hidden rounded-xl shadow-md group ${height}`}>
        {/* Image */}
        <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Fixed bottom overlay - stays flush with bottom */}
        <div className={`absolute bottom-0 left-0 w-full ${bgColor} text-white p-6`}>
            <h3 className="text-3xl font-bold">{title}</h3>

            {/* Subtext slides up inside card */}
            <p className="text-lg text-white mt-2 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                {subtext}
            </p>
        </div>
    </div>
);


const ComplexServicesSection = () => {
    return (
        <section className="w-full bg-white py-16 px-6 md:px-20 lg:px-20 xl:px-40 2xl:px-40">
            <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Card (Same style as others, but can use different image/content) */}
                <ServiceCard
                    title="Enterprise Platforms"
                    subtext="Streamline your business operations with our solutions, tailored for efficiency and scalability. "
                    imgSrc='https://www.thoughtworks.com/content/dam/thoughtworks/images/photography/tile/homepage/hp_tile_the_agility_paradox_whitepaper.jpg'
                    height="h-full" // take full height of parent grid
                    bgColor="bg-[#47A1AD]"
                />

                {/* Right 2x2 Card Grid */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Left Column with 2 cards stacked */}
                    <div className="flex flex-col gap-6">
                        <ServiceCard
                            title="Data"
                            subtext="Unlock the power of data with our advanced analytics and management services. "
                            imgSrc='https://www.thoughtworks.com/content/dam/thoughtworks/images/photography/content-card/insights/radar/tr_content_card_tr32.jpg'
                            bgColor="bg-[#E16A7C]"

                        />
                        <ServiceCard
                            title="Integration"
                            subtext="
									Achieve seamless connectivity with our integration solutions."
                            imgSrc='https://www.thoughtworks.com/content/dam/thoughtworks/images/photography/tile/homepage/hp_tile_the_agility_paradox_whitepaper.jpg'
                            bgColor="bg-[#CC850A]"

                        />
                    </div>

                    {/* Right Column with tall card */}
                    <ServiceCard
                        title="AI"
                        subtext="
									Revolutionize your business with AI-driven innovations."
                        imgSrc='https://www.thoughtworks.com/content/dam/thoughtworks/images/photography/content-card/insights/radar/tr_content_card_tr32.jpg'
                        height="h-full"
                        bgColor="bg-[#6B9E78]"
                    />
                </div>
            </div>
        </section>
    );
};

export default ComplexServicesSection;

import Clients from './clients'
import Hero from './hero'
import PartnersSection from './partnersSection'
import TestimonialsSection from './testimonials'
import WhatWeDo from './whatWeDo'
import Whatwedone from './Whatwedone'
function Landing() {

  return (
    <div>
      <Hero />
      <Whatwedone />
      <WhatWeDo />
      
      {/* <WhoWeAre /> */}
      {/* <OurVision /> */}
      {/* <OurValues /> */}
      <Clients/>
      <PartnersSection />
      {/* <ServicesSection/> */}
      {/* <SliderSection/> */}
      {/* <ParallaxSection /> */}
     
   
      
     <TestimonialsSection/>
     {/* <ContactUsSection /> */}
      
    </div>
  );
}

export default Landing

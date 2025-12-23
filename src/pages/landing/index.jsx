import { useEffect, useState } from 'react'
import Section from "../../components/Section"
import Clients from './clients'
import Hero from './hero'
import PartnersSection from './partnersSection'
import TestimonialsSection from './testimonials'
import WhatWeDo from './whatWeDo'
import Whatwedone from './Whatwedone'
function Landing() {


  const [loading, setLoading] = useState({
    hero: true,
    done: true,
    what: true,
    clients: true,
    partners: true,
    testimonials: true,
  });

  useEffect(() => {
    setTimeout(() => setLoading(l => ({ ...l, hero: false })), 200);
    setTimeout(() => setLoading(l => ({ ...l, done: false })), 400);
    setTimeout(() => setLoading(l => ({ ...l, what: false })), 600);
    setTimeout(() => setLoading(l => ({ ...l, clients: false })), 800);
    setTimeout(() => setLoading(l => ({ ...l, partners: false })), 1000);
    setTimeout(() => setLoading(l => ({ ...l, testimonials: false })), 1200);
  }, []);

  return (
    <div>
        <Section loading={loading.hero} height={520}>
        <Hero />
      </Section>
     <Section loading={loading.done} height={420}>
        <Whatwedone />
      </Section>
            <WhatWeDo />

      
      {/* <WhoWeAre /> */}
      {/* <OurVision /> */}
      {/* <OurValues /> */}
      <Section loading={loading.clients} height={300}>
        <Clients />
      </Section>
      <Section loading={loading.partners} height={360}>
        <PartnersSection />
      </Section>

      {/* <ServicesSection/> */}
      {/* <SliderSection/> */}
      {/* <ParallaxSection /> */}
     
   
      
          <Section loading={loading.testimonials} height={480}>
        <TestimonialsSection />
      </Section>
     {/* <ContactUsSection /> */}
      
    </div>
  );
}

export default Landing

import ChooseUs from './ChooseUs'
import Hero from './hero'
import Clients from './clients'
import OurVision from './ourVision'
import ServicesSection from './services'
import TestimonialsSection from './testimonials'
import ContactUsSection from './contactus'
import OurValues from './ourValues'
import WhoWeAre from './whoWeAre'
import SliderSection from './slider'
function Landing() {

  return (
    <div>
      <Hero />
      <WhoWeAre />
      <OurVision />
      <OurValues />
      <Clients/>
      <ServicesSection/>
      <SliderSection/>
     <TestimonialsSection/>
     <ContactUsSection />
      
    </div>
  );
}

export default Landing

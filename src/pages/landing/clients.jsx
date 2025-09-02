import Marquee from 'react-fast-marquee';
import logo1 from '../../assets/clientLogos/curatal.png'
import logo2 from '../../assets/clientLogos/fr.png'
import logo3 from '../../assets/clientLogos/alexani.png'
import logo4 from '../../assets/clientLogos/efi.png'
import logo5 from '../../assets/clientLogos/gesi.png'
import logo6 from '../../assets/clientLogos/slk.png'
import logo7 from '../../assets/clientLogos/smartennovations.png'
import logo8 from '../../assets/clientLogos/wavelogix.png'
import logo9 from '../../assets/clientLogos/ahmetturk.png'
import logo10 from '../../assets/clientLogos/pointblank.png'
import logo11 from '../../assets/clientLogos/piratelabs.png'
import logo12 from '../../assets/clientLogos/property plus.png'
import logo13 from '../../assets/clientLogos/lexisnexis.png'
import logo14 from '../../assets/clientLogos/kandha.png'
import logo15 from '../../assets/clientLogos/onibex.png'
import logo16 from '../../assets/clientLogos/mcfadyen.png'




const logos_arr1 = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,];
const logos_arr2 = [logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16,]
const Clients = () => {
    return (
        <section className="py-16 px-25">
            <h2 className="text-center text-3xl font-bold mb-10 text-slate-800">Our Clients</h2>

            {/* Top Row - Left to Right */}
            <Marquee gradient={true} gradientWidth={50} speed={25} className="mb-6" pauseOnHover>
                {logos_arr1.map((logo, idx) => (
                    <img
                        key={'top-' + idx}
                        src={logo}
                        alt={`Client ${idx}`}
                        className="h-12 md:h-16 mx-8 object-contain"
                    />
                ))}
            </Marquee>

            {/* Bottom Row - Right to Left */}
            <Marquee gradient={true} gradientWidth={50} speed={25} direction="right" pauseOnHover>
                {logos_arr2.map((logo, idx) => (
                    <img
                        key={'bottom-' + idx}
                        src={logo}
                        alt={`Client ${idx}`}
                        className="h-12 md:h-16 mx-8 object-contain"
                    />
                ))}
            </Marquee>
        </section>
    );
};

export default Clients;

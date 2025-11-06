import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const Clients = () => {
    const [logosArr1, setLogosArr1] = useState([]);
    const [logosArr2, setLogosArr2] = useState([]);

    useEffect(() => {
        const cachedLogos = localStorage.getItem("clientLogos");
      
        if (cachedLogos) {
          const data = JSON.parse(cachedLogos);
          const half = Math.ceil(data.length / 2);
          setLogosArr1(data.slice(0, half));
          setLogosArr2(data.slice(half));
        } else {
          fetch("https://avetoconsulting.com/apis/clients.php")
            .then((response) => response.json())
            .then((data) => {
              if (Array.isArray(data)) {
                localStorage.setItem("clientLogos", JSON.stringify(data)); // cache
                const half = Math.ceil(data.length / 2);
                setLogosArr1(data.slice(0, half));
                setLogosArr2(data.slice(half));
              }
            })
            .catch((error) => console.error("Error fetching client logos:", error));
        }
      }, []);

    return (
        <section className="py-16 px-6 md:px-20 lg:px-80 xl:px-80 2xl:px-80">
            <div className="max-w-7xls container mx-auto mb-10">
            <h2 className="page-subheader">Our Clients</h2>

            {/* Top Row - Left to Right */}
            <Marquee gradient={true} gradientWidth={50} speed={25} className="mb-6" pauseOnHover>
                {logosArr1.map((logo, idx) => (
                    <img
                        key={'top-' + idx}
                        src={logo.logo_url}
                        alt={`Client ${idx}`}
                        className="h-12 md:h-20 mx-8 object-contain"
                        loading="lazy"
                    />
                ))}
            </Marquee>

            {/* Bottom Row - Right to Left */}
            <Marquee gradient={true} gradientWidth={50} speed={25} direction="right" className="mt-20 mb-6" pauseOnHover>
                {logosArr2.map((logo, idx) => (
                    <img
                        key={'bottom-' + idx}
                        src={logo.logo_url}
                        alt={`Client ${idx}`}
                        className="h-12 md:h-20 mx-8 object-contain"
                        loading="lazy"
                    />
                ))}
            </Marquee>
            </div>
        </section>
    );
};

export default Clients;
import React from 'react';

const ContactUsSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-20 px-6 md:px-16 lg:px-80 xl:px-80 2xl:px-80"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/196650/pexels-photo-196650.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="bg-black/60 w-full h-full absolute top-0 left-0 z-0"></div>

      <div className="relative z-10 max-w-8xl mx-auto bg-white/90 rounded-2xl shadow-xl p-10 md:p-16 flex flex-col md:flex-row gap-10">
        {/* Left - Heading */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-600 text-lg">
            Got a project or question in mind? We’d love to hear from you. Reach out to us, and we’ll get back as soon as possible.
          </p>
        </div>

        {/* Right - Form */}
        <div className="md:w-1/2">
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+91 12345 67890"
                inputMode="numeric"
                className="mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="company" className="text-sm font-medium text-slate-700">
                Company
              </label>
              <input
                type="text"
                id="company"
                placeholder="Your company name"
                className="mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Tell us what you're looking for..."
                rows="4"
                className="mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-700 text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;

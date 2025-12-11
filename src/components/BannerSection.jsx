export default function BannerSection({ subtitle, title, description, image }) {
  return (//bg-white py-16 px-6 md:px-20 lg:px-20 xl:px-40 2xl:px-40
    <section className="bg-gray-50 py-16 px-6 md:px-20 lg:px-20 xl:px-40 2xl:px-40 mt-10 lg:h-[425px] md:h-[425px]">
      <div
        className={`max-w-7xls container mx-auto grid gap-12 sm:gap-0 h-full ${
          image ? "md:grid-cols-[60%_40%]" : "md:grid-cols-1"
        }`}
      >
        {/* Left (Text) */}
        <div className="flex flex-col justify-center">
          <p className="text-sky-400 p-text mb-3">{subtitle}</p>
          <h1
            className="ft-header text-black break-words leading-snug"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className="text-lg p-text text-slate-700 max-w-lg"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* Right (Image) */}
        {image && (
          <div className="flex justify-end items-center">
            <img
              src={image}
              alt="Services"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
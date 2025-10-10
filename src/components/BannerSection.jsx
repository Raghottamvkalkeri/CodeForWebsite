// BannerSection.jsx
export default function BannerSection({ subtitle, title, description, image }) {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-80 mt-10 h-[425px]">
      <div
        className={`max-w-7xl mx-auto grid gap-12 h-full ${
          image ? "md:grid-cols-2" : "md:grid-cols-1"
        }`}
      >
        <div className="flex flex-col justify-center">
          <p className="text-sky-400 p-text mb-3">{subtitle}</p>
          <h1 className="ft-header !italic text-sky-500 break-words leading-snug" dangerouslySetInnerHTML={{ __html: title }} />
          <p
            className="text-lg p-text text-slate-700 max-w-lg"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {image && (
          <div className="flex justify-center items-center">
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
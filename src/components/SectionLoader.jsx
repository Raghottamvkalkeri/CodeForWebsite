const SectionLoader = ({ height = 400 }) => {
    return (
        <div
            className="w-full rounded-xl bg-gray-100 animate-pulse mb-20"
            style={{ minHeight: height }}
        >
            <div className="p-8 space-y-4">
                <div className="h-6 bg-gray-300 w-1/4 rounded" />
                <div className="h-4 bg-gray-300 w-2/3 rounded" />
                <div className="h-4 bg-gray-300 w-1/2 rounded" />
                <div className="h-48 bg-gray-300 rounded-lg mt-6" />
            </div>
        </div>
    );
};

export default SectionLoader;
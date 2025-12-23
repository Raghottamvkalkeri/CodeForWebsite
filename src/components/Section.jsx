import SectionLoader from "./SectionLoader";

const Section = ({ loading, height, children }) => {
    return (
        <section style={{ minHeight: height }}>
            {loading ? <SectionLoader height={height} /> : children}
        </section>
    );
};

export default Section;
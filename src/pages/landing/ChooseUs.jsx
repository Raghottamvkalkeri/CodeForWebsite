import Card3d from '../../components/card3d';

const ChooseUs = () => {
  return (
    <section className="px-5 md:px-20 py-16 flex justify-center flex-col">
      <div className="max-w-8xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Row 1: 3 Cards */}
        <Card3d imgSrc="https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b6_5f6509a0242b30f88806aa1eabfed0c2_Asset%2039-p-800.png" title="Real-Time Analytics" subtitle="Monitor your finances live with clear, intuitive dashboards." />
        <Card3d imgSrc="https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b5_9803be50bc139999f06bc74eaf96a654_Asset%2038-p-500.png" title="Automated Reports" subtitle="Generate summaries instantly—no manual work needed." />
        <Card3d imgSrc="https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b4_156cd028c9017d98ee244eda00843995_Asset%2037-p-500.png" title="Smart Budgeting" subtitle="Plan and adjust with AI-powered budget suggestions." />
        <Card3d imgSrc="https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b4_156cd028c9017d98ee244eda00843995_Asset%2037-p-500.png" title="Smart Budgeting" subtitle="Plan and adjust with AI-powered budget suggestions." />
      
      </div>
        {/* Row 2: 2 Cards spanning 1.5 columns each (2 cards = 3 columns) */}
        {/* <div className="max-w-7xls mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card3d imgSrc="https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b6_5f6509a0242b30f88806aa1eabfed0c2_Asset%2039-p-800.png" title="Real-Time Analytics" subtitle="Monitor your finances live with clear, intuitive dashboards." />
          <Card3d imgSrc="https://cdn.prod.website-files.com/680ee0879bf5c75689c201ff/680ee0889bf5c75689c202b6_5f6509a0242b30f88806aa1eabfed0c2_Asset%2039-p-800.png" title="Real-Time Analytics" subtitle="Monitor your finances live with clear, intuitive dashboards." />
        </div> */}
    </section>
  );
};

export default ChooseUs;

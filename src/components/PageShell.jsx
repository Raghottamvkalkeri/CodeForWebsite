import { useEffect, useState } from "react";
import Section from "./Section";

const PageShell = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <Section loading={loading} height={600}>
      {children}
    </Section>
  );
};

export default PageShell;
import { createContext, useContext, useEffect, useState } from "react";

const ServicesContext = createContext();

export function ServicesProvider({ children }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://avetoconsulting.com/apis/services.php');
        const text = await response.text();

        // Extract JSON-like array
        const jsonMatch = text.match(/\[\s*\{[\s\S]*\}\s*\]/);
        if (jsonMatch) {
          const fixed = jsonMatch[0]
            .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":')
            .replace(/'/g, '"');
          const parsed = JSON.parse(fixed);
          setServices(parsed);
        } else {
          throw new Error('Could not find services array in response');
        }
      } catch (err) {
        console.error('Error fetching services:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <ServicesContext.Provider value={{ services, loading, error }}>
      {children}
    </ServicesContext.Provider>
  );
}

export function useServices() {
  return useContext(ServicesContext);
}
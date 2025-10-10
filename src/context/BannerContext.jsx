import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BannerContext = createContext();

export function BannerProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    // map route -> API page param
    const segments = location.pathname.split("/").filter(Boolean); 
    const pageKey = segments.pop() || "default";

    fetch(`https://avetoconsulting.com/apis/banners.php?page=${pageKey}`)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [location.pathname]);

  return (
    <BannerContext.Provider value={{ data, loading, error }}>
      {children}
    </BannerContext.Provider>
  );
}

export function useBanner() {
  return useContext(BannerContext);
}
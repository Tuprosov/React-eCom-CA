import { createContext, useContext, useState, useEffect } from "react";
import { API } from "./api/api";
import { API_BASE } from "./constants";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [topSelling, setTopSelling] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const api = new API(`${API_BASE}`);

      try {
        const data = await api.getProducts();
        setProducts(data.data);
        setTopSelling(data.data.slice(0, 4));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this will only run once on component mount

  return (
    <ProductContext.Provider
      value={{ products, topSelling, setProducts, loading, error }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}

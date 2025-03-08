import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { API } from "../js/api/api";
import { API_BASE } from "../js/constants";

function Layout() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const api = new API(`${API_BASE}`);

      try {
        const data = await api.getProducts();
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this will only run once on component mount

  return (
    <div>
      <Header products={{ products, setProducts }} />
      <Outlet context={{ products, loading }} />
      <Footer />
    </div>
  );
}

export default Layout;

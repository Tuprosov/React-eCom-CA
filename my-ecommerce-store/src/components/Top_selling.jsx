import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { API } from "../js/api/api";
import { API_BASE } from "../js/constants";

function TopSellers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const api = new API(`${API_BASE}`); // Replace with your actual API base URL

      try {
        const data = await api.getProducts(4); // Get the first 4 products
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
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Top Selling</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {products.slice(0, 4).map((product) => (
          <li key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TopSellers;

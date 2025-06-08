import { useProducts } from "../js/productContext";
import ProductCard from "./ProductCard";

function Arrivals() {
  const { products, loading } = useProducts(); // For Context API

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (!products.length) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-center mb-6">New Arrivals</h2>
        <h3>Products not found</h3>
      </div>
    );
  }

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">New Arrivals</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
      <div className="text-center mt-6">
        <button
          className="bg-black text-white py-2 px-6 rounded-3xl hover:bg-gray-800 transition"
          onClick={() => {
            // Handle "View All" button click
            // You can add navigation logic here or a modal to show all products
          }}
        >
          View All
        </button>
      </div>
    </section>
  );
}

export default Arrivals;

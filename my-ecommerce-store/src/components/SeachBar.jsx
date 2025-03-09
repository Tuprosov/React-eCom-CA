import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useProducts } from "../js/productContext";

function Searchbar({ isSearchOpen, setIsSearchOpen }) {
  const [query, setQuery] = useState("");
  const { products, setProducts } = useProducts();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0 && allProducts.length === 0) {
      // this will only run once bcs allProducts won't change
      setAllProducts(products);
    }
  }, [products]);
  console.log("All products", allProducts);

  useEffect(() => {
    const handleResize = () => {
      setIsSearchOpen(window.innerWidth >= 850);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsSearchOpen]);

  //   handle search
  useEffect(() => {
    if (query.trim() === "") {
      setProducts(allProducts); // If the query is empty, show all products
    } else {
      const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(filtered); // Update filtered products
    }
  }, [query]); // Watch query

  const handleSearch = (e) => {
    setQuery(e.target.value); // Only update query, filtering is handled by useEffect
  };

  return (
    <>
      {isSearchOpen ? (
        <AnimatePresence>
          <motion.div
            key="search-bar"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="relative flex-grow"
          >
            <FaSearch className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-8 py-2 border rounded-3xl"
              value={query}
              onChange={handleSearch}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
          <FaSearch className="text-gray-600" />
        </button>
      )}
    </>
  );
}

export default Searchbar;

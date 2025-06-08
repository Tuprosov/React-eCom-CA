import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useProducts } from "../js/productContext";
import { useLocation } from "react-router-dom";

function Searchbar({ isSearchOpen, setIsSearchOpen }) {
  const [query, setQuery] = useState("");
  const { products, setProducts } = useProducts();
  const [allProducts, setAllProducts] = useState([]);
  const location = useLocation(); // Get current location
  const searchRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (location.pathname === "/") {
      setQuery(""); // Clear input when homepage loads
    }
  }, [location.pathname]);

  useEffect(() => {
    if (products.length > 0 && allProducts.length === 0) {
      // this will only run once bcs allProducts won't change
      setAllProducts(products);
    }
  }, [products]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsSearchOpen(width >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        windowWidth < 1024 &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [windowWidth, setIsSearchOpen]);

  //   handle search
  useEffect(() => {
    if (query.trim() === "") {
      setProducts(allProducts); // show all products if query is emoty
    } else {
      const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(filtered); // Update with filtered products
    }
  }, [query]); // Watch query

  const handleSearch = (e) => {
    setQuery(e.target.value); // Only update query, filtering is handled by useEffect
  };

  return (
    <>
      <AnimatePresence>
        {isSearchOpen && (
          <div ref={searchRef} className="absolute right-12 min-w-48">
            <motion.div
              key="search-bar"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <FaSearch className="absolute top-3 left-3 text-gray-400" />
              <input
                name="search-input"
                type="text"
                placeholder="Search products..."
                className="w-full px-8 py-2 border rounded-3xl bg-white shadow-sm"
                value={query}
                onChange={handleSearch}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
        <FaSearch className="text-gray-600" />
      </button>
    </>
  );
}

export default Searchbar;

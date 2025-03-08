// import { useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// function Searchbar({ isSearchOpen, setIsSearchOpen }) {
//   useEffect(() => {
//     const handleResize = () => {
//       setIsSearchOpen(window.innerWidth >= 850); // Automatically open the search bar on larger screens
//     };

//     handleResize(); // Set initial state based on window size
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, [setIsSearchOpen]);

//   return (
//     <>
//       {isSearchOpen ? (
//         <AnimatePresence>
//           <motion.div
//             key="search-bar"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 50 }}
//             transition={{ duration: 0.3 }}
//             className="relative flex-grow"
//           >
//             <FaSearch className="absolute top-3 left-3 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="w-full px-8 py-2 border rounded-3xl"
//             />
//           </motion.div>
//         </AnimatePresence>
//       ) : (
//         <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
//           <FaSearch className="text-gray-600" />
//         </button>
//       )}
//     </>
//   );
// }

// export default Searchbar;

import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { API } from "../js/api/api";
import { API_BASE } from "../js/constants";

function Searchbar({ products, setProducts, isSearchOpen, setIsSearchOpen }) {
  const [query, setQuery] = useState("");
  //   const api = new API(`${API_BASE}`);

  useEffect(() => {
    const handleResize = () => {
      setIsSearchOpen(window.innerWidth >= 850);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsSearchOpen]);

  // handle search
  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    // Use searchQuery directly for filtering
    if (Array.isArray(products)) {
      console.log("products", products);
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filtered);
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

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Navbar from "./nav.jsx";
import Searchbar from "./SeachBar.jsx";

function Header({ products, setFilteredProducts }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setisSearchOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white shadow-md py-4 px-6 relative">
      <div className="flex items-center justify-between min-h-[45px]">
        {/* Burger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18M3 12h18M3 18h18"></path>
            </svg>
          </button>
        </div>

        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img src="/path-to-my-logo.png" alt="Logo" className="h-8" />
            {/* <span className="text-xl font-bold">MyStore</span> */}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <Navbar isMobile={false} />

        {/* Search bar and icons */}
        <div
          className={`flex items-center space-x-4 ${
            isSearchOpen ? "min-w-[40%]" : ""
          }`}
        >
          <Searchbar
            products={products}
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setisSearchOpen}
            setFilteredProducts={setFilteredProducts}
          />

          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <FaShoppingCart className="text-xl text-gray-600 cursor-pointer" />
            </Link>
            <Link to="/profile">
              <FaUser className="text-xl text-gray-600 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      <Navbar isMobile={true} isMenuOpen={isMenuOpen} />
    </header>
  );
}

export default Header;

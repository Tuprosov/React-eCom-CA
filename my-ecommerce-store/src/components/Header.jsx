import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Navbar from "./nav.jsx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-8" />
          <span className="text-xl font-bold">MyStore</span>
        </div>

        {/* Desktop Navigation */}
        <Navbar isMobile={false} />

        {/* Search bar and icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 border rounded-lg w-64"
            />
            <FaSearch className="absolute top-3 right-3 text-gray-600" />
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <FaShoppingCart className="text-xl text-gray-600 cursor-pointer" />
            </Link>
            <Link to="/profile">
              <FaUser className="text-xl text-gray-600 cursor-pointer" />
            </Link>
          </div>
        </div>

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
      </div>

      {/* Mobile Dropdown Navigation */}
      <Navbar isMobile={true} isMenuOpen={isMenuOpen} />
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ isMobile, isMenuOpen }) {
  return (
    <AnimatePresence>
      {(isMobile && isMenuOpen) || !isMobile ? (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`${
            isMobile
              ? "absolute top-16 left-0 w-full bg-white shadow-md p-4 md:hidden"
              : "hidden md:flex space-x-8"
          }`}
        >
          <ul className={`${isMobile ? "space-y-4" : "flex space-x-8"}`}>
            <li className="text-gray-600 hover:text-gray-900">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-900">
              <Link to="/onsale">OnSale</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-900">
              <Link to="/newarrivals">New Arrivals</Link>
            </li>
            <li className="text-gray-600 hover:text-gray-900">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}

export default Navbar;

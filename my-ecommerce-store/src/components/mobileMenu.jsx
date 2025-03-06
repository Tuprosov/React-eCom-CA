import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function MobileMenu({ isMenuOpen }) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4"
        >
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/shop"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/onsale"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  OnSale
                </Link>
              </li>
              <li>
                <Link
                  to="/newarrivals"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;

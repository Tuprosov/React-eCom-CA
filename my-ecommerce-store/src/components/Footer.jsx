import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="col-span-1 md:col-span-1 flex flex-col justify-center md:justify-start order-1 md:order-none">
            <h2 className="text-2xl font-bold">My logo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              fugit maxime inventore
            </p>
            {/* Social Links */}
            <div className="flex justify-center mt-6">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          <div className="col-span-1 md:col-span-4 flex justify-around flex-wrap gap-8 order-2 md:order-none">
            <div>
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Help</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">FAQ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Payments
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Developers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

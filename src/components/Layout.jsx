import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ProductProvider } from "../js/productContext";

function Layout() {
  const [products, setProducts] = useState([]);

  return (
    <ProductProvider value={{ products, setProducts }}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ProductProvider>
  );
}

export default Layout;

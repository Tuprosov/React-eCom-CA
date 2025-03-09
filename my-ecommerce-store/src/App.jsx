import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import "./App.css";
import ProductPage from "./pages/ProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutSuccess from "./pages/CheckoutSuccess.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="shop" element={<div>Shop</div>} />
        <Route path="onsale" element={<div>Onsale</div>} />
        <Route path="newarrivals" element={<div>New Arrivals</div>} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="profile" element={<div>Profile</div>} />
        <Route path="checkout" element={<CheckoutSuccess />} />
      </Route>
    </Routes>
  );
}

export default App;

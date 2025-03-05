import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/useCartStore.js";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutSuccess from "./pages/CheckoutSuccess.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;

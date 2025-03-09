import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../js/store/cartSlice";

function CheckoutSuccess() {
  const dispatch = useDispatch();

  // Clear the cart when the page loads
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        Order Placed Successfully! 🎉
      </h2>
      <p className="text-gray-700 mb-6">
        Thank you for your purchase! You will receive an email confirmation
        shortly.
      </p>
      <Link
        to="/"
        className="bg-black text-white py-2 px-6 rounded-3xl hover:bg-gray-800 transition"
      >
        Back to Store
      </Link>
    </div>
  );
}

export default CheckoutSuccess;

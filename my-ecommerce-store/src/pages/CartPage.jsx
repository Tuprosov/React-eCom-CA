import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../js/store/cartSlice";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate the total price
  const total = cart.reduce(
    (acc, product) =>
      acc + (product.discountedPrice ?? product.price) * product.quantity,
    0
  );

  // Handle checkout button click
  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to the checkout page
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length > 0 ? (
        <div>
          <ul className="space-y-4">
            {cart.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-gray-500">
                    Price: ${product.discountedPrice ?? product.price}
                  </p>
                  <p className="text-gray-500">Quantity: {product.quantity}</p>
                </div>
                <p className="font-semibold">
                  $
                  {(product.discountedPrice ?? product.price) *
                    product.quantity}
                </p>
                <button
                  onClick={() => dispatch(removeFromCart(product.id))}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-bold">Total: ${total}</p>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-black text-white py-2 px-6 rounded-3xl hover:bg-gray-800 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

// Sample cart data
const sampleCart = [
  { id: 1, name: "Product 1", price: 20, quantity: 2 },
  { id: 2, name: "Product 2", price: 30, quantity: 1 },
];

function CartPage() {
  const navigate = useNavigate();

  // Calculate the total price
  const total = sampleCart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  // Handle checkout button click
  const handleCheckout = () => {
    navigate("/checkout-success"); // Navigate to the success page
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {sampleCart.length > 0 ? (
        <div>
          <ul className="space-y-4">
            {sampleCart.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-500">Price: ${product.price}</p>
                  <p className="text-gray-500">Quantity: {product.quantity}</p>
                </div>
                <p className="font-semibold">
                  ${product.price * product.quantity}
                </p>
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

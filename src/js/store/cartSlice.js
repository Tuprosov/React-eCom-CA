import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing the shopping cart state.
 *
 * The state consists of a `cart` array, where each item is an object
 * representing a product in the cart, including its quantity.
 */
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * Adds an item to the cart. If the item already exists, increments its quantity.
     *
     * @param {Object} state - The current cart state.
     * @param {Object} action - The dispatched action.
     * @param {Object} action.payload - The product to add.
     */
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    /**
     * Removes an item from the cart by ID.
     *
     * @param {Object} state - The current cart state.
     * @param {Object} action - The dispatched action.
     * @param {string} action.payload - The ID of the product to remove.
     */
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    /**
     * Clears all items from the cart.
     *
     * @param {Object} state - The current cart state.
     */
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

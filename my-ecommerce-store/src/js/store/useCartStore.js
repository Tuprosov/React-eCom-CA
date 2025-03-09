import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import cart slice
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";

// Persist configuration for cart
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // Only persist the cart slice
};

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer, // Add your cart reducer here
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with persistedReducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor
export const persistor = persistStore(store);

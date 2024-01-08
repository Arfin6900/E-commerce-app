// lib/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Each item will have { product, quantity }
  },
  
  reducers: {
    addItem: (state, action) => {
      console.log("==========>",state);
      const newItem = {
        product: action.payload,
        quantity: 1,
      };

      // Check if the item is already in the cart
      const existingItemIndex = state.items.findIndex(
        item => item.product.priceId === newItem.product.priceId
      );

      if (existingItemIndex !== -1) {
        // If the item is already in the cart, update the quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // If the item is not in the cart, add it
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      // Remove the entire item from the cart
      state.items = state.items.filter(
        item => item.product.priceId !== action.payload.priceId
      );
    },
    decreaseQuantity: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        item => item.product.priceId === action.payload.priceId
      );

      if (existingItemIndex !== -1) {
        // If the item is in the cart, decrease the quantity
        state.items[existingItemIndex].quantity -= 1;

        // If the quantity becomes zero, remove the item from the cart
        if (state.items[existingItemIndex].quantity === 0) {
          state.items.splice(existingItemIndex, 1);
        }
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

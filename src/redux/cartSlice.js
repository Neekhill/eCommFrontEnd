import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartQuantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.cartQuantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    incProductQuantity: (state, action) => {
      const index = state.products.findIndex(
        (item) => item._id === action.payload.id
      );
      state.products[index].quantity += 1;
      state.total += state.products[index].price;
    },
    decProductQuantity: (state, action) => {
      const index = state.products.findIndex(
        (item) => item._id === action.payload.id
      );
      const itemPrice = state.products[index].price;

      if (state.products[index].quantity > 1) {
        state.products[index].quantity -= 1;
        state.total -= state.products[index].price;
      } else if (state.products[index].quantity === 1) {
        const filteredProducts = state.products.filter(
          (item) => item._id !== action.payload.id
        );
        state.cartQuantity -= 1;
        state.total -= itemPrice;
        state.products = filteredProducts;
      }
    },
    deleteProduct: (state, action) => {
      const index = state.products.findIndex(
        (item) => item._id === action.payload.id
      );
      const itemPrice = state.products[index].price;
      const itemQuantity = state.products[index].quantity;

      const filteredProducts = state.products.filter(
        (item) => item._id !== action.payload.id
      );
      state.cartQuantity -= 1;
      state.total = state.total - itemPrice * itemQuantity;
      state.products = filteredProducts;
    },
    clearCart: (state, action) => {
      state.products.length = 0;
      state.cartQuantity = 0;
      state.total = 0;
    },
  },
});

export const {
  addProduct,
  incProductQuantity,
  decProductQuantity,
  deleteProduct,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

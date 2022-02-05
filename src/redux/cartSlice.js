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
  },
});

export const { addProduct, deleteProduct, incProductQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;

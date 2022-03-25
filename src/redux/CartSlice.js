import { createSlice } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += +action.payload.quantity;
      state.products.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = Cartslice.actions;

export default Cartslice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
    quantity: 0,
    costumerID: "",
  },
  reducers: {
    addProduct: (state, action) => {
      const existingIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          quantity:
            state.products[existingIndex].quantity + +action.payload.quantity,
        };
      } else {
        let tempProductItem = {
          ...action.payload,
          quantity: +action.payload.quantity,
        };
        state.products.push(tempProductItem);
      }

      state.quantity += +action.payload.quantity;
      state.totalPrice += action.payload.unitPrice * action.payload.quantity;
      const ID = localStorage.getItem("customerID");
      state.costumerID = ID;
      console.log(ID);
    },

    deleteProduct: (state, action) => {
      const product = action.payload;
      const filtered = state.products.filter((item) => item.id !== product.id);
      state.products = filtered;
      state.quantity -= +action.payload.quantity;
      state.totalPrice -= action.payload.unitPrice * action.payload.quantity;
    },
    deleteAllProduct: (state) => {
      state.products = [];
      state.quantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, deleteProduct, deleteAllProduct } =
  Cartslice.actions;

export default Cartslice.reducer;

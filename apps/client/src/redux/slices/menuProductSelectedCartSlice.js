import { createSlice } from "@reduxjs/toolkit";

const menuProductSelectedCartSlice = createSlice({
  name: "menuProductSelectedCart",
  initialState: {
    cart: [],
    subtotal: (0.0).toFixed(3),
  },
  reducers: {
    addProductToCart: (state, action) => {
      const { product, amount } = action.payload;

      const exitProduct = state.cart.find(
        (itemProduct) => itemProduct?.id === product?.id
      );
      if (!exitProduct) {
        const itemProduct = {
          ...product,
          amount,
        };
        state.cart.push(itemProduct);
      } else {
        exitProduct.amount = amount;
      }
    },
    incrementItem: (state, action) => {
      const { product, amount } = action.payload;
      const exitProduct = state.cart.find((item) => item?.id === product?.id);

      if (exitProduct) {
        exitProduct.amount = amount;
      }
    },
    decrementItem: (state, action) => {
      const { product, amount } = action.payload;
      const exitProduct = state.cart.find((item) => item?.id === product?.id);

      if (exitProduct) {
        if (amount == 0) {
          const newCart = state.cart.filter((item) => item?.id != product?.id);
          state.cart = newCart;
        } else {
          exitProduct.amount = amount;
        }
      }
      if (state.cart.length === 0) {
        state.subtotal = 0;
      }
    },
    subtotalProduct: (state) => {
      if (state.cart.length !== 0) {
        state.subtotal = state.cart?.reduce(function (
          accumulator,
          currentValue
        ) {
          return accumulator + Number(currentValue?.price);
        },
        0);
      } else {
        state.subtotal = 0;
      }
    },
  },
});

export const {
  addProductToCart,
  incrementItem,
  decrementItem,
  subtotalProduct,
} = menuProductSelectedCartSlice.actions;
export default menuProductSelectedCartSlice.reducer;

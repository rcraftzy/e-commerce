import { configureStore } from "@reduxjs/toolkit";
import restaurantMapLocationSlice from "./slices/restaurantMapLocationSlice";

const store = configureStore({
  reducer: {
    restaurantMapLocation: restaurantMapLocationSlice,
  },
});

export default store;

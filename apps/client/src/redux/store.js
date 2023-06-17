import { configureStore } from "@reduxjs/toolkit";
import restaurantMapLocationSlice from "./slices/restaurantMapLocationSlice";
import menuProductSelectedCartSlice from "./slices/menuProductSelectedCartSlice";

const store = configureStore({
  reducer: {
    restaurantMapLocation: restaurantMapLocationSlice,
    menuProductSelectedCart: menuProductSelectedCartSlice,
  },
});

export default store;

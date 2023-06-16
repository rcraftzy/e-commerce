import { createSlice } from "@reduxjs/toolkit";

const restaurantMapLocationSlice = createSlice({
  name: "restaurantMapLocation",
  initialState: {
    isActiveDescriptionRestauranLocation: false,
    currentRestaurantLocation: {},
    map: {},
  },
  reducers: {
    addRestaurantLocation: (state, action) => {
      state.currentRestaurantLocation = action.payload;
      state.isActiveDescriptionRestauranLocation = true;
    },
    closeDescriptionRestauranLocation: (state, action) => {
      state.isActiveDescriptionRestauranLocation = false;
    },
    addMapConfiguration: (state, action) => {
      console.log(action);
      //state.map = action.payload;
    },
  },
});
export const {
  addRestaurantLocation,
  closeDescriptionRestauranLocation,
  addMapConfiguration,
} = restaurantMapLocationSlice.actions;
export default restaurantMapLocationSlice.reducer;

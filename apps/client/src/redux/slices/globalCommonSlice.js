import { createSlice } from "@reduxjs/toolkit";

const globalCommonSlice = createSlice({
  name: "globalCommon",
  initialState: {
    token: "",
    currentAuthenticatedUser: {},
    currentPositionUser: [],
  },
  reducers: {
    addCredential: (state, action) => {
      const { token, currentAuthenticatedUser } = action.payload;
      state.token = token;
      state.currentAuthenticatedUser = currentAuthenticatedUser;
    },
    addPositionUser: (state, action) => {
      const { currentPositionUser } = action.payload;
      state.currentPositionUser = currentPositionUser;
    },
  },
});

export const { addPositionUser, addCredential } = globalCommonSlice.actions;

export default globalCommonSlice.reducer;

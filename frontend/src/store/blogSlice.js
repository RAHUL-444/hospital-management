import { createSlice } from "@reduxjs/toolkit";
import { sendRequest } from "../components/Api";
// const authSlice = createSlice({
//   name: "auth",
//   initialState: { isLoggedIn: false },
//   reducers: {
//     login(state) {
//       state.isLoggedIn = true;
//     },
//     logout(state) {
//       localStorage.removeItem("userId");
//       state.isLoggedIn = false;
//     },
//   },
// });

export const blogSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    getBloge: (state, action) => {
      state.user = action.payload;
    },

    getBlogeout: (state) => {
      state.user = null;
    },
  },
});

export const { getBloge, getBlogeout } = blogSlice.actions;

export const selectUser = (state) => state.user.user;

export default blogSlice.reducer;
// export const authActions = authSlice.actions;

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

export const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
// export const authActions = authSlice.actions;

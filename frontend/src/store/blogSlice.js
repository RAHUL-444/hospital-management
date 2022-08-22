import { createSlice } from "@reduxjs/toolkit";
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

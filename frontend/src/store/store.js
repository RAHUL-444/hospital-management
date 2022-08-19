import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./index";
import blogSlice from "./blogSlice";

export const store = configureStore({
  reducer: { user: userReducer ,blog:blogSlice},
});

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./index";

export const store = configureStore({
  reducer: { user: userReducer },
});

import { configureStore } from "@reduxjs/toolkit";
import todolistReduser from "../features/todolistslice";
let store = configureStore({
  reducer: {
    todo: todolistReduser,
  },
});
export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";
let initialsate = {
  todolist: [],
};

let todoslice = createSlice({
  name: "Todo",
  initialState: initialsate,
  reducers: {
    ADD: (state, action) => {
      state.todolist.push(action.payload);
    },
    DELETE: (state, action) => {
      state.todolist = state.todolist.filter((todo) => todo !== action.payload);
      console.log("slice", action.payload);
      console.log(state.todolist[action.payload]);
    },
    EDIT: (state, action) => {
      const { index, item } = action.payload;
      console.log(state.todolist[index], "originalitem");
      console.log(item, " changeitem");
      state.todolist[index] = item;
    },
  },
});
export default todoslice.reducer;
export const { ADD, DELETE, EDIT } = todoslice.actions;

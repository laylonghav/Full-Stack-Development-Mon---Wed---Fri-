import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "./counterSlice";
import userReduce from "./userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReduce,
    user: userReduce,
  },
});

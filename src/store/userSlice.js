import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: "", password: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions) => ({ ...actions.payload }),
    logout: () => initialState,
  },
});

export const { logout, setUser } = userSlice.actions;
export default userSlice.reducer;

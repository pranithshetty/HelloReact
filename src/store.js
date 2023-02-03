//redux toolkit

import { configureStore, createSlice } from "@reduxjs/toolkit";
const inetialState = { value: { username: "" } };
const userSlice = createSlice({
  name: "user",
  initialState: inetialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    },
    logout: (state) => {
      state.value = inetialState.value;
      console.log(state.value);
    },
  },
});

export const { login, logout } = userSlice.actions;
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: localStorage.getItem("username"),
  email: localStorage.getItem("email"),

  token: localStorage.getItem("token"),
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      const { username, email, token } = action.payload;
      state.username = username;
      state.email = email;
      state.token = token;
    },
    clearAuthData: (state) => {
      state.username = "";
      state.email = "";
      state.token = "";
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;

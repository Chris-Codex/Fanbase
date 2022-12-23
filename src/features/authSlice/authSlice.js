import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  users: JSON.parse(localStorage.getItem("authReg")) || [],
  loggedInUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  token: "",
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    loginUser: (state, action) => {
      const userData = action.payload;
      const saveState = JSON.stringify(userData);
      state.loggedInUser = userData;
      localStorage.setItem("currentUser", saveState);
    },

    addUser: (state, action) => {
      const saveState = JSON.stringify([...state.users, action.payload]);
      sessionStorage.setItem("authReg", saveState);
      state.users = [...state.users, action.payload];
    },

    registerUser: (state, action) => {
      console.log("Register Action", action);
      const saveState = JSON.stringify([...state.users, action.payload]);
      localStorage.setItem("authReg", saveState);
      state.users = [...state.users, action.payload];
    },

    logout: (state) => {
      //   state.loggedInUser = null;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { addToken, loginUser, registerUser, logout } = authSlice.actions;
export default authSlice.reducer;

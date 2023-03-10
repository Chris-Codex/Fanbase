import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("authReg")) || [],
  loggedInUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  loading: false,
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
      const saveState = JSON.stringify([...state.users, action.payload]);
      localStorage.setItem("authReg", saveState);
      state.users = [...state.users, action.payload];
    },

    logout: (state) => {
      localStorage.removeItem("currentUser");
    },
  },
});

export const { addToken, loginUser, registerUser, logout } = authSlice.actions;
export default authSlice.reducer;

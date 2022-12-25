import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postData: JSON.parse(localStorage.getItem("posted")) || [],
  filteredPost: JSON.parse(localStorage.getItem("filterpost")) || [],
};

const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    addPost: (state, action) => {
      const saveState = JSON.stringify([...state.postData, action.payload]);
      localStorage.setItem("posted", saveState);
      state.postData = [...state.postData, action.payload];
    },

    editPost: (state, action) => {
      console.log("Action Edited dispatched", action);
      const { id, title, email, image, category, description } = action.payload;
      const existingPost = state.postData.find(
        (postlist) => postlist.id === id
      );
      if (existingPost) {
        existingPost.title = title;
        existingPost.email = email;
        existingPost.image = image;
        existingPost.category = category;
        existingPost.description = description;
      }

      const saveState = JSON.stringify([...state.postData]);
      localStorage.setItem("posted", saveState);
    },

    deletePost: (state, action) => {
      const deleteUser = state.postData.filter(
        (userpost) => userpost.id !== action.payload.id
      );
      state.postData = [...deleteUser];
      const saveState = JSON.stringify(deleteUser);
      localStorage.setItem("posted", saveState);
    },

    filterCategories: (state, action) => {
      const filterCatgory = state.postData.filter(
        (cat) => cat.category === action.payload
      );
      state.filteredPost = [...filterCatgory];
      const saveState = JSON.stringify([...filterCatgory]);
      localStorage.setItem("filterpost", saveState);
    },
  },
});

export default postSlice.reducer;
export const { addPost, editPost, deletePost, filterCategories } =
  postSlice.actions;

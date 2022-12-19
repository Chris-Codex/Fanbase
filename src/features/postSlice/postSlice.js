import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postData: JSON.parse(sessionStorage.getItem("posted")) || []
}

const postSlice = createSlice ({
    name: "post",
    initialState,

    reducers: {
        addPost: (state, action) => {
            console.log("Action dispatched", action)
            const saveState = JSON.stringify([...state.postData, action.payload])
            sessionStorage.setItem("posted", saveState)
            state.postData = [...state.postData, action.payload]
        }
    }
})

export default postSlice.reducer
export const { addPost } = postSlice.actions
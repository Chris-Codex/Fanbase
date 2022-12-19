import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: "loader",
    initialState: false,

    reducers: {
        toggleLoading: (state) => !state
    }
})

export const {toggleLoading} = loadingSlice.actions
export default loadingSlice.reducer;

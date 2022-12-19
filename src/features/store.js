import { configureStore } from "@reduxjs/toolkit";
import postReducer from './postSlice/postSlice';
import loadingReducer from './loadingSlice/loadingSlice';


export const store = configureStore ({
    reducer: {
        post: postReducer,
        loading: loadingReducer
    }
})
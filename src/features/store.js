import { configureStore } from "@reduxjs/toolkit";
import postReducer from './postSlice/postSlice';
import loadingReducer from './loadingSlice/loadingSlice';
import authReducer from './authSlice/authSlice';



export const store = configureStore ({
    reducer: {
        post: postReducer,
        loading: loadingReducer,
        auth: authReducer
    }
})
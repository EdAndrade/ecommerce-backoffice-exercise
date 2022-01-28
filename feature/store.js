import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';
import React from "react";

export const store = configureStore({
    reducer: { 
        counter: counterReducer
    }
});
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from "react";

const initialState = {
    value: 10
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        incremented(state){
            state.value++;
        }
    }
})

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;
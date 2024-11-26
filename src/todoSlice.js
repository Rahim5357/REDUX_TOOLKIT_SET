import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todo",
    initialState : {
        value: []
    },
    reducers:{
        todoAdd: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        todoReset: (state) => {
            state.value = [];
        }
    }
});

export const {todoAdd, todoReset} = todoSlice.actions;
export default todoSlice.reducer
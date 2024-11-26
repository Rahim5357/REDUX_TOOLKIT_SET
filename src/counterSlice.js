import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0, // Initial counter value
};

const counterSlice = createSlice({
  name: 'counter', // Name of the slice
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Increment the value
    },
    decrement: (state) => {
      state.value -= 1; // Decrement the value
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // Increment by a specific amount
    },
    resetValue: (state) => {
      state.value = 0;
    }
  },
});

export const { increment, decrement, incrementByAmount, resetValue } = counterSlice.actions;
export default counterSlice.reducer;

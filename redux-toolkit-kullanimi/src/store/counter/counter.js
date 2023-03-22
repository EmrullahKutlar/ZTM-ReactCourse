import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initalState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, incrementByAmount, decrement, decrementByAmount } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;

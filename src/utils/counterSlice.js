import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    incrementCount: (state, action) => {
      state.count = state.count + 1;
    },
    decrementCount: (state, action) => {
      state.count = state.count - 1;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { incrementCount, decrementCount, setCount } =
  counterSlice.actions;
export default counterSlice.reducer;

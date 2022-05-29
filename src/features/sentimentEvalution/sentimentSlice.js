import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  inputs: [],
  step: 0,
  result: [],
};
const sentimentSlice = createSlice({
  name: "sentiment",
  initialState,
  reducers: {
    getDataFetch: (state, action) => {
      state.inputs = action.payload;
    },
    sentimentHandler: (state, action) => {
      ++state.step;
      state.result = state.result.concat({
        input: state.inputs[state.step],
        userValue: action.payload,
      });
    },
    previousHandler: (state, action) => {
      --state.step;
      state.result = state.result.concat({
        input: state.inputs[state.step],
        userValue: action.payload,
      });
    },
  },
});

export const { previousHandler, sentimentHandler, getDataFetch } =
  sentimentSlice.actions;
export default sentimentSlice.reducer;

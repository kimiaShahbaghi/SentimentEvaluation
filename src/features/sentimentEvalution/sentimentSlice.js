import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  input: [],
  result: [],
  isLoading: false,
};
const sentimentSlice = createSlice({
  name: "sentiment",
  initialState,
  reducers: {
    getDataFetch: (state, action) => {
      state.input = action.payload;
      state.isLoading = false;
    },
    sentimentHandler: (state, action) => {
      state.result = {
        input: state.input,
        userValue: action.payload,
      };
      state.input = [];
      state.isLoading = true;
    },

    postDataFetch: (state, action) => {
      state.isLoading = action.payload;

      state.result = [];
    },
  },
});

export const result = (state) => state.sentimentReducer.result;
export const Loading = (state) => state.sentimentReducer.isLoading;
export const stateData = (state) => state.sentimentReducer.input;

export const {
  previousHandler,
  sentimentHandler,
  getDataFetch,
  postDataFetch,
} = sentimentSlice.actions;
export default sentimentSlice.reducer;

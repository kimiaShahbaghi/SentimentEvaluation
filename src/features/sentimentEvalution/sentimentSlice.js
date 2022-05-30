import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  input: [],
  step: 0,
  result: [],
  isLoading: false,
};
const sentimentSlice = createSlice({
  name: "sentiment",
  initialState,
  reducers: {
    getDataFetch: (state, action) => {
      state.input = action.payload;
    },
    sentimentHandler: (state, action) => {
      state.step++;
      state.result = {
        input: state.input,
        userValue: action.payload,
      };
      state.input = [];
    },
    previousHandler: (state, action) => {
      state.step--;
      state.result = state.result.concat({
        input: state.input,
        userValue: action.payload,
      });
      state.input = [];
    },
    // setIsLoading: (state, action) => {
    //   state.isLoading = action.payload;
    // },
  },
});

// export const { result } = initialState.result;
export const {
  previousHandler,
  sentimentHandler,
  getDataFetch,
  getRandomInput,
} = sentimentSlice.actions;
export default sentimentSlice.reducer;

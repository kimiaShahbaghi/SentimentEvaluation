import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: [
    {
      id: 0,
      text: "it does not smell at all like lavender nor vanilla",
      userValue: undefined,
    },
    {
      id: 1,
      text: "you'll always lose more than you win",
      userValue: undefined,
    },
    { id: 2, text: "no add effect that's very good app", userValue: undefined },
    {
      id: 3,
      text: "she sure has her hands full this Christmas",
      userValue: undefined,
    },
    {
      id: 4,
      text: "why do u need to give credit card details if its supposedly FREE?",
      userValue: undefined,
    },
    {
      id: 5,
      text: "Been collecting these since the start of this series, just loved them and i set up 'snoopy land' each year on my bookshelf",
      userValue: undefined,
    },
  ],
  step: 0,
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    happyHandler: (state) => {
      state.text[state.step].userValue = "happy";
      if (state.step < 5) {
        ++state.step;
      }
    },
    sadHandler: (state) => {
      state.text[state.step].userValue = "sad";
      if (state.step < 5) {
        ++state.step;
      }
    },
    pokerHandler: (state) => {
      state.text[state.step].userValue = "poker";
      if (state.step < 5) {
        ++state.step;
      }
    },
    skip: (state) => {
      ++state.step;
    },
    previous: (state) => {
      --state.step;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pokerHandler, happyHandler, sadHandler, skip, previous } =
  textSlice.actions;

export default textSlice.reducer;

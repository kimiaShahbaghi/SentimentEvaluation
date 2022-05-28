const sentimentReducer = (
  state = {
    inputs: [],
    step: 0,
    result: [],
  },
  action
) => {
  switch (action.type) {
    case "GET_USERS_SUCCESS":
      return { ...state, inputs: action.users };

    case "PREVIOUS_HANDLER":
      return {
        ...state,
        step: --state.step,
        result: state.result.concat({
          input: state.inputs[state.step],
          userValue: -1,
        }),
      };
    case "SENTIMENT_HANDLER":
      return {
        ...state,
        step: ++state.step,
        result: state.result.concat({
          input: state.inputs[state.step],
          userValue: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default sentimentReducer;

const sentimentReducer = (
  state = {
    users: [],
    step: 0,
    result: [],
  },
  action
) => {
  switch (action.type) {
    case "GET_USERS_SUCCESS":
      return { ...state, users: action.users };

    case "PREVIOUS_HANDLER":
      return {
        ...state,
        step: --state.step,
        result: state.result.concat({
          input: state.users[state.step],
          userValue: -1,
        }),
      };
    case "USER_HANDLER":
      return {
        ...state,
        step: ++state.step,
        result: state.result.concat({
          input: state.users[state.step],
          userValue: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default sentimentReducer;

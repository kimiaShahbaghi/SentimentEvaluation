import { GET_USERS_SUCCESS, NEXT_HANDLER, PREVIOUS_HANDLER } from "./actions";
const myReducer = (state = { users: [], step: 0 }, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.users };
    case NEXT_HANDLER:
      return { ...state, step: ++state.step };
    case PREVIOUS_HANDLER:
      return { ...state, step: --state.step };
    default:
      return state;
  }
};

export default myReducer;

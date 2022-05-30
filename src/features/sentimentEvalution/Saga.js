import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUsers, postUsers } from "./api";
import { getDataFetch } from "./sentimentSlice";
import { GET_USERS_FETCH } from "./actions";

function* workGetUsersFetch() {
  const inputs = yield call(fetchUsers);
  yield put(getDataFetch(inputs));
  console.log("from saga", inputs);
}

// function* postUsersFetch() {
//   const inputs = yield call(postUsers);
//   yield put(getDataFetch(inputs));

//   console.log("from saga", inputs);
// }

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
  // yield takeEvery("POST_USER", postUsersFetch);
}

export default mySaga;

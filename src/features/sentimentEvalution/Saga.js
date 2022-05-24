import { call, put, take, takeEvery } from "redux-saga/effects";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./actions";
import { fetchUsers } from "./api";

function* workGetUsersFetch() {
  const users = yield call(fetchUsers);
  yield put({ type: GET_USERS_SUCCESS, users });
}

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}

export default mySaga;

import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUsers } from "./api";
import { getDataFetch } from "./sentimentSlice";
import { GET_USERS_FETCH } from "./actions";

function* workGetUsersFetch() {
  const inputs = yield call(fetchUsers);
  yield put(getDataFetch(inputs));
}

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}

export default mySaga;

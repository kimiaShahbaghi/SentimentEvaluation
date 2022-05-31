//#TODO handle dispatch order
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchUsers, PostUserData } from "./api";
import { getDataFetch, postDataFetch } from "./sentimentSlice";
import { GET_USERS_FETCH, POST_DATA } from "./actions";

function* GetUsersFetch() {
  const inputs = yield call(fetchUsers);
  yield put(getDataFetch(inputs));
}

function* postUsersFetch() {
  const inputs = yield call(PostUserData);

  if (inputs === 200) {
    yield put(postDataFetch(false));
    console.log("success");
  } else {
    yield put(postDataFetch(true));
  }
}

function* mySaga() {
  yield takeLatest(POST_DATA, postUsersFetch);
  yield takeEvery(GET_USERS_FETCH, GetUsersFetch);
}

export default mySaga;

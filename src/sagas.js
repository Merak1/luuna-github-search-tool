import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  REQUEST_USER,
  REQUEST_REPO,
  receiveUser,
  receiveRepo
} from "./actions";

function* getGithubUserData({ payload }) {
  try {
    const getUser = async () => {
      const res = await axios.get(`https://api.github.com/users/${payload}`);
      const data = await res.data;
      return data;
    };
    const data = yield call(getUser);
    yield put(receiveUser(data));
  } catch (e) {
    console.log("catch from saga", e);
  }
}
function* getGithubRepoData({ payload }) {
  try {
    const getRepo = async () => {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=${payload}+language:all&sort=stars&order=desc&page=1&per_page=10`
      );
      console.log(res);
      const data = await res.data.items;
      return data;
    };
    const data = yield call(getRepo);
    yield put(receiveRepo(data));
  } catch (e) {
    console.log("catch from saga", e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_USER, getGithubUserData);
  yield takeLatest(REQUEST_REPO, getGithubRepoData);
}

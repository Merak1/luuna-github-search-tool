import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  REQUEST_USER,
  REQUEST_REPO,
  REQUEST_USER_FOLLOWERS,
  receiveUser,
  receiveUserFollowers,
  receiveRepo
} from "./actions";

function* getGithubUserData(action) {
  try {
    const user = action.payload;
    const getUser = async () => {
      const res = await axios.get(`https://api.github.com/users/${user}`);
      const data = await res.data;
      return data;
    };
    const data = yield call(getUser);
    yield put(receiveUser(data));
  } catch (e) {
    console.log("catch from saga", e);
  }
}
function* getGithubRepoData(action) {
  try {
    const repo = action.payload;
    const getRepo = async () => {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=${repo}+language:all&sort=stars&order=desc`
      );
      //? con la opción de buscar por lenguaje
      //?  const res = await axios.get(`https://api.github.com/search/repositories?q=${repo}+language:javascript&sort=stars&order=desc`);
      const data = await res.data.items;
      return data;
    };
    const data = yield call(getRepo);
    yield put(receiveRepo(data));
  } catch (e) {
    console.log("catch from saga", e);
  }
}
function* getUserFollowers(action) {
  try {
    const User = action.payload;
    const getFollowers = async () => {
      const res = await axios.get(
        `https://api.github.com/users/${User}/followers`
      );
      const data = await res.data;
      // console.log(data, "DAATA");
      return data;
    };
    const data = yield call(getFollowers);
    yield put(receiveUserFollowers(data));
  } catch (e) {
    console.log("catch from saga", e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_USER, getGithubUserData);
  yield takeLatest(REQUEST_USER_FOLLOWERS, getUserFollowers);

  yield takeLatest(REQUEST_REPO, getGithubRepoData);
}

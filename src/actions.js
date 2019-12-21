//* User constant
export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const REQUEST_USER_FOLLOWERS = "REQUEST_USER_FOLLOWERS";
export const RECEIVE_USER_FOLLOWERS = "RECEIVE_USER_FOLLOWERS";
//* Repo constant
export const REQUEST_REPO = "REQUEST_REPO";
export const RECEIVE_REPO = "RECEIVE_REPO";

//* User actions
export const requestUser = payload => ({
  type: REQUEST_USER,
  payload: payload
});
export const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload: payload
});
export const requestUserFollowers = payload => ({
  type: REQUEST_USER_FOLLOWERS,
  payload: payload
});
export const receiveUserFollowers = payload => ({
  type: RECEIVE_USER_FOLLOWERS,
  payload: payload
});
//* Repo actions

export const requestRepo = payload => ({
  type: REQUEST_REPO,
  payload: payload
});
export const receiveRepo = payload => ({
  type: RECEIVE_REPO,
  payload: payload
});

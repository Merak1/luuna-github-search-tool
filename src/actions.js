//* User constant
export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";
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

//* Repo actions

export const requestRepo = payload => ({
  type: REQUEST_REPO,
  payload: payload
});
export const receiveRepo = payload => ({
  type: RECEIVE_REPO,
  payload: payload
});

import { RECEIVE_USER_FOLLOWERS } from "../actions";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case RECEIVE_USER_FOLLOWERS:
      return payload;
    default:
      return state;
  }
};

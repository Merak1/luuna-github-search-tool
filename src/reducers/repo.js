import { RECEIVE_REPO } from "../actions";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case RECEIVE_REPO:
      return payload;
    default:
      return state;
  }
};

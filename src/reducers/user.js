import { RECEIVE_USER } from "../actions";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case RECEIVE_USER:
      return payload;
    default:
      return state;
  }
};

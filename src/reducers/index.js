import { combineReducers } from "redux";

import user from "./user";
import repo from "./repo";
import userFollowers from "./userFollowers";

export default combineReducers({
  user,
  userFollowers,
  repo
});

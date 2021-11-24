import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import users from "./users";

// const reducer = combineReducers({
//   users,
// });

const reducer = (state:any, action:any) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers({ users })(state, action);
};

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;

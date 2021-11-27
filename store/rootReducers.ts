import { combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from "next-redux-wrapper";

import users from "./users";
// import feedList from "./feedList";
import {feedListApi} from "./feedList";

// const reducer = combineReducers({
//   users,
// });

// const reducer = (state:any, action:any) => {
//   if (action.type === HYDRATE) {
//     return { ...state, ...action.payload };
//   // }
//   return combineReducers({ users,feedList })(state, action);
// };

// export type ReducerType = ReturnType<typeof reducer>;
// export default reducer;

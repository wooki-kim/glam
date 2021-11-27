import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
// import reducer from "./rootReducers";
import logger from "redux-logger";
import {feedListApi} from "./feedList";

const middleware = [...getDefaultMiddleware(),logger];

const store = () => configureStore({
  reducer: {
    [feedListApi.reducerPath]: feedListApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(feedListApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});


//export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper(store,{
  debug: process.env.NODE_ENV !== "production"
})



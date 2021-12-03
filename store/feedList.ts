import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFeedList, IProfile } from "../types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const Profile: IProfile = {
//   profileIdx: 1,
//   photo: [
//     "https://img.etoday.co.kr/pto_db/2017/11/20171107104017_1147769_600_600.jpg",
//   ],
//   nickName: "ricky",
//   birthday: new Date("1986-08-16"),
// };
// export const FeedList = createSlice({
//   name: "feedList",
//   initialState: [Profile],
//   reducers: {
//     addFeed(state, action: PayloadAction<IProfile>) {
//       return [...state, action.payload];
//     },
//   },
// });

// export const { addFeed } = FeedList.actions;
// export default FeedList.reducer;

export const feedListApi = createApi({
  reducerPath: "feedListApi",
  tagTypes:['Feed'],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (build) => ({
    getFeedList: build.query<IProfile[], string>({
      query: (id) => `/feedList/${id}`,
      //providesTags: (result)=> result? [...result.map(())]:[{type:'Feed',id:'LIST'}]
    }),
  }),
});

export const { useGetFeedListQuery } = feedListApi;

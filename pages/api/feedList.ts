import type { NextApiRequest, NextApiResponse } from "next";
import type { IProfile, IFeedList } from "../../types";
const handeler = (req: NextApiRequest, res: NextApiResponse<IProfile[]>) => {
  const Profile: IProfile = {
    profileIdx: 1,
    photo: [
      "https://img.etoday.co.kr/pto_db/2017/11/20171107104017_1147769_600_600.jpg",
    ],
    nickName: "ricky",
    birthday: new Date("1986-08-16"),
    bio:"집사야 좋은말 할때 열어라"
  };
  const dummy = new Array(10).fill(Profile);
  const feedList: IProfile[] = dummy; //new Array(100).fill(Profile),
  res.status(200).json(feedList);
};
export default handeler;

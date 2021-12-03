import type { NextApiRequest, NextApiResponse } from "next";
import type { IProfile, IFeedList } from "../../types";
import Profile from "../../data/feeds";
const handeler = (req: NextApiRequest, res: NextApiResponse<IProfile[]>) => {
  const dummy = new Array(10).fill(Profile);
  const feedList: IProfile[] = dummy.map((item, key) => ({
    ...item,
    profileIdx: key + 1,
  })); //new Array(100).fill(Profile),
  console.log(req.query);
  res.status(200).json(feedList);
};
export default handeler;

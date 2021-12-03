import type { NextApiRequest, NextApiResponse } from "next";
import type { IProfile, IFeedList } from "../../../types";
import Profile from "../../../data/feeds";
export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;
  console.log(req.query);
  switch (method) {
    case "GET":
      // Get data from your database
      const dummy = new Array(100).fill(Profile);
      const feedList: IProfile[] = dummy.map((item, key) => ({
        ...item,
        profileIdx: key + 1,
      }));
      const page = Number(req.query.id);
      const MAX = 10;
      const result = feedList.slice((page * MAX)- MAX, page * MAX);
      console.log(req.query.id);
      res.status(200).json(result);
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

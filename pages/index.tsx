import type { NextPage, GetStaticProps } from "next";
// import { useDispatch, useSelector } from "react-redux";
// import { ReducerType } from "../store/rootReducers";
// import { User, addUser } from "../store/users";
import React, {
  FormEvent,
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import Head from "next/head";
import { Feed } from "../components";
import { Main } from "../styles/common";
import { IFeedList, IProfile } from "../types";

interface IProps {
  data: {
    feedList: IFeedList;
  };
}

const Home = ({ data }: IProps) => {
  // const users = useSelector<ReducerType, User[]>((state) => state.users);
  // const dispatch = useDispatch();
  const [name, setName] = useState("");
  const nameInput = useRef<any>(null);

  // const handleChangeName = (e: any) => {
  //   setName(e.target.value);
  // };
  // const handleAddUser = (e: FormEvent) => {
  //   e.preventDefault();
  //   dispatch(addUser({ name } as User));
  //   setName("");
  //   nameInput.current.focus();
  // };
  // console.log("data", data.feedList);
  const [screen, setScreen] = useState(true);
  return (
    <>
      <Head>
        <title>야옹히어로</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {/* <form onSubmit={handleAddUser}>
          <input
            type="text"
            ref={nameInput}
            value={name}
            onChange={handleChangeName}
          />
          <button type="submit">Add User</button>
        </form>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))} */}

        <Feed />
      </Main>
    </>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch(`http://localhost:3000/api/feedList`);
//   const data = await res.json();
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// };

export default Home;

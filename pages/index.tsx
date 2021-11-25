import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../store/rootReducers";
import { User, addUser } from "../store/users";
import React, { FormEvent, useState, useRef, useLayoutEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import { Glam, Profile, Navigation } from "../components";

const Home: NextPage = () => {
  const users = useSelector<ReducerType, User[]>((state) => state.users);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const nameInput = useRef<any>(null);

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };
  const handleAddUser = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addUser({ name } as User));
    setName("");
    nameInput.current.focus();
  };
  const [screen,setScreen] = useState(true);

  return (
    <>
      <Head>
        <title>글램</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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

        <Glam show={!screen}/>
        <Profile show={screen}/>
        <Navigation selectScreen={setScreen} screen = {screen}/>
      </main>
    </>
  );
};

export default Home;

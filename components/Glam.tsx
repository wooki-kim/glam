import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Feed } from ".";
import { Container } from "../styles/common";
import { IScreen, IFeedList, IProfile } from "../types";
import { GetServerSideProps } from "next";

interface Props {
  feedList: IFeedList;
}

const Glam = () => {
  return (
    <Container>
      <Feed />
    </Container>
  );
};

export default Glam;

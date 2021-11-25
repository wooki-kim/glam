import React from "react";
import styled from "styled-components";
import { Feed } from ".";
import { Container } from "../styles/common";
import { IScreen } from "../types";

export const Glam = (props:IScreen) => {
  return (
    <Container show={props.show}>
      <Feed />
    </Container>
  );
};

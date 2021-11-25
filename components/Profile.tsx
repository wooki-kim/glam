import styled from "styled-components";
import { Container } from "../styles/common";
import { IScreen } from "../types";

export const Profile = (props: IScreen) => {
  return <Container show={props.show}>프로필 수정</Container>;
};

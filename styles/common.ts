import styled from "styled-components";

export const Container = styled.section<{ show: Boolean }>`
  width: 100%;
  height: calc(100vh - 50px);
  position: fixed;
  top:0;
  left:0;
  display: ${(props) => (props.show ? "block" : "none")};
  background: #adadad;
`;

import { HookCallbacks } from "async_hooks";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  bottom:0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  flex-wrap: nowrap;
  background: #fff;

`;
const Tab = styled.button`
  flex: 1;
  flex-grow: 1;
  :hover{
    transition: 0.2s all;
    background: rgba(0,0,0,0.2)
  }
`;

interface INav {
  selectScreen: React.Dispatch<React.SetStateAction<boolean>>;
  screen: Boolean;
}
export const Navigation = (props:INav) =>{
  return(
    <Nav>
      <Tab onClick={()=>props.selectScreen(true)}>glam</Tab>
      <Tab onClick={()=>props.selectScreen(false)}>Profile</Tab>
    </Nav>
  )
}
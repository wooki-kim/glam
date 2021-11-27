import { GetServerSideProps, GetStaticProps } from "next";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import type { IFeedList, IProfile } from "../types";
import { useGetFeedListQuery } from "../store/feedList";
const FeedContianer = styled.li`
  width: 100%;
  height: calc(100vh - 50px);
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
  padding: 5px;
`;
const FeedContent = styled.figure<{ photo: string | undefined }>`
  width: 100%;
  height: 100%;
  background: url("${(props) => props.photo}") no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  line-height: 120%;
  color: #fff;
  position: relative;

  figcaption {
    display: block;
    position: absolute;
    bottom:70px;
    left:10px;
    z-index:10;
  }
  :after{
    content:"";
    position: absolute;
    background:linear-gradient(to top, black, 10%, transparent);
    width:100%;
    height:100%;
    left:0;
    top:0;
    border-radius: 10px;
  }
`;
const ImageNavigationButton = styled.button`
  width: 50%;
  height: 100%;
  opacity: 0.2;
`;
const PrevButton = styled.button`
  ${ImageNavigationButton}
  background: red;
`;

const NextButton = styled.button`
  ${ImageNavigationButton}
  background: blue;
`;
const FunctionContainer = styled.section`
  position:absolute;
  left:10px;
  bottom:20px;
  z-index:10;
  width:100%;
  display: flex;
  flex-direction:row;
`;
const ExitButton = styled.button`
  content: "X";
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  width: 40px;
  height:40px;
  box-sizing:border-box;
  display: inline-block;
  background: rgba(102,102,102);
  font-weight: bold;
  margin-right: 5px;
`;
const LikeButton = styled.button`
  width: 80%;
  display: inline-block;
  background:rgba(95,154,246);
  height:40px;
  color: #fff;
`;
const ChatButton = styled(LikeButton)`
  width: 50px;
  height: 40px;
  display: inline-block;
  margin-left: 5px;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  line-height: 180%;

`;
const Bio = styled.p`
  font-size: 12px;
`;
const Etc = styled.ul`
  li {
    display: inline-block;
    color: rgba(240, 240, 240, 0.8);
    font-size: 10px;
    padding-right: 5px;
    background:rgba(0,0,0,0.2);
    border-radius: 3px;
    padding:0px 6px;
    margin-right: 5px;
  }
`;

const Label = styled.span`
  display: inline-block;
  padding: 0px 5px;
  background: rgba(230, 230, 230, 0.5);
  font-size: 9px;
  box-sizing: border-box;
  border-radius: 3px;
  color: rgba(240,240,240,0.9);
`;

const today = new Date();
const getBirthDay = (birthDay: Date) => {
  const birthDate = new Date(birthDay);
  return today.getFullYear() - birthDate.getFullYear() + 1;
};

const Feed = () => {
  const { data, error, isLoading } = useGetFeedListQuery("");
  return (
    <ul>
      {isLoading && data === undefined ? (
        <li>로딩중</li>
      ) : (
        data?.map((item, key) => (
          <FeedContianer key={key}>
            <FeedContent photo={item.photo[0]}>
              <figcaption>
                <Label>실시간</Label>
                <p>
                  {item.nickName}, {getBirthDay(item.birthday)}
                  <i />
                </p>
                <Bio>{item.bio}</Bio>
                <Etc>
                  <li>커피</li>
                  <li>스포츠/운동</li>
                  <li>술</li>
                </Etc>
              </figcaption>
            </FeedContent>
            <FunctionContainer>
              <ExitButton onClick={()=>alert("닫기")}>X</ExitButton>
              <LikeButton onClick={()=>alert("좋아요")}>좋아요</LikeButton>
              <ChatButton onClick={()=>alert("채팅모달")}>*</ChatButton>
            </FunctionContainer>
          </FeedContianer>
        ))
      )}
    </ul>
  );
};

export default Feed;

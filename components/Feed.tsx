import React from "react";
import styled from "styled-components";

const FeedContianer = styled.li`
  width: 100%;
  height: 80vh;
  box-sizing:border-box;
  border-radius: 10px;
  position: relative;
  background:url(${props=>props.profileImg===""?"":props=>props.profileImg}) no-repeat;
  background-size: contain;
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

const ExitButton = styled.button`
  content: "X";
  color: #fff;
  padding: 5px;
  border-radius: 3px;
`;

export const Feed = () => {
  const dummy = {
    profileImg: "https://img.etoday.co.kr/pto_db/2017/11/20171107104017_1147769_600_600.jpg"
  }
  return (
    <FeedContianer profileImg={dummy.profileImg}>
      <figure>
        <ul>
          <li>
            <button></button>
          </li>
        </ul>
        <figcaption>
          <span>오늘의 추천</span>
          <span>
            하양이,37
            <i />
          </span>
          <ul>
            <li>커피</li>
            <li>스포츠/운동</li>
            <li>술</li>
          </ul>
        </figcaption>
      </figure>
      <PrevButton />
      <NextButton />
    </FeedContianer>
  );
};

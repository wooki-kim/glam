import {IProfile,IPhoto} from "../types";

const DummyPhoto:IPhoto = {
  idx : 1,
  url : "https://loma.kr/wp-content/uploads/2021/09/8a257882-ae3b-462d-91c4-fb96eadc8112.jpg"
};

export const MyProfile:IProfile = {
  profileIdx: 1,
  photo: [DummyPhoto],
  nickName: "ricky",
  birthday: new Date('1986-08-16'),
  location: "서울특별시 양천구",
  height: 171,
  bodyType: 1,
  work: "큐피스트",
  office: "강남구",
  job: "프론트엔드 개발자",
  education: "대학교",
  school: "성공회대학교",
  character: ["솔직함","다정한"],
  religion: 1,
  smoking: 1,
  drinking: 1,
  race: ["한국인"],
  appeal: ["매력1","매력2"],
  interest: ["요리","커피","여행"],
  bio: `자기소개1
        자기소개2
        자기소개3`,
}
export interface IStatusTag {
  idx: number;
  name: string;
}

export interface IPhoto {
  idx: number;
  url : string;
}

// export interface IFeed extends IProfile{  
//   feedIdx: number;
// }
export interface IFeedList {
  feedList: IProfile[];
}

export interface IProfile {
  profileIdx: number;
  photo?: IPhoto[];
  nickName: string;
  birthday: Date;
  location?: string;
  height?: number;
  bodyType?: number;
  work?: string;
  office?: string;
  job?: string;
  education?: string;
  school?: string;
  character?: string[];
  religion?: number;
  smoking?: number;
  drinking?: number;
  race?: string[];
  appeal?: string[];
  interest?: string[];
  bio?: string;
}

export interface ISingleTextModifyModal {
  content: string;
}

export interface IContentsModifyModal {
  content: string;
}

export interface ITag {
  idx: number;
  content: string;
}

export interface ITagListModal {
  tagList: ITag[];
}

export interface ICheckBox {
  idx: number;
  label: string;
}

export interface ICheckboxListModal {
  itemList:  ICheckBox[];
  checkLimit: number;
}

export interface IModal {
  open: boolean;
  contentsType: number;
}
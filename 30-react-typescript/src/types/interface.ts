export interface TodoItemInteface {
  id: number;
  text: string;
  done: boolean;
}

export interface PostItemInterface{
  userid: number;
  id: number;
  title: string;
  body: string;
}

export interface MatzipInterface{
  idx?: number;
  imgSrc: string;
  title: string;
  desc: string;
}
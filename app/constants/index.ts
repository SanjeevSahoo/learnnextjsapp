import IUser from "../types/IUser";

const API_BASE_URL = process.env.NODE_API_BASE_URL;

const users: IUser[] = [
  {
    id: "1",
    username: "sanjeev",
    dispname: "Sanjeev Sahoo",
  },
  {
    id: "2",
    username: "krishna",
    dispname: "Krishna Singh",
  },
];

const posts: IPost[] = [
  {
    id: "1",
    userId: "1",
    postDesc: "this is the first post for the tesitng of suspsense",
  },
  {
    id: "2",
    userId: "1",
    postDesc:
      "this is the first post for the tesitng of suspsense , but for second line ",
  },
  {
    id: "3",
    userId: "1",
    postDesc:
      "this is the first post for the tesitng of suspsense, this sis teh thirs one but shorted",
  },
  {
    id: "4",
    userId: "1",
    postDesc: "this is the first post for the tesi, new post",
  },
  {
    id: "5",
    userId: "2",
    postDesc: "for second eprson post",
  },
];

export { API_BASE_URL, users, posts };

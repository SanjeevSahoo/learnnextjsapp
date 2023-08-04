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

export { users, API_BASE_URL };

import { TEAM, PART } from "../assets/constants";

type TEAM = (typeof TEAM)[keyof typeof TEAM];
type PART = (typeof PART)[keyof typeof PART];

interface IFormInput {
  name: String;
  user_id: String;
  password: String;
  pwConfirm: String;
  email: String;
  team: TEAM;
  part: PART;
}

interface ILoginFormInput {
  id: String;
  pw: String;
}


export interface IPersonalInfo {
  data: {
    id: number;
    name: string;
    part: string;
    team: string;
  };
}



export interface UserType {
  user_id: String;
  team: String;
  part: String;
  name: String;
}

export { TEAM, PART, type IFormInput, type ILoginFormInput };
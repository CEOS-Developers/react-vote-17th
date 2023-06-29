/* eslint-disable @typescript-eslint/no-redeclare */

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
  user_id: String;
  name: String;
  part: String;
  team: String;
}
export interface IPersonProps {
  data: IPersonalInfo;
}

export interface UserType {
  user_id: String;
  team: String;
  part: String;
  name: String;
}

export { TEAM, PART, type IFormInput, type ILoginFormInput };

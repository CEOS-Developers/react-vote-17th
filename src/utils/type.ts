import { TEAM, PART } from "../assets/constants";

type TEAM = (typeof TEAM)[keyof typeof TEAM];
type PART = (typeof PART)[keyof typeof PART];

interface IFormInput {
  name: String;
  id: String;
  pw: String;
  pwConfirm: String;
  email: String;
  team: TEAM;
  part: PART;
}

interface ILoginFormInput {
  id: String;
  pw: String;
}

interface IPersonalInfo {
  data: {
    id: number;
    name: string;
    part: string;
    team: string;
  };
}

export {
  TEAM,
  PART,
  type IFormInput,
  type ILoginFormInput,
  type IPersonalInfo,
};

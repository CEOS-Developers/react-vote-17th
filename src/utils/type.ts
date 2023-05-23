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

export { TEAM, PART, type IFormInput, type ILoginFormInput };

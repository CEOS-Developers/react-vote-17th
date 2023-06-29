const TEAM = {
  RePick: "RePick",
  BariBari: "BariBari",
  Hooking: "Hooking",
  Dansupport: "Dansupport",
  TherapEase: "TherapEase",
} as const;

const Z_INDEX_HEADER = 100;
const HEADER_HEIGHT = "6.5rem";

const PART = {
  Frontend: "front",
  Backend: "back",
} as const;

const nameRegEx = /^[가-힣]+$/;
const idRegEx = /^[a-zA-Z0-9_]{4,16}$/;

// 적어도 하나의 소문자, 대문자, 숫자, 특수문자 포함, 최소 8자 이상 ex. Aabb3ccd!ss
const pwRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export {
  HEADER_HEIGHT,
  Z_INDEX_HEADER,
  TEAM,
  PART,
  nameRegEx,
  idRegEx,
  pwRegEx,
  emailRegEx,
};

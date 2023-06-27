import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { UserType } from "./type";

const { persistAtom } = recoilPersist();

export const userInfo = atom<UserType>({
  key: "user",
  default: {
    user_id: "user_id",
    team: "team",
    part: "part",
    name: "name",
  },
  effects_UNSTABLE: [persistAtom],
});

export const islogin = atom({
  key: "islogin",
  default: {
    islogin: false,
  },
  effects_UNSTABLE: [persistAtom],
});

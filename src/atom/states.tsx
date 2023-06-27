'use client';
import {atom} from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

const userInfoState = atom({
  key : 'userInfo',
  default : {
    id : 0,
    part : 0,
    team : 0,
    userName : '',
  },
  effects_UNSTABLE: [persistAtom],
})

export {userInfoState}
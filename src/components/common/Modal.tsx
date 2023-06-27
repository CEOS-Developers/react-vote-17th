import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import {useCookies} from 'react-cookie'
import { logoutUser } from '@/api/requests';
import getAccessToken from '@/util/getAccessToken';
import { userInfoState } from '@/atom/states';
import { useRecoilState } from 'recoil';

function Modal({ clickModal }: any) {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [userInfo , setUserInfo] = useRecoilState(userInfoState);
  let teamName;
  let partName;
  switch (userInfo.team) {
    case 1:
      teamName = 'Repick';
      break;
    case 2:
      teamName = 'Therapease';
      break;
    case 3:
      teamName = 'Dan-support';
      break;
    case 4:
      teamName = 'BariBari';
      break;
    case 5:
      teamName = 'Hooking';
      break;
    default:
      teamName = '';
  }
  switch (userInfo.part) {
    case 1:
      partName = 'BE';
      break;
    case 2:
      partName = 'FE';
      break;
    default:
      partName = '';
  }
  const logoutHandler = async () => {
    let accessToken = await getAccessToken(cookies,setCookie);
    const response = await logoutUser(accessToken);
    if(response.success){
      console.log("TEST");
      removeCookie("refresh");
      removeCookie("access");
      console.log("TEST2");
      alert("로그아웃 되었습니다.");
      router.push("/main");
    }
  };
  return (
    <ModalBox onClick={clickModal}>
      <SearchModalContent onClick={(e) => e.stopPropagation()}>
        <Info>{`${teamName} ${partName}`}</Info>
        <Info>{`${userInfo.userName}`}</Info>
        <ButtonWrapper>
          <Button onClick={logoutHandler}>{'Logout'}</Button>
        </ButtonWrapper>
      </SearchModalContent>
    </ModalBox>
  );
}

export default Modal;

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchModalContent = styled.div`
  padding: 1.5rem 3rem;
  width: 180px;
  height: 150px;
  border: 3px solid #000000;
  display: flex;
  flex-direction: column;
  background-color: #ffe27c;
  justify-content: center;
`;
const Info = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #f5f5f5;
  border-radius: 40px;
  border: 3px solid #000000;
  font-weight: bold;
  font-size: 15px;
  margin-top: 25px;
  padding: 12px 50px 12px 50px;

  &:hover {
    background-color: #ffd954;
    transition: 0.4s;
  }
`;

const ButtonWrapper = styled.div``;

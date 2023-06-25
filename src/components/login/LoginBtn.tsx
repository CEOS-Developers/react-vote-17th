'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

function LoginBtn({ id, password }: { id: string; password: string }) {
  const router = useRouter();
  const loginHandler = () => {
    if (!id || !password) {
      alert('로그인 및 비밀번호를 입력해주세요');
      console.log(process.env.API_URL);
    } else {
      const data = {
        userid: id,
        password: password,
      };
      console.log(JSON.stringify(data));
      fetch(process.env.API_URL + '/api/accounts/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          //회원 정보, 토큰 받아서 처리
          
          console.log(data);
        })
        .catch((error) => {
          // 에러 처리
          router.push('/main');
          console.error(error);
        });
    }
  };
  return <Button onClick={loginHandler}>Login</Button>;
}

export default LoginBtn;

const Button = styled.div`
  display: flex;
  background-color: #000000;
  width: 250px;
  height: 50px;
  margin-top: 45px;
  box-shadow: 6.5px 6.5px 6px rgba(0, 0, 0, 20%);
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 5px;

  &:hover {
    background-color: #00000008;
    cursor: pointer;
    transition: 0.5s;
    color: #000000;
  }
`;

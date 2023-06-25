'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import arrow from '@/assets/images/arrow.svg';
import Link from 'next/link';
import LoginButton from '@/components/login/LoginBtn';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/api/requests';
import {useCookies} from 'react-cookie';

export default function page() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const isAllFieldsFilled = !!(
    id.trim() && password
  );
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  
  const loginHandler = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!isAllFieldsFilled) {
      alert('로그인 및 비밀번호를 입력해주세요');
    } else {
      const response = await loginUser(id,password);
      if(response.success){ // 로그인 성공
        alert("로그인에 성공하였습니다.");
        const expiresDate1 = new Date();
        expiresDate1.setDate(expiresDate1.getDate() + 1);
        const expiresDate2 = new Date();
        expiresDate2.setTime(expiresDate2.getTime() + 5 * 60 * 1000); // 현재 시간에 5분(5 * 60 * 1000 밀리초)을 더함

        setCookie('refresh',response.data.token.refresh,{expires : expiresDate1});
        setCookie('access',response.data.token.access,{expires : expiresDate2});
        router.push("/vote");
      }
      else{ //로그인 실패
        alert("아이디 혹은 비밀번호가 잘못되었습니다.");
      }
    }
  };
  
  useEffect(() => {
    const checkRefreshCookie = async () => {
      if (cookies.refresh) {
        router.push("/vote");
      }
    };

    checkRefreshCookie();
  }, []);
  return (
    <Container>
      <Head>
        <Link href={'/main'}>
          <Arrow src={arrow.src} />
        </Link>
        <Login>{'Login'}</Login>
      </Head>
      <Info>
        <Input>
          <Title>{'ID'}</Title>
          <Content value={id} onChange={handleIdChange} />
        </Input>
        <Input onSubmit = {loginHandler}>
          <Title>{'Password'}</Title>
          <Content type="password" value={password} onChange={handlePasswordChange} />
        </Input>
        <LoginBtn onClick={loginHandler}>
          <LoginButton isFilled = {!isAllFieldsFilled}/>  
        </LoginBtn>
      </Info>
    </Container>
  );
}

const Container = styled.div``;
const Head = styled.div`
  display: flex;
  margin: 40px 0 0 40px;
`;
const Login = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-left: 82px;
`;
const Arrow = styled.img`
  width: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
const Input = styled.form`
  margin-top: 40px;

  .Team_Part {
    width: 105px;
  }
`;
const Title = styled.div`
  color: #6b6758;
  margin-bottom: 10px;
`;
const Content = styled.input`
  width: 260px;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: solid 2px #6b6758;
  font-size: 18px;
  font-weight: bold;
`;
const LoginBtn = styled.div`
  margin-top: 90px;
`;

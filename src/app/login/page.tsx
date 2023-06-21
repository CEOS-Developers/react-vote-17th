'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import arrow from '@/assets/images/arrow.svg';
import Link from 'next/link';
import Sign_button from '@/components/register/Sign_button';

export default function page() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  console.log("Test");
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
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
        <Input>
          <Title>{'Password'}</Title>
          <Content type="password" value={password} onChange={handlePasswordChange} />
        </Input>
        <LoginBtn>
          <Sign_button id = {id} password = {password}/>  
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

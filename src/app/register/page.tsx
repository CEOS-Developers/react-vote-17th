'use client';
import React from 'react';
import styled from 'styled-components';
import arrow from '@/assets/images/arrow.svg';
import arrows from '@/assets/images/arrows.svg';
import Link from 'next/link';

export default async function page() {
  return (
    <Container>
      <Head>
        <Link href={'/main'}>
          <Arrow src={arrow.src} />
        </Link>
        <Register>{'Register'}</Register>
      </Head>
      <Info>
        <Input>
          <Title>{'Name'}</Title>
          <Content />
        </Input>
        <Input>
          <Title>{'ID'}</Title>
          <Content />
        </Input>
        <Input>
          <Title>{'Password'}</Title>
          <Content type="password" />
        </Input>
        <Input>
          <Title>{'Password Confirm'}</Title>
          <Content type="password" />
        </Input>
        <Input>
          <Title>{'Email'}</Title>
          <Content />
        </Input>
        <Input>
          <Title>{'Team / Part'}</Title>
          <Arrows src={arrows.src} />
          <Content className="Team_Part" />
          <Arrows src={arrows.src} />
          <Content className="Team_Part" />
        </Input>
        <Button
          onClick={() =>
            alert('You have successfully registered as a member!!!')
          }
        >
          <div className="join">{'Sign up'}</div>
        </Button>
      </Info>
    </Container>
  );
}

const Container = styled.div``;
const Head = styled.div`
  display: flex;
  margin: 40px 0 0 40px;
`;
const Register = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-left: 60px;
`;
const Arrow = styled.img`
  width: 20px;
`;
const Arrows = styled.img`
  width: 18px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.form`
  margin-top: 15px;

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
const Button = styled.div`
  display: flex;
  background-color: #000000;
  width: 250px;
  height: 50px;
  margin-top: 45px;
  box-shadow: 6.5px 6.5px 6px rgba(0, 0, 0, 20%);
  border-radius: 50px;

  &:hover {
    background-color: #898987;
  }

  .join {
    color: #ffffff;
    margin: 10px 0 0 95px;
    font-size: 18px;
    text-decoration-line: none;
  }
`;

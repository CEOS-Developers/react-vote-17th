'use client';
import React from 'react';
import styled from 'styled-components';
import vote from '@/assets/images/vote.png';
import Link from 'next/link';

export default async function page() {
  return (
    <Container>
      <Title>{'CEOS \n Election'}</Title>
      <Vote src={vote.src} />
      <Bottom>
        <Link href={'/login'}>
          <Button>
            <div className="join">{'Join us'}</div>
          </Button>
        </Link>
        <Link href={'/register'}>
          <Sign>{'Sign up as a member'}</Sign>
        </Link>
      </Bottom>
    </Container>
  );
}

const Container = styled.div``;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  white-space: pre-line;
  font-size: 40px;
  font-weight: 700;
  text-shadow: 6.5px 6.5px 6px rgba(0, 0, 0, 20%);
  margin: 200px 0 0 150px;
`;
const Vote = styled.img`
  width: 95px;
  height: 95px;
  filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 30%));
  margin: 0 0 0 65px;
`;
const Button = styled.div`
  display: flex;
  background-color: #000000;
  width: 250px;
  height: 50px;
  margin-top: 85px;
  box-shadow: 6.5px 6.5px 6px rgba(0, 0, 0, 20%);
  border-radius: 50px;

  &:hover {
    background-color: #898987;
  }

  .join {
    color: #ffffff;
    margin: 12px 0 0 100px;
    font-size: 18px;
    text-decoration-line: none;
  }
`;
const Sign = styled.div`
  color: #000000;
  text-decoration: underline;
  font-size: 14px;
  margin-top: 8px;
  text-decoration-color: none;
`;

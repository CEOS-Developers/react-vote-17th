'use client';
import React from 'react';
import styled from 'styled-components';
import vote from '@/assets/images/vote.png';
import Link from 'next/link';
import Sign_button from '@/components/common/Sign_button';

export default async function page() {
  return (
    <Container>
      <Title>{'Welcome'}</Title>
      <Middle>
        <User>{'이름'}</User>
        <Vote src={vote.src} />
      </Middle>
      <Bottom>
        <Link href={'/vote'}>
          <Sign_button content={'Start'} />
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
  margin-top: 50px;
`;
const Title = styled.div`
  white-space: pre-line;
  font-size: 40px;
  font-weight: 700;
  text-shadow: 6.5px 6.5px 6px rgba(0, 0, 0, 20%);
  margin: 200px 0 0 60px;
`;
const User = styled.div`
  white-space: pre-line;
  font-size: 40px;
  font-weight: 700;
  text-shadow: 6.5px 6.5px 6px rgba(0, 0, 0, 20%);
  margin-left: 60px;
`;
const Vote = styled.img`
  width: 95px;
  height: 95px;
  filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 80%));
  margin: 30px 0 0 80px;
  opacity: 40%;
`;
const Middle = styled.div`
  display: flex;
`;

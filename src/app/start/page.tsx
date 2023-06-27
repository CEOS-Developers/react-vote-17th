'use client';
import React from 'react';
import styled from 'styled-components';
import vote from '@/assets/images/vote.png';
import Link from 'next/link';
import LinkBtn from '@/components/common/LinkBtn';
import { userInfoState } from '@/atom/states';
import { useRecoilState } from 'recoil';

export default async function page() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  return (
    <Container>
      <Title>{'Welcome'}</Title>
      <Middle>
        <div className="parent">
          <div className="child">
            <User>{`${userInfo.userName}`}</User>
          </div>
        </div>
        <Vote src={vote.src} />
      </Middle>
      <Bottom>
        <Link
          href={'/vote'}
          style={{
            textDecoration: 'none',
          }}
        >
          <LinkBtn content={'Start'} />
        </Link>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  .parent {
    height: 3em;
    overflow-y: hidden;
    display: block;
  }
  .child {
    font-size: 3em;
    font-weight: bold;
    line-height: 1;
    animation-name: grow;
    animation-duration: 1s;
  }

  @keyframes grow {
    from {
      transform: translateY(3em);
    }
    to {
      transform: translateY(0);
    }
  }
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
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
  position: absolute;
  width: 95px;
  height: 95px;
  filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 80%));
  margin: 30px 0 0 230px;
  opacity: 40%;
`;
const Middle = styled.div`
  display: flex;
`;

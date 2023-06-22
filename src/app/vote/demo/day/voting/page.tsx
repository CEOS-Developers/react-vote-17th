'use client';
import React from 'react';
import Title from '@/components/common/Title';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Link from 'next/link';
import BoxEvent from '@/components/vote/BoxEvent';
import Order from '@/components/common/Order';

const Page = () => {
  return (
    <Container>
      <Order order={'2'} />
      <Title content="데모데이 투표" />
      <Line />
      <BoxEvent />
      <Link href={'/vote/demo/day/result'}>
        <div className="btn">
          <ResultBox>{'결과보기'}</ResultBox>
        </div>
      </Link>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn {
    margin-top: 20px;
  }

  @keyframes changeColor {
    from {
      background-color: #d9d9d9;
    }
    to {
      background-color: #ffd954;
    }
  }
`;

const ResultBox = styled.button`
  background-color: #ffd954;
  border-radius: 40px;
  border: 3px solid #000000;
  font-weight: bold;
  font-size: 20px;
  margin-top: 25px;
  padding: 12px 50px 12px 50px;

  animation-name: changeColor;
  animation-duration: 4s;
`;

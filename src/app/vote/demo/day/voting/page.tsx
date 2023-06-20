'use client';
import React from 'react';
import Title from '@/components/common/Title';
import Button from '@/components/vote/Button';
import styled, { keyframes } from 'styled-components';
import Line from '@/components/common/Line';
import Link from 'next/link';
import BoxEvent from '@/components/vote/BoxEvent';

const Page = () => {
  return (
    <Container>
      <Title content="데모데이 투표" />
      <Line />
      <BoxEvent />
      <Link href={'/vote/demo/day/result'}>
        <div className="btn">
          <Button content="결과보기" />
        </div>
      </Link>
    </Container>
  );
}

export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .btn {
    margin-top: 20px;
  }
`;

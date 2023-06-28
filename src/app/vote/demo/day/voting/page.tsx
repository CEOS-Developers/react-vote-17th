'use client';
import React from 'react';
import Title from '@/components/common/Title';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Link from 'next/link';
import BoxEvent from '@/components/vote/BoxEvent';
import Order from '@/components/common/Order';
import ResultBox from '@/components/vote/ResultBox';

const Page = () => {
  return (
    <Container>
      <Order order={'2'} />
      <Title content="데모데이 투표" />
      <Line />
      <BoxEvent />
      <div className="btn">
        <ResultBox content={'/vote/demo/day/result'}/>
      </div>
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
'use client';
import React from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import SelectMenuResult from '@/components/vote/SelectMenuResult';
import Order from '@/components/common/Order';

function page() {
  return (
    <Container>
      <Order order={'1'} />
      <Header content="데모데이 투표" href="/vote" />
      <Line />
      <SelectMenuResult
        content="데모데이 투표"
        href="/vote/demo/day"
        resultHref="/vote/demo/day/result"
      />
    </Container>
  );
}

export default page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .vote {
    margin-top: 30px;
  }
`;

'use client';
import React from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import SelectMenuResult from '@/components/vote/SelectMenuResult';
function page() {
  return (
    <Container>
      <Header content = "데모데이 투표" href = "/vote" />
      <Line />
      <SelectMenuResult content = "데모데이 투표" href = "" />
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
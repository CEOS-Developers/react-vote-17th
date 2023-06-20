'use client';
import React from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import SelectMenuResult from '@/components/vote/SelectMenuResult';

function page() {
  return (
    <Container>
      <Header content="파트장 투표" href="/vote" />
      <Line />
      <SelectMenuResultWrapper>
        <SelectMenuResult
          content="FRONT-END br 파트장 투표"
          href="/vote/part/fe"
          resultHref="/vote/part/fe/result"
        />
        <SelectMenuResult
          content="BACK-END br 파트장 투표"
          href="/vote/part/be"
          resultHref="/vote/part/be/result"
        />
      </SelectMenuResultWrapper>
    </Container>
  );
}

export default page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectMenuResultWrapper = styled.div``;

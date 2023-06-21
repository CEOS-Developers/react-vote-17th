'use client';
import React from 'react';
import styled from 'styled-components';
import Title from '@/components/common/Title';
import Line from '@/components/common/Line';
import SelectMenu from '@/components/vote/SelectMenu';

function vote() {
  return (
    <Container>
      <div className="vote-leader">
        <Title content="파트장 / 데모데이 투표" />
      </div>
      <Line />
      <SelectMenu content="파트장 투표" href="/vote/part" />
      <SelectMenu content="데모데이 투표" href="/vote/demo" />
    </Container>
  );
}

export default vote;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .vote-leader {
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

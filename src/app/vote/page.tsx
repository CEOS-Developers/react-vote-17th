'use client';
import React from 'react';
import styled from 'styled-components';
import Title from '@/components/common/Title';
import Line from '@/components/common/Line';
import Check from '@/components/vote/Check';
import Footer from '@/components/common/Footer';

function vote() {
  return (
    <Container>
      <Title content="파트장 / 데모데이 투표" />
      <Line />
      <VoteForm>
        <VoteName>{'파트장 투표'}</VoteName>
        <Check content="/vote/part" />
      </VoteForm>
      <VoteForm>
        <VoteName>{'데모데이 투표'}</VoteName>
        <Check content="/vote/demo" />
      </VoteForm>
    </Container>
  );
}

export default vote;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const VoteForm = styled.div`
  width: 300px;
  height: 90px;
  background-color: #f5f5f5;
  border: 3px solid #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
`;
const VoteName = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin-left: 40px;
`;

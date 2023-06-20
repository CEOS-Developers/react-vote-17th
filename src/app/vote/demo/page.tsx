'use client';
import React from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Check from '@/components/vote/Check';
import Result from '@/components/vote/Result';
import Header from '@/components/common/Header';
function page() {
  return (
    <Container>
      <Header content = "데모데이 투표" href = "/vote" />
      <Line />
      <VoteForm>
        <VoteName>{'데모데이 투표'}</VoteName>
        <div className="button">
          <Check contnet="/vote"/>
          <Result />
        </div>
      </VoteForm>
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
const Head = styled.div`
  display: flex;
  align-items: center;
`;
const Arrow = styled.img`
  width: 20px;
  margin-top: 30px;
`;
const VoteForm = styled.div`
  width: 300px;
  height: 150px;
  background-color: #f5f5f5;
  border: 3px solid #000000;
  display: flex;
  align-items: center;
  margin-top: 110px;
  .button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const VoteName = styled.div`
  white-space: pre-line;
  font-size: 19px;
  font-weight: bold;
  margin-left: 40px;
`;

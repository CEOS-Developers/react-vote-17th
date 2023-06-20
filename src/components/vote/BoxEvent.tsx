import React from 'react';
import styled from 'styled-components';
import Box from '@/assets/images/ballotBox.svg';
import Paper from '@/assets/images/ballotPaper.svg';
import VotingArrow from '@/assets/images/votingArrow.svg';

function BoxEvent() {
  return (
    <>
      <BallotBoxContainer>
        <BallotPaperAnimation>
          <BallotPaper src={Paper.src} />
        </BallotPaperAnimation>
      </BallotBoxContainer>
      {/* <Arrow src={VotingArrow.src} /> */}
      <BallotBox src={Box.src} />
    </>
  );
}

export default BoxEvent;

const BallotBoxContainer = styled.div`
  position: relative;
  width : 100%;
  margin-top : 50px;
`;

const BallotPaperAnimation = styled.div`
  animation: ballotPaperAnimation 1s ease-in-out forwards;
  position: absolute;
  top: 0;
  left: 45%;

  @keyframes ballotPaperAnimation {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
      opacity : 0;
    }
  }
`;

const BallotPaper = styled.img`
  width: 40px;
  margin-top: 60px;
`;

const Arrow = styled.img`
  width: 15px;
  margin-top: 10px;
`;

const BallotBox = styled.img`
  width: 130px;
  margin-top: 100px;
`;
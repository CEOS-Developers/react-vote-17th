'use client';
import Title from '@/components/common/Title';
import Button from '@/components/vote/Button';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Box from '@/assets/images/ballotBox.svg';
import Paper from '@/assets/images/ballotPaper.svg';
import VotingArrow from '@/assets/images/votingArrow.svg';
import Link from 'next/link';

function page() {
  return (
    <Container>
      <Title content="BE 파트장 투표" />
      <Line />
      <BallotPaper src={Paper.src} />
      <Arrow src={VotingArrow.src} />
      <BallotBox src={Box.src} />
      <Link href={'/vote/part/be/result'}>
        <div className="btn">
          <Button content="결과보기" />
        </div>
      </Link>
    </Container>
  );
}

export default page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .btn {
    margin-top: 20px;
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
  margin-top: 10px;
`;

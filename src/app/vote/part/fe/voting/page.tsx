'use client';
import Title from '@/components/common/Title';
import Button from '@/components/vote/Button';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Link from 'next/link';
import BoxEvent from '@/components/vote/BoxEvent';

function page() {
  return (
    <Container>
      <Title content="FE 파트장 투표" />
      <Line />
      <BoxEvent />
      <Link href={'/vote/part/fe/result'}>
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

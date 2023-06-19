'use client';
import React from 'react';
import styled from 'styled-components';
import Title from '@/components/common/title/Title';
import Line from '@/components/common/line/Line';
import Check from '@/components/common/check/Check';
import Footer from '@/components/common/footer/Footer';
import arrow from '@/assets/images/arrow.svg';
import Link from 'next/link';
import Result from '@/components/common/result/Result';

function page() {
  return (
    <Container>
      <Head>
        <Link href={'/vote'}>
          <Arrow src={arrow.src} />
        </Link>
        <Title content="파트장 투표" />
      </Head>
      <Line />
      <div className="vote">
        <VoteForm>
          <VoteName>{'FRONT-END \n 파트장 투표'}</VoteName>
          <div className="button">
            <Check content="" />
            <Result />
          </div>
        </VoteForm>
        <VoteForm>
          <VoteName>{'BACK-END \n 파트장 투표'}</VoteName>
          <div className="button">
            <Check content="" />
            <Result />
          </div>
        </VoteForm>
      </div>
      <div className="foot">
        <Footer />
      </div>
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

  .foot {
    margin-top: 70px;
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
  margin-top: 30px;
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

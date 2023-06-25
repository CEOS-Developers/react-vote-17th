'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Title from '@/components/common/Title';
import Button from '@/components/vote/Button';
import Link from 'next/link';
import Order from '@/components/common/Order';
import { BsCheckCircle } from 'react-icons/bs';
import Score from '@/components/vote/Score';
import { showFrontResult } from '@/api/requests';

async function page() {
  useEffect(() => {
    const check = async () => {
      const response = await showFrontResult();

      console.log(response);
    };

    check();
  }, []);

  const [selectedLeader, setSelectedLeader] = useState('');

  const [leaders, setLeaders] = useState([
    { key: 1, name: '배성준', team: 'Repick', selected: false, score: 3 },
    { key: 2, name: '이예지', team: 'Repick', selected: false, score: 3 },
    { key: 3, name: '노수진', team: 'Dan-support', selected: false, score: 2 },
    { key: 4, name: '신유진', team: 'Dan-support', selected: false, score: 2 },
    { key: 5, name: '오예린', team: 'BariBari', selected: false, score: 2 },
    { key: 6, name: '최민주', team: 'BariBari', selected: false, score: 2 },
    { key: 7, name: '권가은', team: 'Therapease', selected: false, score: 1 },
    { key: 8, name: '김서연', team: 'Therapease', selected: false, score: 1 },
    { key: 9, name: '김문기', team: 'Hooking', selected: false, score: 1 },
    { key: 10, name: '장효신', team: 'Hooking', selected: false, score: 1 },
  ]);

  //api받는 부분
  // const data = await (await fetch(process.env.API_URL + '/api/polls/part-leader/front-end/')).json();
  // console.log(data);
  return (
    <Container>
      <Order order={'3'} />
      <Title content="FE 파트장 투표 결과" />
      <Line />
      <SelectPersonWrapper>
        {leaders.map(
          (
            leader //score 비교해서 정렬하고 뿌려야할듯
          ) => (
            <FormWrapper key={leader.key}>
              <VoteForm key={leader.key}>
                <VoteTeam>{leader.team}</VoteTeam>
                <VoteName>{leader.name}</VoteName>
              </VoteForm>
              <Check>
                <CoverTeam>
                  <Score score={leader.score} />
                </CoverTeam>
              </Check>
              {leader.selected && (
                <Check>
                  <CoverTeam>
                    <BsCheckCircle className="check" />
                  </CoverTeam>
                </Check>
              )}
            </FormWrapper>
          )
        )}
      </SelectPersonWrapper>
      <LinkWrapper>
        <Link href={'/vote'}>
          <Button content="돌아가기" />
        </Link>
      </LinkWrapper>
    </Container>
  );
}

export default page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectPersonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 280px;
`;
const VoteForm = styled.div`
  width: 120px;
  height: 55px;
  background-color: #f5f5f5;
  border: 3px solid #000000;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 13px;
`;
const VoteTeam = styled.div`
  color: #979797;
  font-size: 13px;
  font-weight: bold;
`;
const VoteName = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

const FormWrapper = styled.div`
  position: relative;
`;
const Check = styled.div``;
const CoverTeam = styled.div`
  position: absolute;
  margin-left: 110px;
  z-index: 1;
  //top: 0;
  bottom: 0;
`;

const LinkWrapper = styled.div`
  margin-top: 25px;
`;

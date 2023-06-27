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
import crown from '@/assets/images/crown.png';

function page() {
  const [leaders, setLeaders] = useState<any[]>([]);

  let partLeaders = leaders.splice(0, 2);

  useEffect(() => {
    const getLists = async () => {
      const response = await showFrontResult();
      const transformedLeaders = Object.values(response).map((data: any) => {
        return {
          key: data[0],
          name: data[0],
          team: data[1],
          score: data[2],
        };
      });
      transformedLeaders.sort((a, b) => b.score - a.score); // Sort by descending score
      setLeaders(transformedLeaders);
    };
    getLists();
  }, []);

  return (
    <Container>
      <Order order={'3'} />
      <Title content="FE 파트장 투표 결과" />
      <Line />
      <SelectPersonWrapper>
        {partLeaders.map((leader) => (
          <FormWrapper key={leader.key}>
            <C>
              {/* ㅇㄴㅇㄴ왕관위치 */}
              <Crown src={crown.src} />
            </C>
            <VoteForm key={leader.key}>
              <VoteTeam>{leader.team}</VoteTeam>
              <VoteName>{leader.name}</VoteName>
            </VoteForm>
            <CoverTeam>
              <Score score={leader.score} win={1} />
            </CoverTeam>
          </FormWrapper>
        ))}
        {leaders.map((leader) => (
          <FormWrapper key={leader.key}>
            {/* ㅇㄴㅇㄴ노랑반투명?ㅇㄴㅇㄴ */}
            <VoteForm key={leader.key}>
              <VoteTeam>{leader.team}</VoteTeam>
              <VoteName>{leader.name}</VoteName>
            </VoteForm>
            <CoverTeam>
              <Score score={leader.score} win={2} />
            </CoverTeam>
          </FormWrapper>
        ))}
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
  padding-right: 20px;

  overflow-y: scroll;
  overflow-x: hidden;
  height: 370px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    padding-left: 3px;

    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
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
const CoverTeam = styled.div`
  position: absolute;
  margin-left: 110px;
  z-index: 1;
  bottom: 0;
`;

const LinkWrapper = styled.div`
  margin-top: 25px;
`;

const Crown = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
`;
const C = styled.div`
  position: relative;
  top: 0;
  z-index: 1;
  left: 0;
`;

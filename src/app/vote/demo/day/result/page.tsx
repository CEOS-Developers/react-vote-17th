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
import { showDemoResult } from '@/api/requests';

function page() {
  const [teams, setTeams] = useState<any[]>([]);

  useEffect(() => {
    const getLists = async () => {
      const response = await showDemoResult();
      const transformedLeaders = Object.values(response).map((data: any) => {
        return {
          key: data[0],
          team: data[0],
          score: data[1],
        };
      });
      transformedLeaders.sort((a, b) => b.score - a.score); // Sort by descending score
      console.log(transformedLeaders);
      setTeams(transformedLeaders);
    };
    getLists();
  }, []);

  return (
    <Container>
      <Order order={'3'} />
      <Title content="데모데이 투표 결과" />
      <Line />
      <SelectPersonWrapper>
        {teams.map((team) => (
          <FormWrapper key={team.key}>
            <VoteForm>
              <VoteTeam>{team.team}</VoteTeam>
            </VoteForm>
            <Check>
              <CoverTeam>
                <Score score={team.score} />
              </CoverTeam>
            </Check>
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
`;
const VoteForm = styled.div`
width: 280px;
height: 55px;
border: 3px solid #000000;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-top: 13px;
background-color: #f5f5f5;
}
`;
const VoteTeam = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

const FormWrapper = styled.div`
  position: relative;
`;
const Check = styled.div``;
const CoverTeam = styled.div`
  position: absolute;
  margin-left: 265px;
  z-index: 1;
  //top: 0;
  bottom: 0;
`;

const LinkWrapper = styled.div`
  margin-top: 25px;
`;

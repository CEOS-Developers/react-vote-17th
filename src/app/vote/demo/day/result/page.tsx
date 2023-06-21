'use client';
import { useState } from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Title from '@/components/common/Title';
import Button from '@/components/vote/Button';
import Link from 'next/link';
import { BsCheckCircle } from 'react-icons/bs';
import Order from '@/components/common/Order';
import Score from '@/components/vote/Score';

function page() {
  const [selectedTeam, setSelectedTeam] = useState('');

  const [teams, setTeams] = useState([
    { key: 1, value: 'Repick', selected: false, score: 3 },
    { key: 2, value: 'Dan-support', selected: false, score: 2 },
    { key: 3, value: 'BariBari', selected: false, score: 2 },
    { key: 4, value: 'Therapease', selected: false, score: 1 },
    { key: 5, value: 'Hooking', selected: false, score: 1 },
  ]);

  return (
    <Container>
      <Order order={'3'} />
      <Title content="데모데이 투표 결과" />
      <Line />
      <SelectPersonWrapper>
        {teams.map((team) => (
          <FormWrapper key={team.key}>
            <VoteForm>
              <VoteTeam>{team.value}</VoteTeam>
            </VoteForm>
            <Check>
              <CoverTeam>
                <Score score={team.score} />
              </CoverTeam>
            </Check>
            {team.selected && (
              <Check>
                <CoverTeam>
                  <BsCheckCircle className="check" />
                </CoverTeam>
              </Check>
            )}
          </FormWrapper>
        ))}
      </SelectPersonWrapper>
      <Link href={'/vote'}>
        <Button content="돌아가기" />
      </Link>
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

'use client';
import { useState } from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import Button from '@/components/vote/Button';
import Link from 'next/link';

function page() {
  const [selectedTeam, setSelectedTeam] = useState('');

  const teams = [
    { key: 1, value: 'Repick' },
    { key: 2, value: 'Dan-support' },
    { key: 3, value: 'BariBari' },
    { key: 4, value: 'Therapease' },
    { key: 5, value: 'Hooking' },
  ];

  const selectTeamHandler = (value: React.SetStateAction<string>) => {
    setSelectedTeam(value);
  };

  return (
    <Container>
      <Header content="데모데이 투표" href="/vote/demo" />
      <Line />
      <SelectPersonWrapper>
        {teams.map((team) => (
          <VoteForm
            key={team.key}
            onClick={() => selectTeamHandler(team.value)}
          >
            <VoteTeam>{team.value}</VoteTeam>
          </VoteForm>
        ))}
      </SelectPersonWrapper>
      <Link href={'/vote/demo/day/voting'}>
        <Button content="제출하기" />
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

const SelectPersonWrapper = styled.div``;
const VoteForm = styled.div`
  width: 280px;
  height: 55px;
  background-color: #f5f5f5;
  border: 3px solid #000000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 13px;
`;
const VoteTeam = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

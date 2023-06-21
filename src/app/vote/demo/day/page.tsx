'use client';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import Button from '@/components/vote/Button';
import Link from 'next/link';

function page() {
  const [selectedTeam, setSelectedTeam] = useState('');
  //const [selected, setSelected] = useState<boolean>(false);

  const [teams, setTeams] = useState([
    { key: 1, value: 'Repick', selected: false },
    { key: 2, value: 'Dan-support', selected: false },
    { key: 3, value: 'BariBari', selected: false },
    { key: 4, value: 'Therapease', selected: false },
    { key: 5, value: 'Hooking', selected: false },
  ]);

  const selectTeamHandler = (value: React.SetStateAction<string>) => {
    setSelectedTeam(value);
    setTeams(
      teams.map((user) =>
        user.value === value ? { ...user, selected: !user.selected } : user
      )
    );
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
            change={team.selected}
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
const VoteForm = styled.div<{ change: boolean }>`
  width: 280px;
  height: 55px;
  border: 3px solid #000000;
  background-color: #ffe27c;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 13px;

  ${(props) =>
    !props.change &&
    css`
      background-color: #f5f5f5;
    `}
}
`;
const VoteTeam = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

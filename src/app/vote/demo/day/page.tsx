'use client';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import Button from '@/components/vote/Button';
import Link from 'next/link';
import {BsCheckCircle} from 'react-icons/bs';

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
  const selectTeamHandler = (value : string) => {
    if (selectedTeam === value) {
      setSelectedTeam('');
      setTeams((prevState) =>
        prevState.map((team) =>
          team.value === value ? { ...team, selected: false } : team
        )
      );
    } else {
      setSelectedTeam(value);
      setTeams((prevState) =>
        prevState.map((team) =>
          team.value === value ? { ...team, selected: true } : { ...team, selected: false }
        )
      );
    }
  };

  return (
    <Container>
      <Header content="데모데이 투표" href="/vote/demo" />
      <Line />
      <SelectPersonWrapper>
        {teams.map((team) => (
          <FormWrapper key={team.key}>
            <VoteForm
              onClick={() => selectTeamHandler(team.value)}
              change={team.selected}
            >
              <VoteTeam>{team.value}</VoteTeam>
            </VoteForm>
            {team.selected && 
              <CoverTeam>
                <BsCheckCircle size="40"/>
              </CoverTeam>}
          </FormWrapper>  
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

const FormWrapper = styled.div`
  position :relative;
`
const VoteTeam = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

const CoverTeam = styled.div`
  width: 280px;
  height: 55px;
  border: 3px solid #000000;
  background-color: yellow;
  position: absolute;
  z-index: 10;
  top: 0;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
`
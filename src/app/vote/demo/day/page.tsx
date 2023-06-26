'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import Button from '@/components/vote/Button';
import Link from 'next/link';
import { BsCheckCircle } from 'react-icons/bs';
import Order from '@/components/common/Order';
import { getDemoList } from '@/api/requests';

function page() {
  const [selectedTeam, setSelectedTeam] = useState('');

  const [teams, setTeams] = useState<any[]>([]);
  // [
  //   { key: 1, value: 'Repick', selected: false },
  //   { key: 2, value: 'Dan-support', selected: false },
  //   { key: 3, value: 'BariBari', selected: false },
  //   { key: 4, value: 'Therapease', selected: false },
  //   { key: 5, value: 'Hooking', selected: false },
  // ]
  useEffect(() => {
    const getLists = async () => {
      const response = await getDemoList();
      console.log(response);
      const transformedTeams = Object.values(response).map((data : any) => {
        return {
          key: data.id,
          value: data.name,
          selected: false,
        };
      });
      transformedTeams.sort((a, b) => a.key - b.key);
      setTeams(transformedTeams);
    };

    getLists();
  }, []);
  const selectTeamHandler = (value: string) => {
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
          team.value === value
            ? { ...team, selected: true }
            : { ...team, selected: false }
        )
      );
    }
  };

  return (
    <Container>
      <Order order={'2'} />
      <Header content="데모데이 투표" href="/vote/demo" />
      <Line />
      <SelectPersonWrapper>
        {teams.map((team) => (
          <FormWrapper key={team.key}>
            <VoteForm onClick={() => selectTeamHandler(team.value)}>
              <VoteTeam>{team.value}</VoteTeam>
            </VoteForm>
            {team.selected && (
              <Check>
                <CoverTeam onClick={() => selectTeamHandler(team.value)}>
                  <BsCheckCircle className="check" />
                </CoverTeam>
              </Check>
            )}
          </FormWrapper>
        ))}
      </SelectPersonWrapper>
      <LinkWrapper>
        <Link href={'/vote/demo/day/voting'}>
          <Button content="제출하기" />
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

const SelectPersonWrapper = styled.div``;
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

const FormWrapper = styled.div`
  position: relative;
`;
const VoteTeam = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

const Check = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const CoverTeam = styled.div`
  width: 280px;
  height: 55px;
  border: 3px solid #000000;
  background-color: #ffe27c;
  position: absolute;
  z-index: 10;
  top: 0;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  .check {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: #ffd954;
    border-radius: 50%;
  }
`;

const LinkWrapper = styled.div`
  margin-top : 25px;
`
'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import Button from '@/components/vote/Button';
import Link from 'next/link';
import Order from '@/components/common/Order';
import { BsCheckCircle } from 'react-icons/bs';
import { getBackList } from '@/api/requests';

function page() {
  const [selectedLeader, setSelectedLeader] = useState('');
  // [
  //   { key: 1, name: '서찬혁', team: 'Repick', selected: false },
  //   { key: 2, name: '서혜준', team: 'Repick', selected: false },
  //   { key: 3, name: '몰', team: 'Dan-support', selected: false },
  //   { key: 4, name: '라', team: 'Dan-support', selected: false },
  //   { key: 5, name: '몰라', team: 'BariBari', selected: false },
  //   { key: 6, name: '몰라ㅏ', team: 'BariBari', selected: false },
  //   { key: 7, name: '몰라ㅇ', team: 'Therapease', selected: false },
  //   { key: 8, name: '몰라ㄷ', team: 'Therapease', selected: false },
  //   { key: 9, name: '몰라ㄱ', team: 'Hooking', selected: false },
  //   { key: 10, name: '몰라ㄴ', team: 'Hooking', selected: false },
  // ]
  const [leaders, setLeaders] = useState<any[]>([]);

  useEffect(() => {
    const getLists = async () => {
      const response = await getBackList();
      const transformedLeaders = Object.values(response).map((data : any) => {
        let team = '';
        switch (data.team) {
          case 1:
            team = 'Repick';
            break;
          case 2:
            team = 'Therapease';
            break;
          case 3:
            team = 'Dan-support';
            break;
          case 4:
            team = 'BariBari';
            break;
          case 5:
            team = 'Hooking';
            break;
          default:
            team = '';
        }
      
        return {
          key: data.id,
          name: data.username,
          team: team,
          selected: false,
        };
      });
      transformedLeaders.sort((a, b) => a.team.localeCompare(b.team));
      setLeaders(transformedLeaders);
    };

    getLists();
  }, []);
  const selectLeaderHandler = (name: React.SetStateAction<string>) => {
    if (selectedLeader === name) {
      setSelectedLeader('');
      setLeaders((prevState) =>
        prevState.map((leader) =>
          leader.name === name ? { ...leader, selected: false } : leader
        )
      );
    } else {
      setSelectedLeader(name);
      setLeaders((prevState) =>
        prevState.map((leader) =>
          leader.name === name
            ? { ...leader, selected: true }
            : { ...leader, selected: false }
        )
      );
    }
  };
  return (
    <Container>
      <Order order={'2'} />
      <Header content="BE 파트장 투표" href="/vote/part" />
      <Line />
      <SelectPersonWrapper>
        {leaders.map((leader) => (
          <FormWrapper key={leader.key}>
            <VoteForm
              key={leader.key}
              onClick={() => selectLeaderHandler(leader.name)}
            >
              <VoteTeam>{leader.team}</VoteTeam>
              <VoteName>{leader.name}</VoteName>
            </VoteForm>
            {leader.selected && (
              <Check>
                <CoverTeam onClick={() => selectLeaderHandler(leader.name)}>
                  <BsCheckCircle className="check" />
                </CoverTeam>
              </Check>
            )}
          </FormWrapper>
        ))}
      </SelectPersonWrapper>
      <Link href={'/vote/part/be/voting'}>
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
const Check = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const CoverTeam = styled.div`
  width: 120px;
  height: 55px;
  border: 3px solid #000000;
  background-color: #ffe27c;
  position: absolute;
  z-index: 10;
  bottom: 0;
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

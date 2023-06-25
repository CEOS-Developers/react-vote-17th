'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import Button from '@/components/vote/Button';
import Link from 'next/link';
import Order from '@/components/common/Order';
import { BsCheckCircle } from 'react-icons/bs';
import { getFrontList } from '@/api/requests';

function page() {
  const [selectedLeader, setSelectedLeader] = useState('');

  const [leaders, setLeaders] = useState([
    { key: 1, name: '배성준', team: 'Repick', selected: false },
    { key: 2, name: '이예지', team: 'Repick', selected: false },
    { key: 3, name: '노수진', team: 'Dan-support', selected: false },
    { key: 4, name: '신유진', team: 'Dan-support', selected: false },
    { key: 5, name: '오예린', team: 'BariBari', selected: false },
    { key: 6, name: '최민주', team: 'BariBari', selected: false },
    { key: 7, name: '권가은', team: 'Therapease', selected: false },
    { key: 8, name: '김서연', team: 'Therapease', selected: false },
    { key: 9, name: '김문기', team: 'Hooking', selected: false },
    { key: 10, name: '장효신', team: 'Hooking', selected: false },
  ]);
  console.log("TEST");
  useEffect(() => {
    const getLists = async () => {
      const response = await getFrontList();
      console.log(response);
    };

    getLists();
  }, []);
  //api받는 부분  
  // const data = await (await fetch(process.env.API_URL + '/api/polls/vote/part-leader/front-end/')).json();
  // console.log(data);
  
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
      <Header content="FE 파트장 투표" href="/vote/part" />
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
                <CoverTeam>
                  <BsCheckCircle className="check" />
                </CoverTeam>
              </Check>
            )}
          </FormWrapper>
        ))}
      </SelectPersonWrapper>
      <LinkWrapper>
        <Link href={'/vote/part/fe/voting'}>
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

const LinkWrapper = styled.div`
  margin-top : 25px;
`
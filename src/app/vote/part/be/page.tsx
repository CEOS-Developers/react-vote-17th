'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import Button from '@/components/vote/Button';
import Order from '@/components/common/Order';
import { BsCheckCircle } from 'react-icons/bs';
import { getBackList, pollBackLeader } from '@/api/requests';
import { useCookies } from 'react-cookie';
import getAccessToken from '@/util/getAccessToken';
import { userInfoState } from '@/atom/states';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

function page() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const router = useRouter();
  const [selectedLeader, setSelectedLeader] = useState('');
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [leaders, setLeaders] = useState<any[]>([]);

  useEffect(() => {
    const getLists = async () => {
      let accessToken = await getAccessToken(cookies, setCookie);
      const response = await getBackList(accessToken);
      const transformedLeaders = Object.values(response).map((data: any) => {
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

  const submitHandler = async () => {
    if (!selectedLeader) {
      alert('파트장을 투표주세요.');
      return;
    }
    if (selectedLeader == userInfo.id) {
      // 투표자랑 고른 후보가 같을 때
      alert('본인은 본인을 투표할 수 없습니다.');
      return;
    }
    let accessToken = await getAccessToken(cookies, setCookie);
    const data = {
      poll: 1,
      voter: userInfo.userName,
      target_account: selectedLeader,
      target_team: '',
    };
    const response = await pollBackLeader(data, accessToken);
    if (response.success) {
      router.push('/vote/part/be/voting');
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
      <LinkWrapper>
        <ButtonWrapper onClick={() => submitHandler()}>
          <Button content="제출하기" />
        </ButtonWrapper>
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
  margin-top: 25px;
`;

const ButtonWrapper = styled.div``;

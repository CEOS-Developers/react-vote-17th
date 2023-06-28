'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import Button from '@/components/vote/Button';
import Order from '@/components/common/Order';
import { BsCheckCircle } from 'react-icons/bs';
import { getDemoList, pollDemo } from '@/api/requests';
import { useCookies } from 'react-cookie';
import getAccessToken from '@/util/getAccessToken';
import { userInfoState } from '@/atom/states';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

function page() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const router = useRouter();
  const [selectedTeam, setSelectedTeam] = useState('');
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [teams, setTeams] = useState<any[]>([]);

  useEffect(() => {
    const getLists = async () => {
      let accessToken = await getAccessToken(cookies, setCookie);
      const response = await getDemoList(accessToken);
      const transformedTeams = Object.values(response).map((data: any) => {
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
  const submitHandler = async () => {
    if (!selectedTeam) {
      alert('투표할 팀을 선택해주세요.');
      return;
    }
    let teamName;
    switch (userInfo.team) {
      case 1:
        teamName = 'Repick';
        break;
      case 2:
        teamName = 'Therapease';
        break;
      case 3:
        teamName = 'Dan-support';
        break;
      case 4:
        teamName = 'BariBari';
        break;
      case 5:
        teamName = 'Hooking';
        break;
      default:
        teamName = '';
    }
    if (selectedTeam == teamName) {
      alert('본인은 본인의 팀을 투표할 수 없습니다.');
      return;
    }
    let accessToken = await getAccessToken(cookies, setCookie);
    const data = {
      poll: 2,
      voter: userInfo.userName,
      target_account: '',
      target_team: selectedTeam,  
    };
    const response = await pollDemo(data, accessToken);
    if (response.success) {
      router.push('/vote/demo/day/voting');
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
            <VoteForm
              key={team.key}
              onClick={() => selectTeamHandler(team.value)}
            >
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
  margin-top: 25px;
`;
const ButtonWrapper = styled.div``;

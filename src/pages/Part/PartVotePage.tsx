import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';

import styled from '@emotion/styled';

import { Headline } from '../../styles/Typography';
import PartVoteCard from './PartVoteCard';
import MainBtn from '../../components/MainBtn';

import { DUMMY_MEMBERS } from '../../constants/dummyData';

const PartVotePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [selectedMember, setSelectedMember] = useState<{
    teamName: string;
    userName: string;
  }>({
    teamName: '',
    userName: '',
  });

  const handleVoteSumbit = () => {
    // TODO - 투표 제출 api
    console.log(selectedMember);
  };

  return (
    <Container>
      <Headline>{state} 파트장 투표</Headline>
      <div className="contents-wrapper">
        <div className="cards-wrapper">
          {DUMMY_MEMBERS.map((member, idx) => {
            return (
              <PartVoteCard
                key={idx}
                memberInfo={member}
                isSelected={
                  selectedMember.teamName === member.teamName &&
                  selectedMember.userName === member.userName
                }
                setSelectedMember={setSelectedMember}
              />
            );
          })}
        </div>
        <div className="buttons-wrapper">
          <MainBtn onClick={handleVoteSumbit}>투표하기</MainBtn>
          <MainBtn onClick={() => navigate(`/part/result`, { state: state })}>
            결과보기
          </MainBtn>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contents-wrapper {
    width: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }

  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    button {
      margin: 20px;
    }
  }

  .buttons-wrapper {
    display: flex;
    margin-top: 40px;
    gap: 15px;
  }
`;

export default PartVotePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';

import styled from '@emotion/styled';

import { Headline } from '../../styles/Typography';
import RankCard from '../../components/RankCard';
import MainBtn from '../../components/MainBtn';

import { DUMMY_PART_VOTE_RESULT } from '../../constants/dummyData';

const PartResultPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <Container>
      <Headline>{state} 파트장 투표 결과</Headline>
      <div className="contents-wrapper">
        <div className="cards-wrapper">
          {DUMMY_PART_VOTE_RESULT.map(
            ({ userName, teamName, voteCount }, idx) => {
              return (
                <RankCard
                  key={idx}
                  title={userName}
                  description={teamName}
                  rank={idx}
                  votes={voteCount}
                  width="40%"
                />
              );
            }
          )}
        </div>
        <MainBtn onClick={() => navigate(-1)}>돌아가기</MainBtn>
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }

  .cards-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    margin-bottom: 40px;
  }
`;

export default PartResultPage;

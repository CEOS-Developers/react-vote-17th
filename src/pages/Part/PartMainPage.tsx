import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import { Headline } from '../../styles/Typography';
import SelectBtn from '../../components/SelectBtn';
import MainBtn from '../../components/MainBtn';

const PartMainPage = () => {
  const navigate = useNavigate();

  const FRONT_TITLE = `FRONT-END\n파트장 투표`;
  const BACK_TITLE = `BACK-END\n파트장 투표`;

  return (
    <Container>
      <Headline>파트장 투표</Headline>
      <div className="contents-wrapper">
        <div className="buttons-wrapper-col">
          <SelectBtn
            title={FRONT_TITLE}
            onClick={() => navigate('/part/vote', { state: 'FE' })}
          />
          <MainBtn onClick={() => navigate('/part/result', { state: 'FE' })}>
            결과 보기
          </MainBtn>
        </div>
        <div className="buttons-wrapper-col">
          <SelectBtn
            title={BACK_TITLE}
            onClick={() => navigate('/part/vote', { state: 'BE' })}
          />
          <MainBtn onClick={() => navigate('/part/result', { state: 'BE' })}>
            결과 보기
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
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .buttons-wrapper-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 75px;
    row-gap: 20px;
  }
`;

export default PartMainPage;

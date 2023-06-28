import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import Button from '@mui/material/Button';

import { ReactComponent as CEOSLogo } from '../assets/ceos-logo.svg';

const Header = () => {
  const navigate = useNavigate();

  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const DUMMY_USER_INFO = {
    teamName: 'TherapEase',
    userName: '권가은',
  };

  const handleLogoutButtonClick = () => {
    console.log('로그아웃');
  };

  return (
    <Container>
      <CEOSLogo
        width="142"
        height="43"
        className="ceosLogo"
        onClick={() => navigate(`/`)}
      />

      {isSignedIn ? (
        <ButtonsWrapper>
          <span className="user-info">{`${DUMMY_USER_INFO.teamName} ${DUMMY_USER_INFO.userName}`}</span>
          <Button
            variant="outlined"
            size="small"
            onClick={handleLogoutButtonClick}
          >
            로그아웃
          </Button>
        </ButtonsWrapper>
      ) : (
        <ButtonsWrapper>
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate(`/login`)}
          >
            로그인
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigate(`/signup`)}
          >
            회원가입
          </Button>
        </ButtonsWrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 3.5rem;
  display: flex;
  align-items: center;
  background-color: #ffff;

  .ceosLogo {
    cursor: pointer;
  }

  .user-info {
    line-height: 100%;
    margin: 0 10px;
    font-weight: 500;
  }

  button {
    margin: 0 10px;
    padding: 4px 20px;
    border-radius: 20px;
  }
`;

const ButtonsWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 20px 0 auto;
`;

export default Header;

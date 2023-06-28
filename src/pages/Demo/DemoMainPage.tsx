import React from 'react';

import MainBtn from '../../components/MainBtn';
import { Headline } from '../../components/Typography';
import { Box } from '@mui/material';
import SizedBox from '../../components/SizedBox';
import { useNavigate } from 'react-router-dom';
const DemoMainPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px',
      }}
    >
      <Headline>데모데이 투표 </Headline>
      <SizedBox height={'20px'} />
      <MainBtn onClick={() => navigate('/demo/vote')}>투표하기</MainBtn>
      <MainBtn onClick={() => navigate('/demo/result')}>결과보기</MainBtn>
    </Box>
  );
};

export default DemoMainPage;

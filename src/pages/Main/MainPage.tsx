import React from 'react';
import { Headline } from '../../components/Typography';
import SelectBtn from '../../components/SelectBtn';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',

        width: '100%',
        height: '100%',
      }}
    >
      <Headline>파트장 / 데모데이 투표</Headline>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '150px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <SelectBtn
          title="파트장 투표 바로가기"
          onClick={() => navigate('/part')}
        />
        <SelectBtn
          title="데모데이 투표바로가기"
          onClick={() => navigate('/demo')}
        />
      </Box>
    </Box>
  );
};

export default MainPage;

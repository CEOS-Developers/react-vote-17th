import React from 'react';
import { Box } from '@mui/material';
import { Headline } from '../../components/Typography';
import RankCard from '../../components/RankCard';
import MainBtn from '../../components/MainBtn';
import { useNavigate } from 'react-router-dom';
import SizedBox from '../../components/SizedBox';

const DemoResultPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
      rank: 1,
      votes: 5,
    },
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
      rank: 2,
      votes: 4,
    },
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
      rank: 3,
      votes: 3,
    },
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
      rank: 4,
      votes: 2,
    },
    {
      title: 'FINBLE',
      description: '주식 관리 포트폴리오 서비스',
      rank: 5,
      votes: 1,
    },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Headline>데모데이 투표 결과</Headline>
      <SizedBox height={'50px'} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',

          width: '100%',
          gap: '15px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {services.map(({ title, description, rank, votes }) => (
          <RankCard
            key={title}
            title={title}
            description={description}
            rank={rank}
            votes={votes}
          />
        ))}
        <SizedBox height={'40px'} />
        <MainBtn onClick={() => navigate('/demo')}>돌아가기</MainBtn>
      </Box>

      <SizedBox height={'5vh'} />
    </Box>
  );
};

export default DemoResultPage;

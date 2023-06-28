import React from 'react';
import styled from '@emotion/styled';
import { ButtonText } from './Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Headline, Title, Body } from './Typography';

interface RankCardProps {
  title: string;
  description: string;
  rank: number;
  votes: number;
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; //(e: MouseEvent<Element, MouseEvent>) => void
}
const RankCard: React.FC<RankCardProps> = ({
  title,
  description,
  rank,
  votes,
  onClick,
  width,
}) => {
  return (
    <Box
      sx={{
        width: width ? width : '100%',
        maxWidth: '700px',
        padding: '10px',

        backgroundColor: 'primary.white',
        border: '2px solid ',
        borderColor: 'primary.main',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Rank rank={rank} />
      <Col>
        <Headline inherit>{title}</Headline>
      </Col>
      <Col>
        <Body>{description}</Body>
      </Col>
      <Col width="50px">
        <Headline color="var(--ceos-blue-color)">{votes}</Headline>
      </Col>
    </Box>
  );
};

const Rank = ({ rank }: { rank: number }) => {
  return (
    <Box
      sx={{
        width: '50px',
        height: '50px',
        backgroundColor: 'primary.main',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <Title inherit>{rank} </Title>
    </Box>
  );
};

const Col = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : '200px')};
`;
export default RankCard;

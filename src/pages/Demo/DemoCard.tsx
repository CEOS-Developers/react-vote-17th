import React from 'react';
import { Button } from '@mui/material';
import { Headline, Title, Body } from '../../components/Typography';

interface DemoCardProps {
  title: string;
  description: string;
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; //(e: MouseEvent<Element, MouseEvent>) => void
}
const DemoCard: React.FC<DemoCardProps> = ({
  selected,
  title,
  description,
  onClick,
}) => {
  const defaultStyle = {
    width: '20rem',
    height: '8rem',
    border: '2px solid ',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const selectedStyle = {
    width: '20rem',
    height: '8rem',
    border: '2px solid ',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'primary.main',
    '&:hover': {
      //you want this to be the same as the backgroundColor above
      backgroundColor: 'primary.main',
    },
    color: 'white',
  };
  return (
    <Button sx={selected ? selectedStyle : defaultStyle} onClick={onClick}>
      <Title inherit>{title}</Title>
      <Body inherit>{description}</Body>
    </Button>
  );
};

export default DemoCard;

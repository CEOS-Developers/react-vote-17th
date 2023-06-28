import React from 'react';
import styled from '@emotion/styled';
import { ButtonText } from './Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Headline } from './Typography';

interface SelectBtnProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; //(e: MouseEvent<Element, MouseEvent>) => void
}
const SelectBtn: React.FC<SelectBtnProps> = ({ title, onClick }) => {
  return (
    <Button
      sx={{
        width: '320px',
        height: '320px',
        backgroundColor: 'primary.white',
        border: '2px solid ',
        borderColor: 'primary.main',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 10px',
      }}
      onClick={onClick}
      variant="outlined"
    >
      <Headline inherit>{title}</Headline>
    </Button>
  );
};

export default SelectBtn;

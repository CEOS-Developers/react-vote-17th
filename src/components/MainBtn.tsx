import React from 'react';
import styled from '@emotion/styled';
import { ButtonText } from './Typography';
import { Button } from '@mui/material';

interface ButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const MainBtn: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      sx={{
        width: '220px',
        height: '50px',
        borderRadius: '10px',
      }}
      onClick={onClick}
      variant="contained"
    >
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};

export default MainBtn;

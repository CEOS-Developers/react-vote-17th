'use client';
import React from 'react';
import styled, { css } from 'styled-components';

function LoginBtn({isFilled}: {isFilled : boolean}) {
  
  return <Button disabled={isFilled}>Login</Button>;
}

export default LoginBtn;

const Button = styled.div<{ disabled: boolean }>`
  display: flex;
  background-color: #000000;
  width: 250px;
  height: 50px;
  box-shadow: 6.5px 6.5px 6px rgba(0, 0, 0, 20%);
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 5px;

  &:hover {
    ${(props) =>
      !props.disabled &&
      css`
        background-color: #00000008;
        cursor: pointer;
        transition: 0.5s;
        color: #000000;
      `}
  }
  ${(props) =>
    props.disabled &&
    css`
      background-color: grey;
      cursor: not-allowed;
    `}
`;

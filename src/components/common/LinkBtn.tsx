'use client';
import React from 'react';
import styled from 'styled-components';

function LinkBtn({content} : {content : string}) {
  return (
    <Button>{content}</Button>
  );
}

export default LinkBtn;

const Button = styled.div`
  display: flex;
  background-color: #000000;
  width: 250px;
  height: 50px;
  margin-top: 45px;
  box-shadow: 6.5px 6.5px 6px rgba(0, 0, 0, 20%);
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 5px;

  &:hover {
    background-color: #00000008;
    cursor: pointer;
    transition: 0.5s;
    color: #000000;
  }
`;

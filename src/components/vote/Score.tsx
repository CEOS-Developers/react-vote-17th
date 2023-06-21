import React from 'react';
import styled from 'styled-components';

function Score({ score }: { score: number }) {
  return <Circle>{score}</Circle>;
}

export default Score;

const Circle = styled.button`
  width: 35px;
  height: 35px;
  background-color: F5F5F5;
  border-radius: 50%;
  border: 2.5px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`;

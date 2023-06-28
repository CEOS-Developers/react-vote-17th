import React from 'react';
import styled, { css } from 'styled-components';

function Score({ score, win }: { score: number; win: number }) {
  return <Circle win={win}>{score}</Circle>;
}

export default Score;

const Circle = styled.button<{ win: number }>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2.5px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  ${(props) =>
    (props.win == 1 &&
      css`
        background-color: #ffd954;
      `) ||
    (props.win == 2 &&
      css`
        background-color: #f5f5f5;
      `)}
`;

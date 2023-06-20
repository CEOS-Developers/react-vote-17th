import React from 'react';
import styled from 'styled-components';

function Button({ content }: { content: string }) {
  return <Show>{content}</Show>;
}

export default Button;

const Show = styled.button`
  background-color: #d9d9d9;
  border-radius: 40px;
  border: 3px solid #000000;
  font-weight: bold;
  font-size: 20px;
  margin-top: 25px;
  padding: 12px 50px 12px 50px;

  &:hover {
    background-color: #ffd954;
    transition: 0.4s;
  }
`;

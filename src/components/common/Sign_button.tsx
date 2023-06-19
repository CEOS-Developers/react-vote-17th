'use client';
import React from 'react';
import styled from 'styled-components';

function Sign_button({ content }: { content: String }) {
  return (
    <Button>
      <div className="join">{content}</div>
    </Button>
  );
}

export default Sign_button;

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

  &:hover {
    background-color: #898987;
    cursor: pointer;
  }

  .join {
    color: #ffffff;
    font-size: 18px;
    text-decoration-line: none;
    justify-content: center;
    margin-bottom: 5px;
  }
`;

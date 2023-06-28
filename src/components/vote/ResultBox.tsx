'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

function ResultBox({ content }: any) {
  return (
    <Link href={`${content}`}>
      <Show>{'결과보기'}</Show>
    </Link>
  );
}

export default ResultBox;

const Show = styled.button`
  background-color: #d9d9d9;
  border-radius: 40px;
  border: 3px solid #000000;
  font-weight: bold;
  font-size: 20px;
  margin-top: 25px;
  padding: 12px 50px 12px 50px;

  &:hover {
    background-color: #00000008;
    transition: 0.5s;
    color: #000000;
  }
`;


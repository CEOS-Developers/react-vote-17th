'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

function Result({ content }: any) {
  return (
    <ResultWrapper>
      <Link href={`${content}`}>
        <Show>{'결과 보기'}</Show>
      </Link>
    </ResultWrapper>
  );
}

export default Result;

const ResultWrapper = styled.div`
  margin-right: 20px;
  margin-top: 14px;
`
const Show = styled.button`
  background-color: #d9d9d9;
  border-radius: 20px;
  border: 2px solid #000000;
  font-weight: bold;
  padding: 8px;

  &:hover {
    background-color: #ffd954;
    transition: 0.4s;
  }
`;

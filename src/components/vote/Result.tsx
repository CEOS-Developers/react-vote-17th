'use client';
import React from 'react';
import styled from 'styled-components';
import check from '@/assets/images/check.png';
import Link from 'next/link';

function Result() {
  return <Show>{'결과 보기'}</Show>;
}

export default Result;

const Show = styled.button`
  background-color: #d9d9d9;
  border-radius: 20px;
  border: 2px solid #000000;
  font-weight: bold;
  margin-right: 20px;
  margin-top: 14px;
  padding: 8px;

  &:hover {
    background-color: #ffd954;
  }
`;

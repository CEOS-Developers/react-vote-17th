'use client';
import React from 'react';
import styled from 'styled-components';
import check from '@/assets/images/check.png';
import Link from 'next/link';

function Check({ content }: any) {
  return (
    <CheckWrapper>
      <Link href={`${content}`}>
        <Circle>
          <img className="check" src={check.src} />
        </Circle>
      </Link>
    </CheckWrapper>
  );
}

export default Check;

const CheckWrapper = styled.div`
  margin-right: 20px;
`
const Circle = styled.button`
  width: 35px;
  height: 35px;
  background-color: #d9d9d9;
  border-radius: 50%;
  border: 2px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;

  .check {
    display: none;
  }

  &:hover {
    background-color: #ffd954;
    transition: 0.4s;
  }

  &:hover .check {
    width: 30px;
    height: 30px;
    display: block;
    transition: 0.4s;
  }
`;

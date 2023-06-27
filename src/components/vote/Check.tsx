'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {FaCheck} from 'react-icons/fa';

function Check({ content }: any) {
  return (
    <CheckWrapper>
      <Link href={`${content}`}>
        <Circle>
          <FaCheck className = "check" size={36}/>
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
  border-radius: 50%;
  background-color: #d9d9d9;
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
    display: block;
    transition: 0.4s;
    font-weight : bold;
  }
`;

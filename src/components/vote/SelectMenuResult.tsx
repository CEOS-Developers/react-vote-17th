'use client';
import React from 'react';
import styled from 'styled-components';
import Check from '@/components/vote/Check';
import Result from '@/components/vote/Result';

function SelectMenuResult({
  content,
  href,
}: {
  content: string;
  href: string;
}) {
  const lines = content.split('br');
  return (
    <>
      <VoteForm>
        <VoteName>
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </VoteName>
        <CheckWrapper>
          <Check content={href} />
          <Result />
        </CheckWrapper>
      </VoteForm>
    </>
  );
}

export default SelectMenuResult;
const VoteForm = styled.div`
  width: 300px;
  height: 150px;
  background-color: #f5f5f5;
  border: 3px solid #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;
const VoteName = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin-left: 40px;
  margin-bottom: 40px;
`;
const CheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

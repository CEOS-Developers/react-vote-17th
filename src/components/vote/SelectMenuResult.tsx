'use client';
import React from 'react';
import styled from 'styled-components';
import Check from '@/components/vote/Check';
import Result from '@/components/vote/Result';

function SelectMenuResult({
  content,
  href,
  resultHref,
  isVoted,
  isShow
}: {
  content: string;
  href: string;
  resultHref: string;
  isVoted : boolean;
  isShow : boolean;
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
          {isShow && !isVoted && <Check content={href} />}
          {isShow && isVoted && <Result content={resultHref} />}
        </CheckWrapper>
        
      {!isShow && 
        <DisableBox>
          <WarnWrapper>본인의 파트만 투표 가능</WarnWrapper>
        </DisableBox>
      }
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
  position : relative;
`;
const VoteName = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin-left: 40px;
`;
const CheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DisableBox = styled.div`
  position : absolute;
  width: 300px;
  height: 150px;
  z-index : 10;
  top : 0;
  background-color: #ffe27c;
  opacity : 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
`

const WarnWrapper = styled.div`
  text-align: center;
  font-weight: bold;
  font-size : 20px;
`
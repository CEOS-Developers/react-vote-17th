'use client';
import React from 'react';
import styled from 'styled-components';
import Check from '@/components/vote/Check';

function SelectMenu({ content, href }: { content: string; href: string }) {
  return (
    <>
      <VoteForm>
        <VoteName>{content}</VoteName>
        <Check content={href} />
      </VoteForm>
    </>
  );
}

export default SelectMenu;
const VoteForm = styled.div`
  width: 300px;
  height: 85px;
  background-color: #f5f5f5;
  border: 3px solid #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
`;
const VoteName = styled.div`
  font-size: 19px;
  font-weight: bold;
  margin-left: 40px;
`;

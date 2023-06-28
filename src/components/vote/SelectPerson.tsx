'use client';
import React from 'react';
import styled from 'styled-components';

function SelectPerson({ team, name }: { team: string; name: string }) {
  return (
    <>
      <VoteForm>
        <VoteTeam>{team}</VoteTeam>
        <VoteName>{name}</VoteName>
      </VoteForm>
    </>
  );
}

export default SelectPerson;

const VoteForm = styled.div`
  width: 120px;
  height: 55px;
  background-color: #f5f5f5;
  border: 3px solid #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const VoteTeam = styled.div`
  color: #979797;
  font-size: 13px;
  font-weight: bold;
`;
const VoteName = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

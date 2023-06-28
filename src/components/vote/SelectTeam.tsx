'use client';
import React from 'react';
import styled from 'styled-components';

function SelectTeam({ team }: { team: string }) {
  return (
    <>
      <VoteForm>
        <VoteTeam>{team}</VoteTeam>
      </VoteForm>
    </>
  );
}

export default SelectTeam;

const VoteForm = styled.div`
  width: 280px;
  height: 55px;
  background-color: #f5f5f5;
  border: 3px solid #000000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const VoteTeam = styled.div`
  font-size: 19px;
  font-weight: bold;
`;

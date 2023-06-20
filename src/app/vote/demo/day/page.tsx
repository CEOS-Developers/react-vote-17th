'use client';
import React from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import SelectTeam from '@/components/vote/SelectTeam';
import Button from '@/components/vote/Button';
import Link from 'next/link';

function page() {
  return (
    <Container>
      <Header content="데모데이 투표" href="/vote/demo" />
      <Line />
      <SelectPersonWrapper>
        <Team>
          <SelectTeam team="Repick" />
        </Team>
        <Team>
          <SelectTeam team="Dan-support" />
        </Team>
        <Team>
          <SelectTeam team="BariBari" />
        </Team>
        <Team>
          <SelectTeam team="Therapease" />
        </Team>
        <Team>
          <SelectTeam team="Hooking" />
        </Team>
      </SelectPersonWrapper>
      <Link href={'/vote/demo/day/voting'}>
        <Button content="제출하기" />
      </Link>
    </Container>
  );
}

export default page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectPersonWrapper = styled.div``;
const Team = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
  margin-top: 13px;
`;

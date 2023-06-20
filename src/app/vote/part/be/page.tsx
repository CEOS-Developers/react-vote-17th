'use client';
import React from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import SelectPerson from '@/components/vote/SelectPerson';
import Button from '@/components/vote/Button';
import Link from 'next/link';

function page() {
  return (
    <Container>
      <Header content="BE 파트장 투표" href="/vote/part" />
      <Line />
      <SelectPersonWrapper>
        <Team>
          <SelectPerson team="Repick" name="서찬혁" />
          <SelectPerson team="Repick" name="서혜준" />
        </Team>
        <Team>
          <SelectPerson team="Dan-support" name="몰라" />
          <SelectPerson team="Dan-support" name="몰라" />
        </Team>
        <Team>
          <SelectPerson team="BariBari" name="몰라" />
          <SelectPerson team="BariBari" name="몰라" />
        </Team>
        <Team>
          <SelectPerson team="Therapease" name="몰라" />
          <SelectPerson team="Therapease" name="몰라" />
        </Team>
        <Team>
          <SelectPerson team="Hooking" name="몰라" />
          <SelectPerson team="Hooking" name="몰라" />
        </Team>
      </SelectPersonWrapper>
      <Link href={'/vote/part/be/voting'}>
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

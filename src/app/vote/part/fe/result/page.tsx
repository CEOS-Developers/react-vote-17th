'use client';
import React from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Title from '@/components/common/Title';
import SelectPerson from '@/components/vote/SelectPerson';
import Button from '@/components/vote/Button';
import Link from 'next/link';

function page() {
  return (
    <Container>
      <Title content="FE 파트장 투표 결과" />
      <Line />
      <SelectPersonWrapper>
        <Team>
          <SelectPerson team="Repick" name="배성준" />
          <SelectPerson team="Repick" name="이예지" />
          {/* SelectPerson 컴포넌트는 api 가져올 땐 불필요 */}
        </Team>
        <Team>
          <SelectPerson team="Dan-support" name="노수진" />
          <SelectPerson team="Dan-support" name="신유진" />
        </Team>
        <Team>
          <SelectPerson team="BariBari" name="오예린" />
          <SelectPerson team="BariBari" name="최민주" />
        </Team>
        <Team>
          <SelectPerson team="Therapease" name="권가은" />
          <SelectPerson team="Therapease" name="김서연" />
        </Team>
        <Team>
          <SelectPerson team="Hooking" name="김문기" />
          <SelectPerson team="Hooking" name="장효신" />
        </Team>
      </SelectPersonWrapper>
      <Link href={'/vote'}>
        <Button content="돌아가기" />
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

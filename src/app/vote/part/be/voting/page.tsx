'use client';
import Title from '@/components/common/Title';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Link from 'next/link';
import BoxEvent from '@/components/vote/BoxEvent';
import Order from '@/components/common/Order';
import ResultBox from '@/components/vote/ResultBox';
function page() {
  return (
    <Container>
      <Order order={'2'} />
      <Title content="BE 파트장 투표" />
      <Line />
      <BoxEvent />
      <div className="btn">
        <ResultBox content={'/vote/part/be/result'}/>
      </div>
    </Container>
  );
}

export default page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn {
    margin-top: 20px;
  }

  @keyframes changeColor {
    from {
      background-color: #d9d9d9;
    }
    to {
      background-color: #ffd954;
    }
  }
`;
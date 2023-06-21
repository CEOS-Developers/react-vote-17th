import React from 'react';
import styled from 'styled-components';

function Order({ order }: { order: string }) {
  return (
    <Container>
      <BigCircle>
        <Num>{'1'}</Num>
      </BigCircle>
      <SmallCircle />
      <SmallCircle />
      <SmallCircle />
      <SmallCircle />
      <SmallCircle />
      <BigCircle>
        <Num>{'2'}</Num>
      </BigCircle>
      <SmallCircle />
      <SmallCircle />
      <SmallCircle />
      <SmallCircle />
      <SmallCircle />
      <BigCircle>
        <Num>{'3'}</Num>
      </BigCircle>
    </Container>
  );
}

export default Order;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const BigCircle = styled.div`
  width: 23px;
  height: 23px;
  background-color: #f5f5f5;
  border-radius: 50%;
  border: 2px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const SmallCircle = styled.div`
  width: 10px;
  height: 10px;
  background-color: #f5f5f5;
  border-radius: 50%;
  margin-right: 10px;
`;

const Num = styled.div`
  font-weight: bold;
  font-size: 15px;
`;

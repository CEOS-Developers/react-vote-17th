import React from 'react';
import styled, { css } from 'styled-components';

function Order({ order }: { order: string }) {
  return (
    <Container>
      <BigCircle>
        <Num1 num={order}>{'1'}</Num1>
      </BigCircle>
      <SmallCircle />
      <SmallCircle />
      <SmallCircle />
      <SmallCircle />
      <SmallCircle />
      <BigCircle>
        <Num2 num={order}>{'2'}</Num2>
      </BigCircle>
      <SmallCircle />
      <SmallCircle />
      <SmallCircle />
      <SmallCircle />
      <SmallCircle />
      <BigCircle>
        <Num3 num={order}>{'3'}</Num3>
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
  font-weight: bold;
  font-size: 15px;
`;

const SmallCircle = styled.div`
  width: 10px;
  height: 10px;
  background-color: #f5f5f5;
  border-radius: 50%;
  margin-right: 10px;
`;

const Num1 = styled.div<{ num: string }>`
  font-weight: bold;
  font-size: 15px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  ${(props) =>
    (props.num == '1' &&
      css`
        background-color: #000000;
        color: #f5f5f5;
      `) ||
    (props.num == '2' &&
      css`
        background-color: #f5f5f5;
      `) ||
    (props.num == '3' &&
      css`
        background-color: #f5f5f5;
      `)}
`;
const Num2 = styled.div<{ num: string }>`
  font-weight: bold;
  font-size: 15px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  ${(props) =>
    (props.num == '1' &&
      css`
        background-color: #f5f5f5;
      `) ||
    (props.num == '2' &&
      css`
        background-color: #000000;
        color: #f5f5f5;
      `) ||
    (props.num == '3' &&
      css`
        background-color: #f5f5f5;
      `)}
`;
const Num3 = styled.div<{ num: string }>`
  font-weight: bold;
  font-size: 15px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  ${(props) =>
    (props.num == '1' &&
      css`
        background-color: #f5f5f5;
      `) ||
    (props.num == '2' &&
      css`
        background-color: #f5f5f5;
      `) ||
    (props.num == '3' &&
      css`
        background-color: #000000;
        color: #f5f5f5;
      `)}
`;

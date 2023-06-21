'use client';
import React from 'react';
import styled from 'styled-components';

function Title({ content }: { content: String }) {
  return <Container>{content}</Container>;
}

export default Title;
const Container = styled.div`
  margin-top: 30px;
  padding-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

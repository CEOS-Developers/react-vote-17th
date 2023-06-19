'use client';
import React from 'react';
import styled from 'styled-components';

function Title({content} : {content : String}) {
  return (
    <Container>{content}</Container>
  );
}

export default Title;
const Container = styled.div`
  margin-top : 30px;
  padding : 30px;
  font-size : 30px;
  font-weight : bold;
  text-align : center;
`;
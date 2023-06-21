'use client';
import React from 'react';
import styled, { css } from 'styled-components';

function Sign_button({name,id,password,passwordConfirm,email,team,part} 
  : {name : string, id : string, password : string, passwordConfirm : string,
  email : string, team : string, part : string}) {
  const isAllFieldsFilled = !!(name && id && password && passwordConfirm && email && team && part);
  const registerHandler = () => {
    if(isAllFieldsFilled){
      alert("TEST");
    }
    // if(!name.trim()){
    //   alert("이름이 없습니다.");
    //   return;
    // }
    // id랑 password를 api에 넘기면 됨
  }
  return (
    <Button onClick = {registerHandler} disabled={!isAllFieldsFilled}>Register</Button>
  );
}

export default Sign_button;

const Button = styled.div<{disabled : boolean}>`
  display: flex;
  background-color: #000000;
  width: 250px;
  height: 50px;
  margin-top: 45px;
  box-shadow: 6.5px 6.5px 6px rgba(0, 0, 0, 20%);
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 5px;

  &:hover {
    ${props =>
      !props.disabled &&
      css`
        background-color: #00000008;
        cursor: pointer;
        transition: 0.5s;
        color: #000000;
      `}
  }
  ${props =>
    props.disabled &&
    css`
      background-color : grey;
      cursor : not-allowed;
    `}
`;

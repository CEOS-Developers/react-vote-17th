'use client';
import {useRouter} from 'next/navigation';
import React from 'react';
import styled, { css } from 'styled-components';

function Sign_button({name,id,password,passwordConfirm,email,team,part} 
  : {name : string, id : string, password : string, passwordConfirm : string,
  email : string, team : string, part : string}) {
  const router = useRouter(); 
  const isAllFieldsFilled = !!(name.trim() && id.trim() && password && passwordConfirm && email.trim() && team && part);
  const registerHandler = () => {
    if(isAllFieldsFilled){ // 다 채웠을 때
      if(password.trim() !== passwordConfirm.trim()){
        alert("비밀번호를 확인해주세요.");
        return;
      }
      else{
        const data = {
          username : name,
          email : email,
          password : password,
          team : team,
          part : part
        };
        console.log(JSON.stringify(data));
        fetch(process.env.API_URL + '/account/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(data => {
            //회원 정보, 토큰 받아서 처리
            alert("회원가입이 되었습니다.");
            console.log(data);
            router.push('/main');
          })
          .catch(error => {
            // 에러 처리
            console.error(error);
          });
      }
    }
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

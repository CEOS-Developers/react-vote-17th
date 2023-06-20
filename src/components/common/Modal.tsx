import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

function Modal({ clickModal }: any) {
  return (
    <ModalBox onClick={clickModal}>
      <SearchModalContent onClick={(e) => e.stopPropagation()}>
        <Info>{'Repick FE 이예지'}</Info>
        <Link href={'/main'}>
          <Button>{'Logout'}</Button>
        </Link>
      </SearchModalContent>
    </ModalBox>
  );
}

export default Modal;

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchModalContent = styled.div`
  padding: 1.5rem 3rem;
  width: 180px;
  height: 150px;
  border: 3px solid #000000;
  display: flex;
  flex-direction: column;
  background-color: #ffe27c;
  justify-content: center;
`;
const Info = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #f5f5f5;
  border-radius: 40px;
  border: 3px solid #000000;
  font-weight: bold;
  font-size: 15px;
  margin-top: 25px;
  padding: 12px 50px 12px 50px;

  &:hover {
    background-color: #ffd954;
    transition: 0.4s;
  }
`;

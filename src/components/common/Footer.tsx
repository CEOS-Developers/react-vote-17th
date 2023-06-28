'use client';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import footer from '@/assets/images/footer.png';
import Modal from './Modal';

function Footer() {
  const [showModal, setShowModal] = useState(false);
  const clickModal = () => setShowModal(!showModal);

  return (
    <>
      <Menu src={footer.src} onClick={clickModal}></Menu>
      {showModal && <Modal clickModal={clickModal} />}
    </>
  );
}

export default Footer;

const Menu = styled.img`
  width: 40px;
  height: 40px;
  cursor : pointer;
`;

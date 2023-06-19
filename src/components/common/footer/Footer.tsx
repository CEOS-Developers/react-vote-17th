'use client';
import React from 'react';
import styled from 'styled-components';
import footer from '@/assets/images/footer.png';

function Footer() {
  return <Menu src={footer.src}></Menu>;
}

export default Footer;

const Menu = styled.img`
  width: 40px;
  height: 40px;
`;

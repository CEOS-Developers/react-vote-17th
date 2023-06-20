'use client';
import React from 'react';
import styled from 'styled-components';
import Title from '@/components/common/Title';
import arrow from '@/assets/images/arrow.svg';
import Link from 'next/link';

function Header({ content, href }: { content: string , href : string  }) {
  return (
    <>
      <Head>
        <LinkWrapper>
          <Link href={href}>
            <Arrow src={arrow.src} />
          </Link>
        </LinkWrapper>
        <TitleWrapper>
          <Title content={content} />
        </TitleWrapper>
      </Head>
    </>
  )
}

export default Header;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content : space-between;
  width : 100%;
`;
const Arrow = styled.img`
  width: 20px;
  margin-top: 30px;
`;
const LinkWrapper = styled.div`
  padding-left : 30px;
`
const TitleWrapper = styled.div`
  margin : 0 auto;
  padding-right : 50px;
`
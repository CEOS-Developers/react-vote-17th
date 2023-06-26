'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from '@/components/common/Title';
import Line from '@/components/common/Line';
import SelectMenu from '@/components/vote/SelectMenu';
import { useRouter } from 'next/navigation';
import {useCookies} from 'react-cookie';

 function vote() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  useEffect(() => {
    const checkRefreshCookie = async () => {
      if (!cookies.refresh) {
        alert("로그인 해주세요.");
        router.push("/login")
      }
    };

    checkRefreshCookie();
  }, []);

  return (
    <Container>
      <div className="vote-leader">
        <Title content="파트장 / 데모데이 투표" />
      </div>
      <Line />
      <SelectMenu content="파트장 투표" href="/vote/part" />
      <SelectMenu content="데모데이 투표" href="/vote/demo" />
    </Container>
  );
}

export default vote;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .vote-leader {
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

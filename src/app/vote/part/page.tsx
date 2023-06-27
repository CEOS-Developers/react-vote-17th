'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Line from '@/components/common/Line';
import Header from '@/components/common/Header';
import SelectMenuResult from '@/components/vote/SelectMenuResult';
import Order from '@/components/common/Order';
import { userInfoState } from '@/atom/states';
import { useRecoilState } from 'recoil';
import getAccessToken from '@/util/getAccessToken';
import { useCookies } from 'react-cookie';
import { getIsVoted } from '@/api/requests';

function page() {
  const [cookies,setCookie,removeCookie] = useCookies();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isVoted , setIsVoted] = useState(false);
  useEffect(() => {
    const checkIsVoted = async () => {
      let accessToken = await getAccessToken(cookies,setCookie);
      const response = await getIsVoted(accessToken,userInfo.userId);
      setIsVoted(response.has_voted_part);
      console.log(userInfo.part);
    };

    checkIsVoted();
  }, []);
  return (
    <Container>
      <Order order={'1'} />
      <Header content="파트장 투표" href="/vote" />
      <Line />
      <SelectMenuResultWrapper>
        <SelectMenuResult
          content="FRONT-END br 파트장 투표"
          href="/vote/part/fe"
          resultHref="/vote/part/fe/result"
          isVoted = {isVoted}
          isShow = {userInfo.part === 2}
        />
        <SelectMenuResult
          content="BACK-END br 파트장 투표"
          href="/vote/part/be"
          resultHref="/vote/part/be/result"
          isVoted = {isVoted}
          isShow = {userInfo.part === 1}
        />
      </SelectMenuResultWrapper>
    </Container>
  );
}

export default page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectMenuResultWrapper = styled.div``;

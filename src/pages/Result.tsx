import styled from "styled-components";
import PersonInfo from "../assets/personInfo.json";
import ApiPersonInfo from "../assets/apiPersonInfo.json";

import { onVoteTeam } from "../api/post";
import { PersonCard } from "../components/PersonCard";
import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import { UserType } from "@/utils/type";
import { useRecoilValue } from "recoil";
import { userInfo } from "../utils/atom";
import { onCheckPartResult } from "../api/get";

interface IResult {
  name: string;
  part: string;
  vote_cnt: number;
}
const Result = () => {
  const [cookies] = useCookies(["client_cookie"]);
  const loginUser = useRecoilValue(userInfo);
  const [frontRes, setFrontRes] = useState<IResult[]>();
  const [backRes, setBackRes] = useState<IResult[]>([]);

  const getVoteResult = async () => {
    const params = {
      headers: {
        Authorization: `Bearer ${cookies.client_cookie}`,
      },
    };
    const frontResult = await onCheckPartResult(params, "front").then(
      (res: any) => {
        console.log(res.data);
        return res.data;
      }
    );
    const backResult = await onCheckPartResult(params, "back").then(
      (res: any) => {
        console.log(res.data);
        return res.data;
      }
    );

    setFrontRes(frontResult);
    setBackRes(backResult);
  };

  useEffect(() => {
    getVoteResult();
  }, []);
  return (
    <Wrapper>
      {frontRes && (
        <ContentContainer>
          <CardArea>
            프론트엔드 파트장 투표
            <CardContainer>
              {frontRes.map((item) => {
                let renderVal = PersonInfo.find(
                  (person) => person.name === item.name
                )!;
                return (
                  <CardWithBtn key={Number(renderVal.user_id)}>
                    <PersonCard data={renderVal} />
                    <span>
                      <div>{item.vote_cnt}표</div>
                    </span>
                  </CardWithBtn>
                );
              })}

              {/*               
              {PersonInfo.filter((item) => item.part === "frontend").map(
                (person) => {
                  let voteCnt = frontRes.find(
                    (item) => item.name === person.name
                  )!.vote_cnt;
                  return (
                    <CardWithBtn key={person.user_id}>
                      <PersonCard data={person} />
                      <span>
                        <div>{voteCnt}표</div>
                      </span>
                    </CardWithBtn>
                  );
                }
              )} */}
            </CardContainer>
          </CardArea>
          <CardArea>
            백엔드 파트장 투표
            <CardContainer>
              {backRes.map((item) => {
                let renderVal = PersonInfo.find(
                  (person) => person.name === item.name
                )!;
                return (
                  <CardWithBtn key={Number(renderVal.user_id)}>
                    <PersonCard data={renderVal} />
                    <span>
                      <div>{item.vote_cnt}표</div>
                    </span>
                  </CardWithBtn>
                );
              })}
              {/* {PersonInfo.filter((item) => item.part === "backend").map(
                (person) => {
                  let voteCnt = backRes.find(
                    (item) => item.name === person.name
                  )!.vote_cnt;
                  return (
                    <CardWithBtn key={person.user_id}>
                      <PersonCard data={person} />
                      <span>
                        <div>{voteCnt}표</div>
                      </span>
                    </CardWithBtn>
                  );
                }
              )} */}
            </CardContainer>
          </CardArea>
        </ContentContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 80%;
  height: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  & > div {
    flex-basis: 50%;
  }
`;

const CardArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 600;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;
  background-color: #fecd9b;
`;

const CardWithBtn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > span {
    text-align: center;
    margin-top: 12px;
    width: 80px;
    background-color: white;
    height: 30px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    div {
      letter-spacing: 3px;
    }
  }
`;

export default Result;

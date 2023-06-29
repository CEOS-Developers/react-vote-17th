import styled from "styled-components";
import PersonInfo from "../assets/personInfo.json";
import ApiPersonInfo from "../assets/apiPersonInfo.json";

import { onVoteCandidate } from "../api/post";
import { PersonCard } from "../components/PersonCard";
import { useCookies } from "react-cookie";
import React from "react";
import { UserType } from "@/utils/type";
import { useRecoilValue } from "recoil";
import { userInfo } from "../utils/atom";

const PartVote = () => {
  const [cookies] = useCookies(["client_cookie"]);
  const loginUser = useRecoilValue(userInfo);

  const handleVote = async (name: String) => {
    let chosenUser = Number(
      ApiPersonInfo.find((item) => item.name === name)!.user_id
    );
    try {
      const params = {
        headers: {
          Authorization: `Bearer ${cookies.client_cookie}`,
        },
      };
      const body = {
        user_name: loginUser.name,
        candidate: chosenUser, // 후보 번호
      };
      const result = await onVoteCandidate("front", body, params).then(
        (res: any) => {
          if (res.status === 200) {
            alert("투표가 완료되었습니다.");
          } else {
            console.log(res);
            alert(res.response.data.error);
          }
          return res;
        }
      );
    } catch (e) {
      console.error(e);
      alert("이미 투표하였거나, 투표 기간이 아닙니다.");
    }
  };

  const handleBtnClick = (person: UserType) => {
    console.log(person);
    let checkVal = ApiPersonInfo.find((item) => item.name === person.name);
    if (checkVal!.team.toLowerCase() === loginUser.team.toLowerCase()) {
      alert("자신의 팀에게는 투표할 수 없습니다.");
      return;
    } else if (Number(checkVal?.user_id) >= 11 && loginUser.part === "front") {
      alert("자신의 파트가 아닌 사람에게는 투표할 수 없습니다.");
      return;
    } else if (Number(checkVal?.user_id) < 11 && loginUser.part === "back") {
      alert("자신의 파트가 아닌 사람에게는 투표할 수 없습니다.");
      return;
    }
    if (window.confirm(`${person.name}님에게 투표하시겠습니까?`) === true) {
      handleVote(person.name);
      // handletest(person.name);
    } else {
      alert("취소되었습니다.");
    }
    // handleVote();
  };

  return (
    <Wrapper>
      <ContentContainer>
        <CardArea>
          프론트엔드 파트장 투표
          <CardContainer>
            {PersonInfo.filter((item) => item.part === "frontend").map(
              (person) => {
                return (
                  <CardWithBtn key={person.user_id}>
                    <PersonCard data={person} />
                    <button onClick={() => handleBtnClick(person)}>
                      <div>VOTE</div>
                    </button>
                  </CardWithBtn>
                );
              }
            )}
          </CardContainer>
        </CardArea>
        <CardArea>
          백엔드 파트장 투표
          <CardContainer>
            {PersonInfo.filter((item) => item.part === "backend").map(
              (person) => {
                return (
                  <CardWithBtn key={person.user_id}>
                    <PersonCard data={person} />
                    <button onClick={() => handleBtnClick(person)}>
                      <div>VOTE</div>
                    </button>
                  </CardWithBtn>
                );
              }
            )}
          </CardContainer>
        </CardArea>
      </ContentContainer>
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
  justify-content: space-between;
  button {
    margin-top: 12px;
    width: 80px;
    background-color: white;
    height: 30px;
    border-radius: 4px;
    overflow: hidden;

    div {
      font-family: "Inter";
      font-weight: 900;
      font-size: 36px;
      position: relative;
      transform: translate(-20%, 0%) rotate(348deg);
    }
  }
  button {
    &:hover {
      background-color: black;
      div {
        color: white;
      }
    }
  }
`;

export default PartVote;

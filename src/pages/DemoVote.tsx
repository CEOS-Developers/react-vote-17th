import styled from "styled-components";
import TeamInfo from "../assets/apiTeamInfo.json";
import ApiPersonInfo from "../assets/apiPersonInfo.json";

import { onVoteCandidate, onVoteTeam } from "../api/post";
import { PersonCard } from "../components/PersonCard";
import { useCookies } from "react-cookie";
import React from "react";
import { UserType } from "@/utils/type";
import { useRecoilValue } from "recoil";
import { userInfo } from "../utils/atom";
import { TeamCard } from "../components/TeamCard";

const DemoVote = () => {
  const [cookies] = useCookies(["client_cookie"]);
  const loginUser = useRecoilValue(userInfo);

  const handletest = (name: String) => {
    console.log(name);
  };

  const handleVote = async (name: String) => {
    let chosenTeam = Number(
      TeamInfo.find((item) => item.name === name)!.team_id
    );
    try {
      const params = {
        headers: {
          Authorization: `Bearer ${cookies.client_cookie}`,
        },
      };
      const body = {
        user_name: loginUser.name,
        team: chosenTeam, // 후보 번호
      };
      const result = await onVoteTeam(body, params);
      console.log("[Vote result]", result);
      alert("투표가 완료되었습니다.");
    } catch (e) {
      console.error(e);
      alert("이미 투표하였거나, 투표 기간이 아닙니다.");
    }
  };

  const handleClick = (team: any) => {
    if (loginUser.team.toLowerCase() === team.name.toLowerCase()) {
      alert("자신의 팀에게는 투표할 수 없습니다.");
      return;
    }
    if (window.confirm(`${team.name}에게 투표하시겠습니까?`) === true) {
      handleVote(team.name);
    } else {
      alert("취소되었습니다.");
    }
  };
  return (
    <Wrapper>
      {TeamInfo.map((team) => (
        <TeamCard
          team={Number(team.team_id)}
          type={1}
          onClick={() => handleClick(team)}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export default DemoVote;

import styled from "styled-components";
import TeamInfo from "../assets/apiTeamInfo.json";
import ApiPersonInfo from "../assets/apiPersonInfo.json";

import { onVoteCandidate, onVoteTeam } from "../api/post";
import { PersonCard } from "../components/PersonCard";
import { useCookies } from "react-cookie";
import React, { useEffect } from "react";
import { UserType } from "@/utils/type";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { userInfo } from "../utils/atom";
import { TeamCard } from "../components/TeamCard";
import { onCheckTeamResult } from "../api/get";

interface ITeamVote {
  team: string;
  vote_cnt: number;
}

const DemoResult = () => {
  const [cookies] = useCookies(["client_cookie"]);
  const loginUser = useRecoilValue(userInfo);
  const [teamVote, setTeamVote] = useState<ITeamVote[]>();

  const getVoteResult = async () => {
    const params = {
      headers: {
        Authorization: `Bearer ${cookies.client_cookie}`,
      },
    };
    const TeamResult = await onCheckTeamResult(params).then((res: any) => {
      console.log(res.data);
      return res.data;
    });
    setTeamVote(TeamResult);
  };

  useEffect(() => {
    getVoteResult();
  }, []);
  return (
    <Wrapper>
      {TeamInfo.map((team) => (
        <TeamCard
          team={Number(team.team_id)}
          type={2}
          vote={teamVote?.find((item) => item.team === team.name)?.vote_cnt}
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

export default DemoResult;

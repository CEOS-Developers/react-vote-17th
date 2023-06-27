import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

import DemoCard from "../assets/Images/img-card-demo.png";
import LeaderCard from "../assets/Images/img-card-part.png";
import VoteCard from "../assets/Images/img-card-vote.png";
import ResultCard from "../assets/Images/img-card-result.png";
import styled from "styled-components";

const MainVote = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  const VoteResult = () => {
    return (
      <VoteWrapper>
        <img
          src={VoteCard}
          alt="vote-card"
          className="vote-card"
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate("partVote")}
        />
        <img
          src={ResultCard}
          alt="result-card"
          className="vote-card"
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate("result")}
        />
      </VoteWrapper>
    );
  };
  return (
    <Main>
      <div className="main">
        {isHovered ? (
          <VoteResult />
        ) : (
          <img
            className="main-card"
            src={LeaderCard}
            alt="leader-card"
            onMouseEnter={handleMouseEnter}
          />
        )}

        <img
          className="main-card"
          alt="demo-card"
          src={DemoCard}
          onClick={() => navigate("demoVote")}
        />
      </div>
    </Main>
  );
};

export default MainVote;

const Main = styled.div`
  display: flex;
  margin: auto;
  .main {
    display: flex;
    gap: 2rem;

    &-card {
      width: 30rem;
      height: 30rem;
    }
  }
`;

const VoteWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .vote-card {
    width: 30rem;
    height: 15rem;
  }
`;

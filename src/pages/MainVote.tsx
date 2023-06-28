import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

import DemoCard from "../assets/Images/img-card-demo.png";
import LeaderCard from "../assets/Images/img-card-part.png";
import VoteCard from "../assets/Images/img-card-vote.png";
import ResultCard from "../assets/Images/img-card-result.png";
import styled from "styled-components";

const MainVote = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const navigate = useNavigate();

  const handleMouseEnter = ({ type }: IVRprops) => {
    type === 1 ? setIsHovered1(true) : setIsHovered2(true);
  };

  const handleMouseLeave = ({ type }: IVRprops) => {
    type === 1 ? setIsHovered1(false) : setIsHovered2(false);
  };

  interface IVRprops {
    type: number;
  }
  const VoteResult = ({ type }: IVRprops) => {
    let nav_vote = type === 1 ? "partVote" : "demoVote";
    let nav_res = type === 1 ? "result" : "result_demo";
    return (
      <VoteWrapper>
        <img
          src={VoteCard}
          alt="vote-card"
          className="vote-card"
          onMouseLeave={() => handleMouseLeave({ type: type })}
          onClick={() => navigate(nav_vote)}
        />
        <img
          src={ResultCard}
          alt="result-card"
          className="vote-card"
          onMouseLeave={() => handleMouseLeave({ type: type })}
          onClick={() => navigate(nav_res)}
        />
      </VoteWrapper>
    );
  };
  return (
    <Main>
      <div className="main">
        {isHovered1 ? (
          <VoteResult type={1} />
        ) : (
          <img
            className="main-card"
            alt="leader-card"
            src={LeaderCard}
            onMouseEnter={() => handleMouseEnter({ type: 1 })}
          />
        )}
        {isHovered2 ? (
          <VoteResult type={2} />
        ) : (
          <img
            className="main-card"
            alt="demo-card"
            src={DemoCard}
            onMouseEnter={() => handleMouseEnter({ type: 2 })}
          />
        )}

        {/* <img
          className="main-card"
          alt="demo-card"
          src={DemoCard}
          onClick={() => navigate("demoVote")}
        /> */}
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

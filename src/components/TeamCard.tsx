import styled from "styled-components";
import CardRepick from "../assets/Images/repick.png";
import CardBari from "../assets/Images/baribari.png";
import CardHooking from "../assets/Images/hooking.png";
import CardDans from "../assets/Images/dansupport.png";
import CardThera from "../assets/Images/therapease.png";

interface ITeamCard {
  team: number;
  onClick?: () => void;
  type: number;
  vote?: number;
}
export const TeamCard = ({ team, onClick, type, vote }: ITeamCard) => {
  if (type === 1) {
    switch (team) {
      case 1:
        return (
          <CardWithBtn>
            <Wrapper CardUrl={CardRepick} />
            <button onClick={onClick}>
              <div>VOTE</div>
            </button>
          </CardWithBtn>
        );
      case 2:
        return (
          <CardWithBtn>
            <Wrapper CardUrl={CardBari} />
            <button onClick={onClick}>
              <div>VOTE</div>
            </button>
          </CardWithBtn>
        );
      case 3:
        return (
          <CardWithBtn>
            <Wrapper CardUrl={CardHooking} />
            <button onClick={onClick}>
              <div>VOTE</div>
            </button>
          </CardWithBtn>
        );
      case 4:
        return (
          <CardWithBtn>
            <Wrapper CardUrl={CardDans} />
            <button onClick={onClick}>
              <div>VOTE</div>
            </button>
          </CardWithBtn>
        );
      default:
        return (
          <CardWithBtn>
            <Wrapper CardUrl={CardThera} />
            <button onClick={onClick}>
              <div>VOTE</div>
            </button>
          </CardWithBtn>
        );
    }
  } else {
    switch (team) {
      case 1:
        return (
          <CardWithBtn>
            <Wrapper CardUrl={CardRepick} />
            <span>{vote}표</span>
          </CardWithBtn>
        );
      case 2:
        return (
          <CardWithBtn>
            <Wrapper CardUrl={CardBari} />
            <span>{vote}표</span>
          </CardWithBtn>
        );
      case 3:
        return (
          <CardWithBtn>
            <Wrapper CardUrl={CardHooking} />
            <span>{vote}표</span>
          </CardWithBtn>
        );
      case 4:
        return (
          <CardWithBtn>
            <Wrapper CardUrl={CardDans} />
            <span>{vote}표</span>
          </CardWithBtn>
        );
      default:
        return (
          <CardWithBtn>
            <Wrapper CardUrl={CardThera} />
            <span>{vote}표</span>
          </CardWithBtn>
        );
    }
  }
};

const CardWithBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    position: relative;
    top: -120px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 60px;
    overflow: hidden;
    font-family: "Inter";
    font-weight: 900;
    font-size: 72px;
    position: relative;
    transform: translate(0%, 10%) rotate(350deg);
  }
  button {
    position: relative;
    top: -120px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 60px;
    overflow: hidden;

    div {
      font-family: "Inter";
      font-weight: 900;
      font-size: 72px;
      position: relative;
      transform: translate(0%, 10%) rotate(350deg);
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

const Wrapper = styled.div<{ CardUrl: string }>`
  width: 200px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
  background-image: url(${(props) => props.CardUrl});
`;

export default TeamCard;

// PartLeader Vote Page
import { PersonCard } from "../components/PersonCard";
import styled from "styled-components";
import PersonInfo from "../assets/personInfo.json";

const PLVote = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <CardArea>
          프론트엔드 파트장 투표
          <CardContainer>
            {PersonInfo.filter((item) => item.part === "frontend").map(
              (person) => {
                return (
                  <CardWithBtn>
                    <PersonCard
                      key={person.id}
                      data={person}
                    />
                    <button>test123</button>
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
                  <CardWithBtn>
                    <PersonCard
                      key={person.id}
                      data={person}
                    />
                    <button>test123</button>
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

export default PLVote;

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
  background-color: yellowgreen;
  padding: 20px;
`;

const CardArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardWithBtn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

import VoteRouter from "./router";
import styled from "styled-components";
import { HEADER_HEIGHT } from "./assets/constants";

function App() {
  return (
    <WrapperWithHeader>
      <VoteRouter />
    </WrapperWithHeader>
  );
}

export default App;

const WrapperWithHeader = styled.main`
  display: flex;
  margin-top: ${HEADER_HEIGHT};
  width: 100%;
`;

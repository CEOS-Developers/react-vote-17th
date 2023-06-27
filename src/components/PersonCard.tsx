import { IPersonalInfo } from "@/utils/type";
import styled from "styled-components";
import SpriteImg from "../assets/images/person_card_sprite.png";

export const PersonCard = ({ data }: IPersonalInfo) => {
  let position = `-${data.id * 100}px 0`;
  if (data.id >= 10) {
    position = `-${(data.id - 10) * 100}px -140px`;
  }

  return <Person position={position} />;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${SpriteImg});
`;

interface IPerson {
  position: string;
}

// image sprite 사용
// 가로 한칸당 100px씩
// 세로 한칸당 140px씩
const Person = styled(Wrapper)<IPerson>`
  height: 120px;
  width: 80px;
  background-size: 1225% 217%;
  background-position: ${(props) => props.position};
`;

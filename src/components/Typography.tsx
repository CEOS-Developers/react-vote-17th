import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface FontProps {
  weight?: number;
  color?: string;
  size?: string;
  inherit?: boolean;
}

/**
 * @description 메인 헤드라인(투표제목)
 * @props weight - 커스텀 font weight (디폴트 600)
 * @props size - 커스텀 font size (디폴트 2.5rem)
 * @props color - 커스텀 font color (디폴트 #384084;)
 */
const Headline = styled.header<FontProps>`
  font-family: 'Inter';
  font-weight: ${({ weight }) => (weight ? weight : 600)};
  font-size: ${({ size }) => (size ? size : '2.3rem')}; // 48px
  color: ${({ color }) => (color ? color : `var(--ceos-blue-color)`)};
  ${({ inherit }) =>
    inherit &&
    css`
      color: inherit;
    `}
  font-family: 'Inter';
  font-style: normal;

  text-align: center;
  letter-spacing: -0.022em;
  margin: 0;
`;

/**
 * @description 버튼 내부에 들어가는 텍스트
 * @props weight - 커스텀 font weight (디폴트 400)
 * @props size - 커스텀 font size (디폴트 2rem)
 * @props color - 커스텀 font color (디폴트 #FFFDFD)
 */
const ButtonText = styled.span<FontProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: ${({ weight }) => (weight ? weight : 400)};
  font-size: ${({ size }) => (size ? size : '1.1rem')};
  color: ${({ color }) => (color ? color : `#FFFDFD`)};
  ${({ inherit }) =>
    inherit &&
    css`
      color: inherit;
    `}
  margin: 0;
`;

/**
 * @description 카드 내부 타이틀 ex) 이름, 서비스명
 * @props weight - 커스텀 font weight (디폴트 600)
 * @props size - 커스텀 font size (디폴트 2.3rem)
 * @props color - 커스텀 font color (디폴트 #000000;)
 */
const Title = styled.span<FontProps>`
  font-family: 'Inter';
  font-style: normal;

  font-weight: ${({ weight }) => (weight ? weight : 600)};
  font-size: ${({ size }) => (size ? size : '2.0rem')};
  color: ${({ color }) => (color ? color : `#000000`)};
  ${({ inherit }) =>
    inherit &&
    css`
      color: inherit;
    `}
  margin: 0;
`;

/**
 * @description 커스텀 폰트
 * @props weight - 커스텀 font weight (디폴트 600)
 * @props size - 커스텀 font size (디폴트 2.5rem)
 * @props color - 커스텀 font color (디폴트 #384084;)
 */
const CustomFont = styled.span<FontProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: ${({ weight }) => (weight ? weight : 300)};
  font-size: ${({ size }) => (size ? size : '1rem')};
  color: ${({ color }) => (color ? color : `black`)};
  margin: 0;

  line-height: 150%;
  /* or 38px */
  letter-spacing: -0.022em;
`;

/**
 * @description 메인 헤드라인(투표제목)
 * @props weight - 커스텀 font weight (디폴트 600)
 * @props size - 커스텀 font size (디폴트 2.5rem)
 * @props color - 커스텀 font color (디폴트 #384084;)
 */
const Body = styled.span<FontProps>`
  font-family: 'Inter';
  font-style: normal;

  font-weight: ${({ weight }) => (weight ? weight : 500)};
  font-size: ${({ size }) => (size ? size : '0.7rem')};
  color: ${({ color }) => (color ? color : `#000000`)};
  margin: 0;
  ${({ inherit }) =>
    inherit &&
    css`
      color: inherit;
    `}
  line-height: 24px;
  letter-spacing: -0.022em;
  white-space: nowrap;
`;

export { Headline, ButtonText, CustomFont, Body, Title };

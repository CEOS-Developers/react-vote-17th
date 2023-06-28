import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface FontProps {
  weight?: number;
  color?: string;
  size?: string;
  inherit?: boolean;
}

const Headline = styled.span<FontProps>`
  font-family: 'Inter';
  font-weight: ${({ weight }) => (weight ? weight : 600)};
  font-size: ${({ size }) => (size ? size : '2.5rem')}; // 48px
  color: ${({ color }) => (color ? color : `var(--ceos-blue-color)`)};
  ${({ inherit }) =>
    inherit &&
    css`
      color: inherit;
    `}
  font-family: 'Inter';
  font-style: normal;
  line-height: 80px;
  /* or 167% */
  text-align: center;
  letter-spacing: -0.022em;
`;

const ButtonText = styled.span<FontProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  font-size: ${({ size }) => (size ? size : '1.1rem')};
  color: ${({ color }) => (color ? color : `#FFFDFD`)};
  margin: 0;
`;

const Title = styled.span<FontProps>`
  font-family: 'Inter';
  font-style: normal;

  font-weight: ${({ weight }) => (weight ? weight : 600)};
  font-size: ${({ size }) => (size ? size : '2.3rem')};
  color: ${({ color }) => (color ? color : `#000000`)};
  ${({ inherit }) =>
    inherit &&
    css`
      color: inherit;
    `}
  margin: 0;
`;

const CustomFont = styled.span<FontProps>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: ${({ weight }) => (weight ? weight : 300)};
  font-size: ${({ size }) => (size ? size : '1rem')};
  color: ${({ color }) => (color ? color : `black`)};
  ${({ inherit }) =>
    inherit &&
    css`
      color: inherit;
    `}
  margin: 0;

  line-height: 150%;
  /* or 38px */
  letter-spacing: -0.022em;
`;

const Body = styled.span<FontProps>`
  font-family: 'Inter';
  font-style: normal;

  font-weight: ${({ weight }) => (weight ? weight : 500)};
  font-size: ${({ size }) => (size ? size : '1rem')};
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

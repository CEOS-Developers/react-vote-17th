import { createGlobalStyle } from "styled-components";
import "./reset.css";

export const GlobalStyle = createGlobalStyle`
  :focus {
    outline: none;
    border: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  html {
    font-size: 10px;
    -webkit-text-size-adjust: none;
    font-family: 'sans-serif';
    scrollbar-width: none;
    background-color: #FFFFFF;
    color: #000000;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  img {
    object-fit: cover;
  }

  .button {
    &.button-right{
      &-1{
        position: absolute;
        right: 1rem;
      }

      &-2{
        position: absolute;
        right: 10rem;
      }
    }
  }
`;

import styled, { css } from "styled-components";
import { IButton } from "./props";

const modifiers = {
  active: () => css`
    box-shadow: rgb(235 235 235) 0px 6px 0px;
  `,

  default: () => css`
    background-color: white;
    color: ${(props) => props.theme.primaryColor};
  `,

  primary: () => css`
    background: ${(props) => props.theme.primaryColor};
    color: #fff;
  `
};

export const Wrapper = styled.button<IButton>`
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 22px;
  height: 55px;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  max-width: 90%;
  transition: color 0.5s ease-in-out 0s;
  box-shadow: rgb(255 255 255) 0px 6px 0px;
  
  ${({ active, variant }) => css`
    ${!active && modifiers.active()}
    ${variant === "default" ? modifiers.default() : modifiers.primary()}
  `}
`;

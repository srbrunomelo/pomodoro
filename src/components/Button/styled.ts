import styled, { css } from "styled-components";
import { IButton } from "./props";

const modifiers = {
  active: () => css` 
    opacity: 0.5;
  `,

  default: () => css` 
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
  transition: background-color 0.5s ease-in-out 0s;
  background-color: white;
   
  ${({ active, variant }) => css` 
    ${variant === "default" ? modifiers.default() : modifiers.primary()}
    ${active && modifiers.active()}
  `}
`;

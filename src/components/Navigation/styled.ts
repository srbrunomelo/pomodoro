import styled, { css } from 'styled-components'
import { INavigationItem } from "./props";

const modifiers = {
  active: () => css`
    background: rgba(0, 0, 0, 0.1);
  `
};

export const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const NavigationItem = styled.li<INavigationItem>`
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  list-style: none;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 0 10px;
  font-size: 14px;

  ${({ active }) => css`
    ${active && modifiers.active()}
  `}
`;

import styled, { css } from "styled-components";
import { IModal } from "./props";

const modifiers = {
  close: () => css`
    display: none;
  `
};

export const Wrapper = styled.div<IModal>`
  ${({ visible }) => css`
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    ${!visible && modifiers.close()}
  `}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 485px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
`;

export const Header = styled.div`
  width: 100%;
  position: relative;
`;

export const Title = styled.h5`
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  color: #bbbbbb;
`;

export const Close = styled.span`
  color: #bbbbbb;
  position: absolute;
  z-index: 3;
  cursor: pointer;
  right: 0;
  top: -5px;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  flex-direction: column;
`;

export const FormControl = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  color: #bbbbbb;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  background-color: rgb(239, 239, 239);
  font-size: 16px;
  padding: 15px;
  box-shadow: none;
  border: none;
  color: rgb(85, 85, 85);
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Notice = styled.span`
  font-size: 11px;
  color: #bbbbbb;
  margin-top: 5px;
`;

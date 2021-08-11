import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  transition: background-color 0.5s ease-in-out 0s;
  background: ${(props) => props.theme.primaryColor};
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
`;

export const Settings = styled.span`
  display: flex;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 20px;
`;
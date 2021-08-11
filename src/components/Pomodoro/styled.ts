import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 485px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 40px 20px;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Reset = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
`;

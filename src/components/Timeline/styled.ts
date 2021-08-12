import styled from 'styled-components';
import { IProgress } from './props';
 
export const Wrapper = styled.div`
  width: 100%;
  height: 3px;
  background: #D9DBD5;
  margin-top: 20px;
`;

export const Progress = styled.span<IProgress>`
  display: flex;
  width: ${({ progress }) => `${progress}%`};
  height: 3px;
  background: ${(props) => props.theme.primaryColor}; 
  transition: width 0.5s ease-in-out 0s;
`;


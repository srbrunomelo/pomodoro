import { useContext } from 'react';
import { Pomodoro, useModal } from '../../components'  
import { Wrapper, Settings } from "./styled"; 
import PomodoroContext from "../../context/pomodoro/context";

export const Home = () => {
  const { settings } = useContext(PomodoroContext)
  const { Modal, showModal } = useModal();
   
  return (
    <Wrapper> 
      <Settings disabled={settings.active} onClick={() => showModal(true)}>Settings</Settings> 
      <Modal />
      <Pomodoro />
    </Wrapper>
  );
};

import { Pomodoro, useModal } from '../../components'  
import { Wrapper, Settings } from "./styled"; 

export const Home = () => {
  const { Modal, showModal } = useModal();
   
  return (
    <Wrapper>
      <Settings onClick={() => showModal(true)}>Settings</Settings>
      <Modal />
      <Pomodoro />
    </Wrapper>
  );
};

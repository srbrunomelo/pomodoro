import React, { useState, useContext } from "react";
import { Wrapper, Container, Title, Close, Header, Footer, Body, FormControl, Label, Input, Notice } from "./styled";
import { Button } from '../'
import PomodoroContext from "../../context/pomodoro/context";

export const useModal = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { settings, update } = useContext(PomodoroContext);
 
  const Modal = () => { 
    const [pomodoro, setPomodoro] = useState(settings?.pomodoroTime);
    const [shortBreak, setShortBreak] = useState(settings?.shortRestTime);
 
    const updatePomodoro = () => {
      if (pomodoro && pomodoro < 1501 && shortBreak >= 1) {
        setVisible(false);
        update({
          ...settings,
          pomodoroTime: pomodoro,
          shortRestTime: shortBreak, 
        });
      }
    }

    return (
      <Wrapper visible={visible}>
        <Container>
          <Header>
            <Title>TIMER SETTING</Title>
            <Close onClick={() => setVisible(false)}>x</Close>
          </Header>
          <Body>
            <FormControl>
              <Label>Pomodoro (seconds)</Label>
              <Input
                type="number"
                name="pomodoro"
                value={pomodoro}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  //@ts-ignore
                  setPomodoro(e.target.value)
                }
                pattern="[0-9]*"
              />
              <Notice>Maximum time: 1500 seconds</Notice>
            </FormControl>
            <FormControl>
              <Label>Short Break (seconds)</Label>
              <Input
                type="number"
                name="shortBreak"
                value={shortBreak}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  //@ts-ignore
                  setShortBreak(e.target.value)
                }
                pattern="[0-9]*"
              />
              <Notice>Minimum time: 1second</Notice>
            </FormControl>
          </Body>
          <Footer>
            <Button 
              onClick={() => updatePomodoro()}
              variant="primary"
              label="OK"
            />
          </Footer>
        </Container>
      </Wrapper>
    );
  };

  return {
    Modal: Modal,
    showModal: (visible: boolean) => setVisible(visible)
  };
};
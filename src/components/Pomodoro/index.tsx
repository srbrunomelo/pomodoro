import { useState, useEffect, useContext, useCallback } from "react";
import { Wrapper, Actions, Reset } from "./styled";
import { Button, Navigation, Timer, Timeline } from '../' 
import { useInterval } from "../../hooks/useInrterval";
import PomodoroContext from "../../context/pomodoro/context";
import { handleStatus } from '../../helpers'

//@ts-ignore
import bellFinish from './../../assets/sounds/finish.wav';

export const Pomodoro = () => { 
  const { settings, update } = useContext(PomodoroContext);
  let time = settings.status === 'work' ? settings.pomodoroTime : settings.shortRestTime
  const [mainTime, setMainTime] = useState(time);
  const [isCounting, setIsCounting] = useState(false);
  const audioFinish = new Audio(bellFinish);
 
  useInterval(() => { 
      setMainTime(mainTime - 1);  
  }, isCounting ? 1000 : null);

  const reset = () => {
    setIsCounting(false)
    setMainTime(time)
  }

  const handleTime = () => {
    setIsCounting(!isCounting);
  }

  const completeCycle = useCallback(() => {
    audioFinish.play();
    update({ ...settings, status: handleStatus(settings.status) })
    setIsCounting(!isCounting); 
    setMainTime(settings.pomodoroTime); 
  }, [audioFinish, isCounting, settings, update])

  useEffect(() => {
    if (mainTime === 0) {
      completeCycle()
    }
  }, [mainTime, completeCycle]);
 
  useEffect(() => { 
    setMainTime( 
      time
    )
  }, [settings])
   
  return (
    <Wrapper> 
      <Navigation />
      <Timeline time={mainTime} active={isCounting} />
      <Timer mainTime={mainTime} />
      <Actions>
        <Button 
          label={isCounting ? 'stop' : 'start' } 
          active={isCounting} 
          onClick={() => handleTime()} 
        />
      </Actions>
      <Reset onClick={() => reset()}>Reset</Reset>
    </Wrapper>
  );
};

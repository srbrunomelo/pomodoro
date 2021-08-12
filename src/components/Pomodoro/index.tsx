import { useState, useEffect, useContext, useCallback } from "react";
import { Wrapper, Actions, Reset } from "./styled";
import { Button, Navigation, Timer, Timeline } from '../';
import { useInterval } from "../../hooks/useInrterval";
import PomodoroContext from "../../context/pomodoro/context";
import { handleStatus } from '../../helpers';

//@ts-ignore
import bellFinish from './../../assets/sounds/finish.wav';

export const Pomodoro = () => { 
  const audioFinish = new Audio(bellFinish);
  const { settings, update, start, stop } = useContext(PomodoroContext); 
  let time = settings.status === 'work' ? settings.pomodoroTime : settings.shortRestTime
  const [mainTime, setMainTime] = useState(time) 
  
  useInterval(() => {  
    if (mainTime > 0) {
      setMainTime(mainTime - 1)
    }else {
      completeCycle()
    }
    
  }, settings.active ? 1000 : null);

  const reset = () => { 
    update({ ...settings, active: false }) 
    setMainTime(time); 
  }

  const completeCycle = useCallback(() => {
    audioFinish.play();
    update({ 
      ...settings, 
      status: handleStatus(settings.status),
      active: false
    })
 
    setMainTime(time); 
  }, [audioFinish, settings, update])
 
  useEffect(() => { 
    setMainTime(time)
    stop(settings)
  }, [settings.status, settings.pomodoroTime, settings.shortRestTime ])
   
  return (
    <Wrapper> 
      <Navigation />
      <Timeline 
        time={mainTime} 
        duration={settings.status === 'work' ? settings.pomodoroTime : settings.shortRestTime} 
      />
      <Timer time={mainTime} />
      <Actions>
        <Button 
          label={settings.active ? 'stop' : 'start' } 
          active={settings.active} 
          variant="primary"
          onClick={() => 
            settings.active ? stop(settings) : start(settings)
          } 
        />
      </Actions>
      <Reset onClick={() => reset()}>Reset</Reset>
    </Wrapper>
  );
};

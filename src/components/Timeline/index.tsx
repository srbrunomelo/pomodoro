import { useEffect, useState, useContext } from 'react';
import { Wrapper, Progress } from './styled';
import { ITimeline } from './props';
import PomodoroContext from "../../context/pomodoro/context";

export const Timeline = ({ time, duration }:ITimeline ) => {
  const { settings } = useContext(PomodoroContext); 
  const [progress, setProgress] = useState<number>(0) 
   
  useEffect(() => { 
    if (progress === 0) setProgress(0) 
    if (settings.active) setProgress(100 - (100/duration) * time ) 
    if (progress >= 100) setProgress(0)
  }, [time, settings])

  useEffect(() => { 
    setProgress(0) 
  }, [settings.status])

  useEffect(() => { 
    if (time === duration) {
      setProgress(0) 
    }
  }, [settings.active])
  
  return (
    <Wrapper>
      <Progress progress={progress}></Progress>
    </Wrapper>
  )
}
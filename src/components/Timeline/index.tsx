import { useEffect, useState } from 'react'

import { Wrapper, Progress } from './styled'
import { ITimeline } from './props'

export const Timeline = ({ time, active }:ITimeline ) => {
  const [totalTime, setTotalTime] = useState(time)
  const [progress, setProgress] = useState<number>(0)
   
  useEffect(() => { 
    if (active) {
      setProgress( 100 - ((100/totalTime) * time)) 
    }

    if (progress === 100) { 
      setProgress(0)
    } 

    console.log('--------------')
    console.log('time', time)
    console.log('progress', progress)
    console.log('--------------')

  }, [progress, time, active, totalTime])
 
  return (
    <Wrapper>
      <Progress progress={progress} id="progress"></Progress>
    </Wrapper>
  )
}
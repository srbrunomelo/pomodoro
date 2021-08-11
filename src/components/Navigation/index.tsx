import { useContext } from "react"; 
import { Wrapper, NavigationItem } from "./styled";
import PomodoroContext from "../../context/pomodoro/context"; 

export const Navigation = () => {
  const { settings, update } = useContext(PomodoroContext)

  const setStatus = (status: string) => {
    update({ ...settings, status: status })
  }
  
  return (
    <Wrapper>
      <NavigationItem 
        onClick={() => setStatus('work')}
        active={ settings.status === 'work' ? true : false }
      >
        Pomodoro
      </NavigationItem>
      <NavigationItem 
        onClick={() => setStatus('short')}
        active={ settings.status === 'short' ? true : false }
      >
        Short Break
      </NavigationItem>
    </Wrapper> 
  )
}
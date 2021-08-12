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
        disabled={settings.active}
        onClick={() => setStatus('work')}
        active={ settings.status === 'work' ? true : false }
      >
        Pomodoro
      </NavigationItem>
      <NavigationItem 
        disabled={settings.active}
        onClick={() => setStatus('short')}
        active={ settings.status === 'short' ? true : false }
      >
        Short Break
      </NavigationItem>
    </Wrapper> 
  )
}
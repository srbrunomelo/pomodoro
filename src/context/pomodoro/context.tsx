import React, { createContext, useCallback } from "react";
import { SettingsType, PropsSettingsType } from "./props";
import { useLocalStorage } from "react-use"; 

const DEFAULT_VALUE = {
  settings: {
    pomodoroTime: 25,
    shortRestTime: 5,
    status: "work",
    active: false
  },
  update: () => {}, 
  start: () => {},
  stop: () => {}
};

const PomodoroContext = createContext<PropsSettingsType>(DEFAULT_VALUE);

const PomodoroContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useLocalStorage<SettingsType>("pomodoro-data", DEFAULT_VALUE.settings);
  
  const update = useCallback((settings: SettingsType) => {
  
    setData(settings);
  }, [setData] );

  const start = useCallback((settings: SettingsType) => {
    setData({
      ...settings,
      active: true
    });
  }, [setData] );

  const stop = useCallback((settings: SettingsType) => {
    setData({
      ...settings,
      active: false
    })
  }, [setData])
 
  return (
    //@ts-ignore
    <PomodoroContext.Provider value={{ settings: data, update, start, stop }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export { PomodoroContextProvider };
export default PomodoroContext;

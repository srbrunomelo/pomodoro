import React, { createContext, useCallback } from "react";
import { SettingsType, PropsSettingsType } from "./props";
import { useLocalStorage } from "react-use";

const DEFAULT_VALUE = {
  settings: {
    pomodoroTime: 25,
    shortRestTime: 5,
    status: "work", 
    currentTime: null,
    start: false
  },
  update: () => {}
};

const PomodoroContext = createContext<PropsSettingsType>(DEFAULT_VALUE);

const PomodoroContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useLocalStorage<SettingsType>("pomodoro-data", DEFAULT_VALUE.settings);
  
  const update = useCallback((settings: SettingsType) => {
    setData(settings);
  }, [setData] );

  return (
    //@ts-ignore
    <PomodoroContext.Provider value={{ settings: data, update }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export { PomodoroContextProvider };
export default PomodoroContext;

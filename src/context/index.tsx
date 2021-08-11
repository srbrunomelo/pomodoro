import React from "react";

import { PomodoroContextProvider } from "./pomodoro/context";

const GlobalContext: React.SFC = ({ children }) => {
  return (
    <>
      <PomodoroContextProvider>{children}</PomodoroContextProvider>
    </>
  );
};

export default GlobalContext;

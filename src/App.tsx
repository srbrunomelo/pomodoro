import { useContext } from "react";
import "./styles/global.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";

import { workTheme } from "./styles/work";
import { shorTheme } from "./styles/short";
import { Home } from "./pages/Home";

import PomodoroContext from "./context/pomodoro/context";

function App() {
  const { settings } = useContext(PomodoroContext);
 
  return (
    <ThemeProvider theme={ settings?.status === 'work' ? workTheme : shorTheme }> 
      <GlobalStyle />
      <Home /> 
    </ThemeProvider>
  );
}

export default App;

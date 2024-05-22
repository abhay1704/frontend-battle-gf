import React from "react";
import "./assests/material-theme/css/dark.css";
import "./assests/material-theme/css/light.css";
import "./App.css";
import Home from "./Components/Home";
import clickSound from "./assests/click.mp3";
import sucessSound from "./assests/button.mp3";
import { ThemeProvider } from "./ThemeProvider";

const App = () => {
  const audio = new Audio(clickSound);
  const audioS = new Audio(sucessSound);
  audio.volume = 0.1;
  audioS.volume = 0.1;

  return (
    <React.Fragment>
      <Home audio={audio} audioS={audioS}></Home>
    </React.Fragment>
  );
};

const ThemedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default ThemedApp;

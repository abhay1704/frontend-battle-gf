// This file contains the code for the Home page of the application.

import Search from "./Search";
import NavBar from "./NavBar";
import Feed from "./Feed";
import "./Home.css";
import Network from "./Network";
import Profile from "./Profile";
import { useState, useContext } from "react";
import Error from "./Error";
import { ThemeContext } from "../ThemeContext";

const Home = ({ audio, audioS }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [active, setActive] = useState("feed");
  return (
    <div className="home">
      <header>
        <div className="logo">Linked-Twitch</div>
        <Search />
        <div className="toggle" onClick={toggleTheme}>
          Toggle Theme
        </div>
      </header>
      <div className="body">
        <NavBar active={active} setActive={setActive} audio={audio} />
        {active === "feed" && <Feed audio={audio} audioS={audioS} />}
        {active === "network" && <Network audio={audio} />}
        {active === "profile" && <Profile audio={audio} />}
        {(active === "jobs" || active === "chat" || active === "notices") && (
          <Error message={"Sorry!! Page not found"} />
        )}
      </div>
    </div>
  );
};

export default Home;

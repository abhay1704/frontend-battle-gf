// This file contains the code for the Home page of the application.

import Search from "./Search";
import NavBar from "./NavBar";
import Feed from "./Feed";
import "./Home.css";
import Network from "./Network";
import Profile from "./Profile";
import { useState } from "react";
import Error from "./Error";

const Home = () => {
  const [active, setActive] = useState("feed");
  return (
    <div className="home">
      <header>
        <div className="logo">Linked-Twitch</div>
        <Search />
        <div className="toggle">Toggle Theme</div>
      </header>
      <div className="body">
        <NavBar active={active} setActive={setActive} />
        {active === "feed" && <Feed />}
        {active === "network" && <Network />}
        {active === "profile" && <Profile />}
        {(active === "jobs" || active === "chat" || active === "notices") && (
          <Error message={"Sorry!! Page not found"} />
        )}
      </div>
    </div>
  );
};

export default Home;

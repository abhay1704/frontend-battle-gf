// This file contains the code for the Home page of the application.

import Search from "./Search";
import NavBar from "./NavBar";
import Feed from "./Feed";
import "./Home.css";
import Network from "./Network";

const Home = () => {
  return (
    <div className="home">
      <header>
        <div className="logo">Linked-Twitch</div>
        <Search />
        <div className="toggle">Toggle Theme</div>
      </header>
      <div className="body">
        <NavBar />
        {/* <Feed /> */}
        <Network />
      </div>
    </div>
  );
};

export default Home;

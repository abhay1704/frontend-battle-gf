// This file contains the code for the Home page of the application.
// It contains the Search and Post components.

import Search from "./Search";
import CreatePost from "./CreatePost";
import Sorter from "./Sorter";
import NavBar from "./NavBar";
import Post from "./Post";
import Profile from "./Profile";
import FollowedHashtags from "./FollowedHashtags";
import Network from "./Network";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [postData, setPostData] = useState([
    {
      name: "Abhay Pratap Singh",
      postMessage:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio perspiciatis tempore eos nam tenetur, quod repellat aliquid, reiciendis repudiandae quasi harum ducimus aliquam nesciunt nobis nemo ipsam voluptatibus fugiat possimus?",
      url: "https://media.istockphoto.com/id/1059510610/vector/it-communication-e-learning-internet-network-as-knowledge-base.jpg?s=612x612&w=0&k=20&c=QEyHx6JnZleLmW9lYgpzvLv765rizr__5zwwKylo300=",
      postTime: new Date(),
    },
    {
      name: "John Doe",
      postMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: require("../assests/background.jpg"),
      postTime: new Date(),
    },
    {
      name: "Jane Smith",
      postMessage:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: require("../assests/background-2.jpg"),
      postTime: new Date(),
    },
  ]);

  return (
    <div className="home">
      <header>
        <div className="logo">Linked-Twitch</div>
        <Search />
        <div className="toggle">Toggle Theme</div>
      </header>
      <div className="body">
        <NavBar />
        <div className="main-content">
          <CreatePost />
          <Sorter />
          {postData.map((data) => {
            return <Post {...data} />;
          })}
        </div>
        <div className="rem-section">
          <Profile />
          <FollowedHashtags />
        </div>
      </div>
    </div>
  );
};

export default Home;

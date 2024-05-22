// This file contains the code for the Home page of the application.

import CreatePost from "./CreatePost";
import Sorter from "./Sorter";
import Post from "./Post";
import MiniProfileCard from "./MiniProfileCard";
import FollowedHashtags from "./FollowedHashtags";
import "./Home.css";
import { Fragment } from "react";
import { useState, useEffect } from "react";

const Feed = ({ audio, audioS }) => {
  const [postData, setPostData] = useState(() => {
    const savedData = localStorage.getItem("postData");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [
        {
          name: "Abhay Pratap Singh",
          postMessage:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio perspiciatis tempore eos nam tenetur, quod repellat aliquid, reiciendis repudiandae quasi harum ducimus aliquam nesciunt nobis nemo ipsam voluptatibus fugiat possimus?",
          url: "https://media.istockphoto.com/id/1059510610/vector/it-communication-e-learning-internet-network-as-knowledge-base.jpg?s=612x612&w=0&k=20&c=QEyHx6JnZleLmW9lYgpzvLv765rizr__5zwwKylo300=",
          postTime: new Date(),
        },
        {
          name: "John Doe",
          postMessage:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem("postData", JSON.stringify(postData));
  }, [postData]);

  return (
    <Fragment>
      <div className="main-content">
        <CreatePost setPostData={setPostData} audioS={audioS} />
        <Sorter />
        {postData
          .sort(
            (a, b) =>
              new Date(b.postTime).getTime() - new Date(a.postTime).getTime()
          )
          .map((data, i) => {
            return <Post {...data} key={i} audio={audio} />;
          })}
      </div>
      <div className="rem-section">
        <MiniProfileCard />
        <FollowedHashtags />
      </div>
    </Fragment>
  );
};

export default Feed;

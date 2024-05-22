import React from "react";
import "./Post.css";
import avatar from "../assests/avatar.jpg";
// import postImage from "../assests/pexels-pixabay-301920.jpg";
import { AiFillLike } from "react-icons/ai";
import { FaSquareShareNodes } from "react-icons/fa6";
import { FaCommentAlt } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Post = ({ name, postTime, postMessage, url }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="post-dismiss">
        <IoCloseSharp />
      </div>
      {/* Post content */}
      <div className="post-content">
        <div className="post-header">
          <img src={avatar} alt="User Avatar" className="user-avatar" />

          <h3 className="user-name">{name}</h3>

          <p className="post-timestamp">{postTime.toLocaleString()}</p>
        </div>

        <p className="post-body">{postMessage}</p>

        <img src={url} alt="Post-attachment" className="post-image" />

        <div className="post-actions">
          <button className="like-button" onClick={toggleLike}>
            {liked ? <AiFillLike /> : <AiOutlineLike />}
          </button>
          <button className="comment-button">
            <FaCommentAlt />
          </button>
          {/* Share button */}
          <button className="share-button">
            <FaSquareShareNodes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

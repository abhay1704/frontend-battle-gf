import React from "react";
import "./FollowedHashtags.css";

const FollowedHashtags = () => {
  const hashtags = [
    "programming",
    "webdevelopment",
    "javascript",
    "react",
    "python",
    "java",
    "Artificial Intelligence",
    ];
    

  return (
    <div className="hashtags-card">
      <div className="card-header">
        <h3>Followed Hashtags</h3>
      </div>
      <div className="card-body">
        <ul>
          {hashtags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FollowedHashtags;

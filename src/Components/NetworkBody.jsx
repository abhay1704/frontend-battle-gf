import React from "react";
import "./Network.css";
import avatar from "../assests/avatar.jpg";

const NetworkBody = ({ audio }) => {
  const toggleActive = (e) => {
    if (!e.target.closest("button")) return;
    audio.play();
    if (e.target.classList.contains("active")) return;

    e.target.parentNode.childNodes.forEach((child) => {
      if (child !== e.target) child.classList.remove("active");
    });

    e.target.classList.add("active");
  };

  return (
    <div className="network-body">
      <div className="invitation">
        <div className="header" onClick={toggleActive}>
          <button className="received active">RECEIVED</button>
          <button className="sent">SENT</button>
        </div>

        <div className="inline">
          <hr />
          <p id="invitations-msg">
            You have 2{" "}
            <span
              style={{
                color: "var(--md-sys-color-primary)",
              }}
            >
              new invitations
            </span>
          </p>
          <hr />
        </div>

        <div className="invitation-body">
          <div className="invitation-card">
            <div className="invitation-card-header">
              <img src={avatar} alt="avatar" />
            </div>

            <div className="about">
              <h3>John Doe</h3>
              <p>Software Developer</p>
              <p>Google</p>
            </div>
            <button className="accept">Accept</button>
            <button className="reject">Reject</button>
          </div>
          <div className="invitation-card">
            <div className="invitation-card-header">
              <img src={avatar} alt="avatar" />
            </div>

            <div className="about">
              <h3>John Doe</h3>
              <p>Software Developer</p>
              <p>Google</p>
            </div>
            <button className="accept">Accept</button>
            <button className="reject">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkBody;

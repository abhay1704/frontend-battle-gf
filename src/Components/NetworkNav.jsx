import React from "react";
import "./Network.css";
import { FaLink } from "react-icons/fa6";
import { MdInsertInvitation } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { SiPowerpages } from "react-icons/si";

const ConnectionNav = () => {
  return (
    <div className="network-nav">
      <div className="network-nav-item active">
        <span className="network-icon">
          <FaLink />
        </span>
        Connections
      </div>
      <div className="network-nav-item">
        <span className="network-icon">
          <MdInsertInvitation />
        </span>
        Invitations
      </div>
      <div className="network-nav-item">
        <span className="network-icon">
          <SiPowerpages />
        </span>
        Pages
      </div>
      <div className="network-nav-item">
        <span className="network-icon">
          <FaRegBuilding />
        </span>
        Team Mates
      </div>
      <div className="network-nav-item">
        <span className="network-icon">
          <RiTeamFill />
        </span>
        Groups
      </div>
    </div>
  );
};

export default ConnectionNav;

import React from "react";
import "./Network.css";
import { FaLink } from "react-icons/fa6";
import { MdInsertInvitation } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { SiPowerpages } from "react-icons/si";

const ConnectionNav = ({ active, setActive }) => {
  const toggleActive = (e) => {
    const target = e.target.closest(".network-nav-item");
    if (!target) return;
    if (target.classList.contains("active")) return;

    target.parentNode.childNodes.forEach((child) => {
      child.classList.remove("active");
    });

    target.classList.add("active");
    setActive(target.getAttribute("value"));
  };

  return (
    <div className="network-nav" onClick={toggleActive}>
      <div
        className={
          active === "connection"
            ? "network-nav-item active"
            : "network-nav-item"
        }
        value="connection"
      >
        <span className="network-icon">
          <FaLink />
        </span>
        Connections
        <span className="number">73</span>
      </div>
      <div
        className={
          active === "invitations"
            ? "network-nav-item active"
            : "network-nav-item"
        }
        value="invitations"
      >
        <span className="network-icon">
          <MdInsertInvitation />
        </span>
        Invitations
        <span className="number">2</span>
      </div>
      <div
        className={
          active === "pages" ? "network-nav-item active" : "network-nav-item"
        }
        value="pages"
      >
        <span className="network-icon">
          <SiPowerpages />
        </span>
        Pages
        <span className="number">17</span>
      </div>
      <div
        className={
          active === "teamMates"
            ? "network-nav-item active"
            : "network-nav-item"
        }
        value="teamMates"
      >
        <span className="network-icon">
          <FaRegBuilding />
        </span>
        Team Mates
      </div>
      <div
        className={
          active === "groups" ? "network-nav-item active" : "network-nav-item"
        }
        value="groups"
      >
        <span className="network-icon">
          <RiTeamFill />
        </span>
        Groups
        <span className="number">3</span>
      </div>
    </div>
  );
};

export default ConnectionNav;

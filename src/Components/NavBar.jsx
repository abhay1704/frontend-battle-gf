import { SlFeed } from "react-icons/sl";
import { IoMdGitNetwork, IoMdNotifications } from "react-icons/io";
import { MdOutlineWork, MdChatBubble } from "react-icons/md";
import "./NavBar.css";
import { BsArrowBarLeft } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import { useEffect, useRef } from "react";

export const NavBar = ({ active, setActive }) => {
  const navtoggleRef = useRef(null);
  const navRef = useRef(null);

  const toggleActive = (e) => {
    const x = e.target.closest(".nav-link");
    if (!x) return;

    if (x.classList.contains("active")) return;

    x.parentNode.childNodes.forEach((child) => {
      child.classList.remove("active");
    });

    x.classList.add("active");
    setActive(x.getAttribute("value"));
  };

  useEffect(() => {
    console.log("Use Effect called");
    const handleClick = (event) => {
      navRef.current.classList.toggle("nav-close");
    };

    if (navtoggleRef.current && navRef.current) {
      navtoggleRef.current.addEventListener("click", handleClick);
    } else {
      console.error("Elements not found");
    }

    // Cleanup function
    return () => {
      if (navtoggleRef.current) {
        navtoggleRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="nav-bar nav-close" ref={navRef}>
      <div className="nav-collapse" ref={navtoggleRef}>
        <BsArrowBarLeft />
      </div>
      <ul onClick={toggleActive}>
        <li
          className={active === "profile" ? "nav-link active" : "nav-link"}
          value="profile"
        >
          <div className="nav-icon">
            <FaUser />
          </div>
          <div className="nav-text">Profile</div>
        </li>
        <li
          className={active === "feed" ? "nav-link active" : "nav-link"}
          value="feed"
        >
          <div className="nav-icon">
            <SlFeed />
          </div>
          <div className="nav-text">Feed</div>
        </li>
        <li
          className={active === "network" ? "nav-link active" : "nav-link"}
          value="network"
        >
          <div className="nav-icon">
            <IoMdGitNetwork />
          </div>
          <div className="nav-text">Network</div>
        </li>
        <li
          className={active === "jobs" ? "nav-link active" : "nav-link"}
          value="jobs"
        >
          <div className="nav-icon">
            <MdOutlineWork />
          </div>
          <div className="nav-text">Jobs</div>
        </li>
        <li
          className={active === "chat" ? "nav-link active" : "nav-link"}
          value="chat"
        >
          <div className="nav-icon">
            <MdChatBubble />
          </div>
          <div className="nav-text">Chat</div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

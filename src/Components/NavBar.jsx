import { SlFeed } from "react-icons/sl";
import { IoMdGitNetwork, IoMdNotifications } from "react-icons/io";
import { MdOutlineWork, MdChatBubble } from "react-icons/md";
import "./NavBar.css";
import { BsArrowBarLeft } from "react-icons/bs";

import { useEffect, useRef } from "react";

export const NavBar = () => {
  const navtoggleRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    console.log("Use Effect called");
    const handleClick = (event) => {
      event.stopPropagation();
      event.preventDefault();
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
      <ul>
        <li className="nav-link active">
          <div className="nav-icon">
            <SlFeed />
          </div>
          <div className="nav-text">Feed</div>
        </li>
        <li className="nav-link">
          <div className="nav-icon">
            <IoMdGitNetwork />
          </div>
          <div className="nav-text">Network</div>
        </li>
        <li className="nav-link">
          <div className="nav-icon">
            <MdOutlineWork />
          </div>
          <div className="nav-text">Jobs</div>
        </li>
        <li className="nav-link">
          <div className="nav-icon">
            <MdChatBubble />
          </div>
          <div className="nav-text">Chat</div>
        </li>
        <li className="nav-link">
          <div className="nav-icon">
            <IoMdNotifications />
          </div>
          <div className="nav-text">Notices</div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

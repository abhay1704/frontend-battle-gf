import React from "react";
import { BiError } from "react-icons/bi";
import "./Error.css";

const Error = ({ message }) => {
  const styleIcon = {
    backgroundColor: "transparent",
    color: "var(--md-sys-color-on-error)",
  };

  // const styleMsg = {

  // }
  return (
    <div className="error-container">
      <div className="icon" style={styleIcon}>
        <BiError />
      </div>
      <p className="error-message">{message}</p>
    </div>
  );
};

export default Error;

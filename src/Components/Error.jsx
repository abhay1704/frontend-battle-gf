import React from "react";
import { BiError } from "react-icons/bi";

const Error = ({ message }) => {
  const styleErrorContainer = {
    width: "80%",
    padding: "2rem",
    borderRadius: "10px",
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--md-sys-color-error)",
    color: "var(--md-sys-color-on-error)",
    position: "absolute",
    top: "calc(50% - 25vh)",
    maxWidth: "100%",
    };
    
    const styleIcon = {
        backgroundColor: 'transparent',
        color : 'var(--md-sys-color-on-error)'
    } 

  // const styleMsg = {

  // }
  return (
    <div className="error-container" style={styleErrorContainer}>
      <div className="icon" style={styleIcon}>
        <BiError />
      </div>
      <p className="error-message">{message}</p>
    </div>
  );
};

export default Error;

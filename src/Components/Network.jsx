import React, { useState } from "react";
import NetworkNav from "./NetworkNav";
import NetworkBody from "./NetworkBody";
import Error from "./Error";

const Network = ({ audio }) => {
  const [active, setActive] = useState("invitations");
  console.log(active);

  return (
    <div className="network">
      <div className="rem-section">
        <NetworkNav active={active} setActive={setActive} audio={audio} />
      </div>
      <div className="main-content">
        {active === "invitations" ? (
          <NetworkBody audio={audio} />
        ) : (
          <Error message="Sorry Page Not found" />
        )}
      </div>
    </div>
  );
};

export default Network;

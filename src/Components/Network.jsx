import React, { act, useState } from "react";
import NetworkNav from "./NetworkNav";
import NetworkBody from "./NetworkBody";
import Error from "./Error";

const Network = () => {
  const [active, setActive] = useState("invitations");
  console.log(active);

  return (
    <div className="network">
      <div className="rem-section">
        <NetworkNav active={active} setActive={setActive} />
      </div>
      <div className="main-content">
        {active === "invitations" ? (
          <NetworkBody />
        ) : (
          <Error message="Sorry Page Not found" />
        )}
      </div>
    </div>
  );
};

export default Network;

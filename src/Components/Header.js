import React from "react";
// import { Link } from "react-router-dom";
import OffcanvasExample from "./NavBar";

function Header() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "5.5vh",
        }}
      >
        <h1>Gee's Calm Balm</h1>
      </div>
      <OffcanvasExample />
    </React.Fragment>
  );
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import OffcanvasExample from "./navbar";

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
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/sign-in" style={{ textDecoration: "none" }}>
        {" "}
        Sign In
      </Link>
    </React.Fragment>
  );
}

export default Header;

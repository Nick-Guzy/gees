import React from "react";
import { Link } from "react-router-dom";
import OffcanvasExample from "./NavBar";

function Header() {
  return (
    <React.Fragment>
      <h1>Gee's Calm Balm</h1>
      <OffcanvasExample />
      <Link to="/">Home</Link>
      <Link to="/sign-in">Sign In</Link>
    </React.Fragment>
  );
}

export default Header;
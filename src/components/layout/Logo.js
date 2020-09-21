import React from "react";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import "./style.css"

const Logo = (props) => {
  return (
    <Link to="/" >
      <img src={logo} className="brand-logo logo" alt="לוגו" style={props.style} />
    </Link>
  );
};

export default Logo;

import React from "react";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import "./style.css"

const Logo = () => {
  return (
    <Link to="/" className="brand-logo logo responsive-img">
      <img src={logo} alt="לוגו" style={{ height: 80, }} />
    </Link>
  );
};

export default Logo;

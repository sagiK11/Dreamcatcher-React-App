import React from "react";
import Logo from "../../img/logo.svg";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/" className="brand-logo">
      <img src={Logo} alt="לוגו" className="responsive-img" style={{ height: 64 }} />
    </Link>
  );
};

export default NavLogo;

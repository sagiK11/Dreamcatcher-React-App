import React from "react";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="nav-warpper pink lighten-5">
      <div className="container">
        <NavLogo />
        <NavLinks />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;

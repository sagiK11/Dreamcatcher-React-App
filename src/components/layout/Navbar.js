import React from "react";
import NavLogo from "./NavLogo";
import MobileNav from "./MobileNav";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { connect } from "react-redux"

const Navbar = (props) => {
  const { auth } = props;
  const navLinks = auth.uid ? <SignInLinks user={props} /> : <SignOutLinks />;
  return (
    <nav className="nav-warpper dream-edges">
      <div className="container">
        <NavLogo />
        {auth.isLoaded && navLinks}
        <MobileNav auth={auth} />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(Navbar);

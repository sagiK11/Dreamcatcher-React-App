import React, { Component } from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { connect } from "react-redux";
import "./style.css";

class Navbar extends Component {
  state = {
    isShowing: true,
    scrollPos: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this, this.handleScroll);
  }

  handleScroll = () => {
    const top = document.body.getBoundingClientRect().top;
    this.setState({
      scrollPos: top,
      isShowing: this.state.scrollPos < top,
    });
    //On largers screen (over 960px width) navbar will hide on scroll down.
    const SM_SIZE = 960;
    const isSM = window.innerWidth <= SM_SIZE;
    if (!isSM) {
      document.getElementById("navbar").style.top = this.state.isShowing
        ? "0"
        : "-5em";
    }
  };

  render() {
    const { auth } = this.props;
    const navLinks = auth.uid ? (
      <SignInLinks auth={this.props.auth} profile={this.props.profile} />
    ) : (
      <SignOutLinks />
    );
    return (
      <div>
        <div className="navbar-fixed">
          <nav
            className="nav-warpper dream-edges"
            id="navbar"
            style={{
              position: "fixed",
              transition: "top 0.5s",
              top: "0",
              zIndex: "1",
            }}
          >
            {auth.isLoaded && navLinks}
            <MobileNav auth={auth} />
            <Logo />
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);

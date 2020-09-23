import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import "./style.css";

class MobileNav extends Component {
  render() {
    const links = this.props.auth.uid ? (
      <SignedInLinks func={this.props.signOut} />
    ) : (
      <SignedOutLinks />
    );
    return (
      <div>
        <a href="/" className="sidenav-trigger" data-target="mobile-menu">
          <i className="material-icons black-text">menu</i>
        </a>
        <ul
          className="sidenav side-nav"
          id="mobile-menu"
          style={{ postion: "fixed", zIndex: "1" }}
        >
          <li>
            <a href="/" className="black-text">
              בית
            </a>
          </li>
          <li>
            <a href="/shop" className="black-text">
              חנות
            </a>
          </li>
          <li>
            <a href="/personal-orders" className="black-text">
              הזמנות אישיות
            </a>
          </li>
          <li>
            <a href="/shipping-policy" className="black-text">
              מדיניות משלוחים
            </a>
          </li>
          <li>
            <a href="/about" className="black-text">
              קצת עליי
            </a>
          </li>
          <li>
            <a href="/cart" className="black-text">
              הסל שלי
            </a>
          </li>
          {links}
        </ul>
      </div>
    );
  }
}

const SignedOutLinks = () => {
  return (
    <li>
      {" "}
      <a href="/authentication" className="black-text">
        התחברות/הרשמה
      </a>{" "}
    </li>
  );
};
const SignedInLinks = (props) => {
  return (
    <li>
      {" "}
      <a href="/" onClick={props.func} className="black-text">
        התנתקות
      </a>{" "}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(MobileNav);

import React, { Component } from "react";
import { connect } from "react-redux"
import { signOut } from "../../store/actions/authActions"


class MobileNav extends Component {
  render() {
    const links = this.props.auth.uid ? <SignedInLinks func={this.props.signOut} /> : <SignedOutLinks />;
    return (
      <div>
        <a href="/" className="sidenav-trigger" data-target="mobile-menu">
          <i className="material-icons black-text">menu</i>
        </a>
        <ul className="sidenav grey lighten-2" id="mobile-menu" dir="rtl">
          <li> <a href="/" className="black-text"> בית </a></li>
          <li> <a href="/shop" className="black-text">  חנות </a> </li>
          <li> <a href="/personal-orders" className="black-text"> הזמנות אישיות </a> </li>
          <li> <a href="/shipping-policy" className="black-text"> מדיניות משלוחים </a></li>
          <li> <a href="/about" className="black-text">קצת עליי </a></li>
          {links}
        </ul>
      </div >
    );
  }
}



const SignedOutLinks = () => {
  return (
    <div>
      <li> <a href="/signin" className="black-text">התחברות</a> </li>
      <li> <a href="/signup" className="black-text">הרשמה</a> </li>
    </div>
  );

}
const SignedInLinks = (props) => {
  return (
    <li> <a href="/" onClick={props.func} className="black-text">התנתקות</a> </li>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(null, mapDispatchToProps)(MobileNav);



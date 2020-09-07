import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux"
import { signOut } from "../../store/actions/authActions"


const SignInLinks = (props) => {
    const adminEmail = "sagi@gmail.com"
    const admin = props.user.auth.email === adminEmail;
    const addItemLink = admin ? <NavLink to="/add-item" className="black-text">הוספת פריט</NavLink> : null;

    return (
        <ul className="right hide-on-med-and-down">
            <li> <a href="/" onClick={props.signOut} className="black-text">התנתקות</a> </li>
            <li> {addItemLink}</li>
            <li> <NavLink to="/about" className="black-text">קצת עליי</NavLink> </li>
            <li> <NavLink to="/shipping-policy" className="black-text">מדיניות משלוחים</NavLink> </li>
            <li> <NavLink to="/personal-orders" className="black-text"> הזמנות אישיות</NavLink> </li>
            <li> <NavLink to="/shop" className="black-text"> חנות </NavLink></li>
            <li> <NavLink to="/" className="black-text"> בית </NavLink></li>
            <li>
                <div className="blue-text">
                    שלום   {props.user.profile.firstName} {props.user.profile.lastName}
                </div></li>
        </ul>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks);

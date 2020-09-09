import React from "react";
import { NavLink } from "react-router-dom";


const SignOutLinks = () => {
    return (
        <ul className="right hide-on-med-and-down">
            <li> <NavLink to="/signin" className="black-text">התחברות</NavLink> </li>
            <li> <NavLink to="/signup" className="black-text">הרשמה</NavLink> </li>
            <li> <NavLink to="/about" className="black-text">קצת עליי</NavLink> </li>
            <li> <NavLink to="/shipping-policy" className="black-text">מדיניות משלוחים</NavLink> </li>
            <li> <NavLink to="/personal-orders" className="black-text"> הזמנות אישיות</NavLink> </li>
            <li> <NavLink to="/shop" className="black-text"> חנות </NavLink></li>
            <li> <NavLink to="/" className="black-text"> בית </NavLink></li>
        </ul >
    );
};
export default SignOutLinks;

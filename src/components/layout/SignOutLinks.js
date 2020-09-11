import React from "react";
import { NavLink } from "react-router-dom";


const SignOutLinks = () => {
    return (
        <ul className="right hide-on-med-and-down">
            <li> <NavLink to="/signin" className="link">התחברות</NavLink> </li>
            <li> <NavLink to="/signup" className="link">הרשמה</NavLink> </li>
            <li> <NavLink to="/about" className="link">קצת עליי</NavLink> </li>
            <li> <NavLink to="/shipping-policy" className="link">מדיניות משלוחים</NavLink> </li>
            <li> <NavLink to="/personal-orders" className="link"> הזמנות אישיות</NavLink> </li>
            <li> <NavLink to="/shop" className="link"> חנות </NavLink></li>
            <li> <NavLink to="/" className="link"> בית </NavLink></li>
        </ul >
    );
};
export default SignOutLinks;

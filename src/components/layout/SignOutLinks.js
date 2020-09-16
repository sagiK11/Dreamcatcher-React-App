import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux"
import CartIcon from "./CartIcon"



const SignOutLinks = (props) => {
    const itemsNumber = props.cart.itemsNumber;
    return (
        <ul className="right hide-on-med-and-down">
            <li> <NavLink to="/signin" className="link">התחברות</NavLink> </li>
            <li> <NavLink to="/signup" className="link">הרשמה</NavLink> </li>
            <li> <NavLink to="/about" className="link">קצת עליי</NavLink> </li>
            <li> <NavLink to="/shipping-policy" className="link">מדיניות משלוחים</NavLink> </li>
            <li> <NavLink to="/personal-orders" className="link"> הזמנות אישיות</NavLink> </li>
            <li> <NavLink to="/shop" className="link"> חנות </NavLink></li>
            <li> <NavLink to="/" className="link"> בית </NavLink></li>
            <li> <CartIcon itemsNumber={itemsNumber} /></li>
        </ul >
    );
};
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}
export default connect(mapStateToProps)(SignOutLinks);



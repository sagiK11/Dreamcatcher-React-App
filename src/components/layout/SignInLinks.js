import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux"
import { signOut } from "../../store/actions/authActions"
import CartIcon from "./CartIcon"



const SignInLinks = (props) => {
    const itemsNumber = props.cart.itemsNumber;
    const adminEmail = "sagi@gmail.com"
    const admin = props.user.auth.email === adminEmail;
    const addItemLink = admin ? <NavLink to="/add-item" className="black-text">הוספת פריט</NavLink> : null;

    return (
        <ul className="right hide-on-med-and-down">
            <li> <a href="/" onClick={props.signOut} className="link">התנתקות</a> </li>
            <li> {addItemLink}</li>
            <li> <NavLink to="/about" className="link">קצת עליי</NavLink> </li>
            <li> <NavLink to="/shipping-policy" className="link">מדיניות משלוחים</NavLink> </li>
            <li> <NavLink to="/personal-orders" className="link"> הזמנות אישיות</NavLink> </li>
            <li> <NavLink to="/shop" className="link"> חנות </NavLink></li>
            <li> <NavLink to="/" className="link"> בית </NavLink></li>
            <li className="user-name">
                שלום   {props.user.profile.firstName} {props.user.profile.lastName}
            </li>
            <li> <CartIcon itemsNumber={itemsNumber} /></li>
        </ul >
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks);

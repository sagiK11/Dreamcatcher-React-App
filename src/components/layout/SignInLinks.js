import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux"
import { signOut } from "../../store/actions/authActions"
import Box from '@material-ui/core/Box';



const SignInLinks = (props) => {
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
            <li className="nav-cart black-text">
                <Box display="flex">
                    <span className="cart-length ">0</span>
                    <i className="material-icons black-text prefix">shopping_cart</i>
                </Box>
            </li>
        </ul >
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks);

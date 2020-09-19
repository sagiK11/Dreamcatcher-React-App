import React from "react";
import { NavLink } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const CartIcon = (props) => {
    return (
        <NavLink to="/cart" className="nav-cart">
            <Badge badgeContent={props.itemsNumber} showZero color="primary">
                <ShoppingBasketIcon style={{ color: "black" }} />
            </Badge>
        </NavLink>
    );

}
export default CartIcon

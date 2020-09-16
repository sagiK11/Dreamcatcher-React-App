import React from "react";
import { NavLink } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const CartIcon = (props) => {
    return (
        <NavLink to="/cart" className="nav-cart">
            <Grid container >
                <span className="cart-length fa pink-text lighten-5 "
                    style={{ marginTop: "0.6em" }}>{props.itemsNumber}</span>
                <span><Icon>shopping_basket_icon</Icon></span>
            </Grid>
        </NavLink>
    );

}
export default CartIcon
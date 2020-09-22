import React from "react";
import { NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Tooltip from "@material-ui/core/Tooltip";

const CartIcon = (props) => {
  return (
    <Tooltip title="סל הקניות" aria-label="סל הקניות">
      <NavLink to="/cart" className="nav-cart">
        <Badge badgeContent={props.itemsNumber} showZero color="primary">
          <ShoppingBasketIcon style={{ color: "black" }} />
        </Badge>
      </NavLink>
    </Tooltip>
  );
};
export default CartIcon;

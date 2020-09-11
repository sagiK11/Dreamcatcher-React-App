import React from "react";
import { NavLink } from "react-router-dom";


const NavLinks = () => {
  return (
    <ul className="container">
      <li> <NavLink to="/" className="black-text"> בית </NavLink></li>
      <li> <NavLink to="/shop" className="black-text"> חנות </NavLink></li>
      <li> <NavLink to="/personal-orders" className="black-text"> הזמנות אישיות</NavLink> </li>
      <li> <NavLink to="/shipping-policy" className="black-text">מדיניות משלוחים</NavLink> </li>
      <li> <NavLink to="/about" className="black-text">קצת עליי</NavLink> </li>
    </ul>
  );
};
export default NavLinks;

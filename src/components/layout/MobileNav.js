import React from "react";

const MobileNav = () => {
  return (
    <div>
      <a href="" className="sidenav-trigger" data-target="mobile-menu">
        <i className="material-icons">menu</i>
      </a>

      <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li> <a href="#" className="black-text">קצת עליי </a></li>
        <li> <a href="#" className="black-text"> מדיניות משלוחים </a></li>
        <li> <a href="#" className="black-text"> הזמנות אישיות </a> </li>
        <li><a href="#" className="black-text">  חנות </a> </li>
      </ul>
    </div>
  );
};
export default MobileNav;

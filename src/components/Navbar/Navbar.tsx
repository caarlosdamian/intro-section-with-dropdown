import React from "react";
import { dropDownHeaders, headers } from "../../utils/data";
import logo from "../../images/logo.svg";
import iconArrow from "../../images/icon-arrow-down.svg";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar__container">
      <div className="navbar__left">
        <img src={logo} alt="logo" className="navbar__logo" />
        {dropDownHeaders.map((item) => (
          <div key={item.id} className="dropdown__container-span">
            <span className="navbar__span">{item.label}</span>
            <span className="navbar__span">
              <img
                src={iconArrow}
                alt="iconArrow"
                className="navbar__span-icon"
              />
            </span>
          </div>
        ))}
        {headers.map((item) => (
          <span key={item.id} className="navbar__span">
            {item.label}
          </span>
        ))}
      </div>
      <div className="navbar__right">
        <span className="navbar__span">Login</span>
        <button className="navbar__button">Register</button>
      </div>
    </nav>
  );
};

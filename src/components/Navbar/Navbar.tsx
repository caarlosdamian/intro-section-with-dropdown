import React from "react";
import { dropDownHeaders, headers } from "../../utils/data";
import logo from "../../images/logo.svg";
import iconArrow from "../../images/icon-arrow-down.svg";
import iconArrowUp from "../../images/icon-arrow-up.svg";
import "./Navbar.css";
import { DropDown } from "../DropDown/DropDown";
import { useDropDownSow } from "../../hooks/useDropDownShow";

export const Navbar = () => {
  const { handleClick, state } = useDropDownSow();
  const { dropCompany, dropFeatures } = state;
  const arrows = () => {

  }
  return (
    <nav className="navbar__container">
      <div className="navbar__left">
        <img src={logo} alt="logo" className="navbar__logo" />
        <DropDown
          left={dropDownHeaders[0].left}
          top={dropDownHeaders[0].top}
          height={dropDownHeaders[0].height}
          width={dropDownHeaders[0].width}
          options={dropDownHeaders[0].options}
          display={dropFeatures}
        />
        <DropDown
          left={dropDownHeaders[1].left}
          top={dropDownHeaders[1].top}
          height={dropDownHeaders[1].height}
          width={dropDownHeaders[1].width}
          options={dropDownHeaders[1].options}
          display={dropCompany}
        />
        {dropDownHeaders.map((item) => (
          <>
            <div
              key={item.id}
              className="dropdown__container-span"
              onClick={() => handleClick(item.dropbox)}
            >
              <span className="navbar__span">{item.label}</span>
              <span className="navbar__span">
                <img
                  src={
                    dropFeatures && item.id === "d1"
                      ? iconArrowUp
                      : dropCompany && item.id === "d2"
                        ? iconArrowUp
                        : iconArrow
                  }
                  alt="iconArrow"
                  className="navbar__span-icon"
                />
              </span>
            </div>
          </>
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

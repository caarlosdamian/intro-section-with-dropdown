import React from "react";
import { useDropDownSow } from "../../hooks/useDropDownShow";
import close from "../../images/icon-close-menu.svg";
import { dropDownHeaders, headers } from "../../utils/data";
import iconArrow from "../../images/icon-arrow-down.svg";
import iconArrowUp from "../../images/icon-arrow-up.svg";
import "./Sidebar.css";
import { DropDown } from "../DropDown/DropDown";
import { SimilarProps } from "../../interfaces/interfaces";

export const Sidebar = ({setshowSidebar,showSidebar}:SimilarProps) => {
  const { handleClick, state } = useDropDownSow();
  const { dropCompany, dropFeatures } = state;
  return (
    <div className="sidebar__container">
      <div className="sidebar__left"></div>
      <div className="sidebar__right">
        <div className="sidebar__right-top">
          <img src={close} alt="close" className="sidebar__close-icon" onClick={()=>setshowSidebar(!setshowSidebar)} />
        </div>
        <div className="sidebar__right-bottom">
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
              <DropDown
                options={item.options}
                display={item.label === "Feature" ? dropFeatures : dropCompany}
              />
            </>
          ))}

          {headers.map((item) => (
            <span key={item.id} className="navbar__span">
              {item.label}
            </span>
          ))}
          <>
            <span id="sidebar_span" className="navbar__span">
              Login
            </span>
            <button id="sidebar_button" className="navbar__button">
              Register
            </button>
          </>
        </div>
      </div>
    </div>
  );
};

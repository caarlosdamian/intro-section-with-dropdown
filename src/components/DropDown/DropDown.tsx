import React from "react";
import { Options } from "../../interfaces/interfaces";
import "./DropDown.css";

interface Props {
  left?: string;
  top?: string;
  height?: string;
  width?: string;
  options?: Options[];
  display?:boolean
}

export const DropDown = ({ left, top, height, width, options,display }: Props) => {

  const Dropdowns = options[1]?.icon
    ? options?.map((option) => (
        <div  key={option.icon} className="drop__item-container">
          <img src={option.icon} alt={option.icon} className="drop__image" />
          <li className="drop__list-item">{option.name}</li>
        </div>
      ))
    : options?.map((option) => (
        <li key={option.id} className="drop__list-item">{option.name}</li>
      ));


  return (
    <div className="drop__container" style={{ top, left, height, width,display:`${display?'inline':'none'}` }}>
      <ul className="drop__list">{Dropdowns}</ul>
    </div>
  );
};

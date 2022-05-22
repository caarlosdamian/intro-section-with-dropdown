import React from "react";
import databiz from "../../images/client-databiz.svg";
import audiophile from "../../images/client-audiophile.svg";
import maker from "../../images/client-maker.svg";
import meet from "../../images/client-meet.svg";
import hero from "../../images/image-hero-desktop.png";
import heroMobile from "../../images/image-hero-mobile.png";

import "./Home.css";
import { useWindowSize } from "../../hooks/useWindoeSize";

export const Home = () => {
  const { width } = useWindowSize();
  return (
    <div className="home__container">
      <div className="home__left">
        <h1 className="home__left-header">Make remote work</h1>
        <span className="home__left-subtitle">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </span>
        <button className="home__left-button">Learn more</button>
        <div className="left__footer">
          <img id='data' src={databiz} alt="databiz" className="left__img" />
          <img id='audio' src={audiophile} alt="audiophile" className="left__img" />
          <img id='meet' src={meet} alt="meet" className="left__img" />
          <img id='maker' src={maker} alt="maker" className="left__img" />
        </div>
      </div>
      <div className="home__right">
        {width <= 415 ? (
          <img
            src={heroMobile}
            alt="heroMobile"
            className="right__home-img_mobile"
          />
        ) : (
          <img src={hero} alt="hero" className="right__home-img" />
        )}
      </div>
    </div>
  );
};

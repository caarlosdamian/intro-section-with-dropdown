import React from "react";
import databiz from '../../images/client-databiz.svg'
import audiophile from '../../images/client-audiophile.svg'
import maker from '../../images/client-maker.svg'
import meet from '../../images/client-meet.svg'
import hero from '../../images/image-hero-desktop.png'


import "./Home.css";

export const Home = () => {
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
          <img src={databiz} alt="databiz" className="left__img" />
          <img src={audiophile} alt="audiophile" className="left__img" />
          <img src={meet} alt="meet" className="left__img" />
          <img src={maker} alt="maker" className="left__img" />
        </div>
      </div>
      <div className="home__right">
        <img src={hero} alt="hero" className="right__home-img" />
      </div>
    </div>
  );
};

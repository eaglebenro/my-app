import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/2kwallpaper1717.jpg";

import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div pt={2} className="mask">
        <img width={2000} className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>I'M FOR HIRE AS A</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;

import React from "react";
import Wrapper from "../assets/wrappers/HeroSection";
import githubIcon from "../assets/images/github.png";
import linkedInIcon from "../assets/images/Linkedin.png";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="hero-content">
        <p>
          <span>HELLO</span>
        </p>
        <p>
          I'm{" "}
          <span>
            Sohan <br />a
          </span>{" "}
          Web Developer
        </p>
        <p>
          Welcome to my web developer portfolio I'm Sohan, a skilled and
          creative web developer with a passion for creating beautiful,
          responsive, and user-friendly websites.
        </p>
        <div className="hero-logo">
          <div>
            <img src={githubIcon} alt="logo" />
            <img src={linkedInIcon} alt="logo" />
          </div>
          <div className="hero-button">
            <button>Download CV</button>
            <button>Contact Info</button>
          </div>
        </div>
      </div>
      <div className="blob"></div>
    </Wrapper>
  );
};

export default HeroSection;

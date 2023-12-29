import React from "react";
import Wrapper from "../assets/wrappers/HeroSection";
import githubIcon from "../assets/images/github.png";
import linkedInIcon from "../assets/images/Linkedin.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <Wrapper id="home">
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
            <Link to="https://github.com/sohanshrestha12" target="_blank">
              <img src={githubIcon} alt="logo" />
            </Link>

            <img src={linkedInIcon} alt="logo" />
          </div>
          <div className="hero-button">
            <button>Download CV</button>
            <a href="#contact">
              <button>Contact Info</button>
            </a>
          </div>
        </div>
      </div>
      <div className="blob"></div>
    </Wrapper>
  );
};

export default HeroSection;

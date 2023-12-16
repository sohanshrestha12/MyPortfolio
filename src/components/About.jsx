import React from "react";
import Wrapper from "../assets/wrappers/About";
import developer from "../assets/images/developer.jpg";

const About = () => {
  return (
    <Wrapper id="about">
      <div className="about-left-container">
        <img src={developer} alt="About me" />
      </div>
      <div className="about-right-container">
        <p>
          <span>ABOUT ME</span>
        </p>
        <h3>A dedicated Web Developer based in Chhauni, kathmandu</h3>
        <p>
          Hello there! I'm a passionate web developer with a flair for creating
          dynamic and visually appealing digital experiences. Armed with a
          strong foundation in front-end technologies such as HTML, CSS, and
          JavaScript (with expertise in React), I specialize in crafting
          user-friendly interfaces. On the back-end, my skills extend to PHP
          with the Laravel framework and Node.js, enabling me to build robust
          and scalable applications. Proficient in version control using Git, I
          value collaboration and efficiency in development workflows. My
          toolkit also includes a solid understanding of databases, having
          worked with MongoDB and MySQL. With a keen eye for detail and a
          commitment to staying abreast of industry trends, I am dedicated to
          delivering innovative and high-quality web solutions.
        </p>
      </div>
    </Wrapper>
  );
};

export default About;

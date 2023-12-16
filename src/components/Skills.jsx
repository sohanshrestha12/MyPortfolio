import React from "react";
import Wrapper from "../assets/wrappers/Skills";
import AllSkills from "./AllSkills";

const Skills = () => {
  return (
    <Wrapper id="skills">
      <h3>MY SKILLS</h3>
      <div className="skills-container">
        <AllSkills />
      </div>
    </Wrapper>
  );
};

export default Skills;

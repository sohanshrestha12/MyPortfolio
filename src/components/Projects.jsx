import React from "react";
import Wrapper from "../assets/wrappers/Projects";
import AllProjects from "./AllProjects";

const Projects = () => {
  return (
    <Wrapper id="projects">
      <h3>Projects</h3>
      <p>
        <span>PORTFOLIO</span>
      </p>
      <p>Each Project is a unique piece of development</p>
      <AllProjects />
      <div className="view-more">
        <a target="_blank" href="https://github.com/sohanshrestha12">View More</a>
      </div>
    </Wrapper>
  );
};

export default Projects;

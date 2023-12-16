import React from "react";
import Projects from "../utils/Projects";
import { Link } from "react-router-dom";

const AllProjects = () => {
  return (
    <>
      {Projects.map((project, i) => {
        const {
          image,
          heading,
          desc,
          tags,
          githubCode,
          Live,
        } = project;
        return (
          <div key={i} className="project-container">
            <div className="projects-image">
              <img src={image} alt="Jobify" />
            </div>
            <div className="projects-description">
              <h4>{heading}</h4>
              <p>{desc}</p>
              <div className="projects-tags">
                {tags.map((tag,i)=>{
                  return <p key={i}>{tag}</p>
                })}
              </div>
              <div className="projects-links">
                <Link to={githubCode} target="_blank">
                  <p>Code</p>
                  <i className="fa-brands fa-github"></i>
                </Link>
                <Link to={Live} target="_blank">
                  <p>Live Demo</p>
                  <i className="fa-regular fa-share-from-square"></i>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AllProjects;

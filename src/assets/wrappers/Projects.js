import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 15rem;
  padding: 0 9rem;
  margin-bottom: 10rem;
  color: var(--text-color);
  h3 {
    color: var(--header-color);
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 5rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
  p span {
    color: var(--header-color);
    font-size: 1.4rem;
    font-weight: 500;
  }
  p:nth-child(2) {
    padding: 0 5rem;
  }
  p:nth-child(3) {
    padding: 0 5rem;
    margin-top: 0.9rem;
    font-weight: 500;
    font-size: 1.8rem;
    margin-bottom: 5rem;
  }
  .project-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 5rem;
    padding: 1rem 5rem;
    gap: 3rem;
  }
  .project-container .projects-image {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .project-container .projects-image img {
    max-width: 100%;
  }
  .project-container .projects-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5rem;
  }
  .project-container .projects-description h4 {
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
  .project-container .projects-description p {
    font-size: 1.6rem;
    margin-top: 2rem;
    text-align: center;
    color: #555555;
  }
  .project-container .projects-description .projects-tags {
    display: flex;
    color: #555555;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .project-container .projects-description .projects-tags p {
    all: initial;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    margin-top: 2rem;
    padding: 1rem 2rem;
    border-radius: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: #ffffffa8;
  }
  .project-container .projects-description .projects-links {
    display: flex;
    gap: 5rem;
    margin-top: 3.2rem;
  }
  .project-container .projects-description .projects-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 500;
    font-size: 2.5rem;
    gap: 0.8rem;
  }
  .project-container .projects-description .projects-links a svg {
    font-size: 1.8rem;
    color: var(--header-color);
  }
  .project-container .projects-description .projects-links a p {
    color: black;
    margin: 0;
  }
  .view-more {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }
  .view-more a {
    padding: 1rem;
    background-color: var(--header-color);
    text-decoration: none;
    color: var(--secondary-bg-color);
    font-size: 1.6rem;
    border-radius: 25px;
  }
  .view-more a:hover {
    cursor: pointer;
    border-color: #4232a5;
    background-color: #4232a5;
    color: white;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .project-container {
      grid-template-columns: 1fr;
    }
    .project-container .projects-description {
      padding: 0;
    }
    .project-container .projects-description .description {
      padding: 0;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1200px) {
    .project-container {
      grid-template-columns: 1fr;
    }
    .project-container .projects-description {
      padding: 0;
    }
  }
`;

export default Wrapper;

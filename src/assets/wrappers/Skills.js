import styled from "styled-components";
const Wrapper = styled.section`
  margin-top: 5rem;
  padding: 0 9rem;
  color: var(--text-color);
  h3 {
    color: var(--header-color);
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 5rem;
    letter-spacing: 0.1rem;
  }
  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: 3rem;
  }
  .skills-container div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    background-color: var(--secondary-bg-color);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 0.5rem;
  }
  .skills-container div:hover {
    background-color: var(--header-color);
  }
  .skills-container div:hover p {
    color: var(--secondary-bg-color);
  }
  .skills-container div:hover svg {
    color: var(--secondary-bg-color);
  }
  .skills-container div svg {
    font-size: 7rem;
    color: var(--header-color);
  }
  .skills-container div p {
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    padding:0;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
  }
`;

export default Wrapper;

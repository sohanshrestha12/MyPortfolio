import styled from "styled-components";
const Wrapper = styled.section`
  display: grid;
  grid-template-columns:repeat(2,1fr);
  margin-top: 5rem;
  padding: 10rem 9rem;
  color: var(--text-color);
  gap:2rem;
  .about-left-container img {
    width: 100%
  }
  .about-right-container {
    line-height: 2rem;
  }
  .about-right-container p:nth-child(1) span {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--header-color);
    letter-spacing: 0.1rem;
  }
  .about-right-container h3 {
    line-height: 2.7rem;
    margin-top: 0.3rem;
    font-size: 2.3rem;
  }
  .about-right-container p:nth-child(3) {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    color: #555555;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-right:5rem;
    padding-left:5rem;
  }
`;

export default Wrapper;

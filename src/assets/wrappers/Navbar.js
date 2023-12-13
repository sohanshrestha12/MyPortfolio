import styled from "styled-components";
const Wrapper = styled.nav`
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  padding: 3rem 6rem;
  background-color: var(--secondary-bg-color);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  h2 span {
    font-size: 2.4rem;
    color: var(--header-color);
  }
  ul {
    display: flex;
    align-items: center;
  }
  ul li {
    list-style: none;
  }
  ul li a {
    margin: 0 1.5rem;
    padding: 0 1rem;
    font-size: 1.6rem;
    text-decoration: none;
    color: var(--text-color);
    position: relative;
    font-weight: 500;
  }
  ul li a:hover {
    color: var(--header-color);
  }
  ul li a::before {
    content: "";
    position: absolute;
    bottom: -0.3rem;
    height: 0.2rem;
    background-color: var(--header-color);
    left: 50%;
    width: 0;
    z-index: 9;
    visibility: hidden;
    transition: 0.3s ease;
    color: var(--header-color);
  }
  ul li a:hover::before {
    left: 0;
    visibility: visible;
    width: 100%;
  }
`;

export default Wrapper;

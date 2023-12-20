import styled from "styled-components";
const Wrapper = styled.nav`
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 6rem;
  position: relative;
  background-color: var(--secondary-bg-color);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  h2 span {
    font-size: 2.4rem;
    color: var(--header-color);
  }
  #nav-links {
    display: flex;
    align-items: center;
  }
  #nav-links li {
    list-style: none;
  }
  #nav-links li a {
    margin: 0 1.5rem;
    padding: 0 1rem;
    font-size: 1.6rem;
    text-decoration: none;
    color: var(--text-color);
    position: relative;
    font-weight: 500;
  }
  #nav-links li a:hover {
    color: var(--header-color);
  }
  #nav-links li a::before {
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
  #nav-links li a:hover::before {
    left: 0;
    visibility: visible;
    width: 100%;
  }
  #menu-phone {
    display: none;
  }
  .menu-react-icons {
    font-size: 2.3rem;
  }
  .menu-phone-links {
    display: block !important;
    position: absolute;
    background-color: var(--secondary-bg-color);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 9;
    top: 100%;
    right: 0;
  }
  #mobile-nav-links {
    padding:1rem 8rem;
  }
  #mobile-nav-links li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    list-style: none;
  }
  #mobile-nav-links li a {
    font-size: 2rem;
    text-decoration: none;
    color: var(--text-color);
  }
  @media only screen and (max-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
    #menu-phone {
      display: block;
      font-size: 2rem;
    }

    #nav-links {
      display: none;
    }
  }
`;

export default Wrapper;

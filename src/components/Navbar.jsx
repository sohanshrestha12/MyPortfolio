import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <Wrapper>
      <h2>
        <span>Sohan Shrestha</span>
      </h2>
      <ul>
        <li>
          <NavLinks />
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navbar;

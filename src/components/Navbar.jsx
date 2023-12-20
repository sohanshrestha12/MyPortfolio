import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <Wrapper>
      <h2>
        <span>Sohan Shrestha</span>
      </h2>
      <ul id="nav-links">
        <li>
          <NavLinks />
        </li>
      </ul>
      <IconContext.Provider value={{ className: "menu-react-icons" }}>
        <div onClick={toggleMenu} id="menu-phone">
          {menu ? <IoClose /> : <FaBars />}
        </div>
      </IconContext.Provider>
      <div style={{ display: "none" }} className={menu && "menu-phone-links"}>
        <ul id="mobile-nav-links">
          <li>
            <NavLinks toggleMenu={toggleMenu} menu/>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;

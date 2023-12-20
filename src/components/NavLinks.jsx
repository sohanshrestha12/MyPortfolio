import React from "react";
import links from "../utils/Links";

const NavLinks = ({ toggleMenu, menu }) => {
  const closeMobileMenu = () => {
    toggleMenu ();
  };
  return (
    <>
      {links.map((link, i) => {
        const { text, goto } = link;
        return (
          <a href={goto} key={i} onClick={menu ? closeMobileMenu : undefined}>
            {text}
          </a>
        );
      })}
    </>
  );
};

export default NavLinks;

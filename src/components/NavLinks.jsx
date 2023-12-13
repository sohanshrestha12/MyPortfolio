import React from "react";
import links from "../utils/Links";

const NavLinks = () => {
  return (
    <>
      {links.map((link, i) => {
        const { text, goto } = link;
        return (
          <a href={goto} key={i}>
            {text}
          </a>
        );
      })}
    </>
  );
};

export default NavLinks;

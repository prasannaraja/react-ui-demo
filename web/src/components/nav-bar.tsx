import React from "react";
import NavDropDown from "./nav-dropdown";

const NavBar = ({ children }) => {
  return (
    <>
      <div>
        <NavDropDown children={undefined}/>
      </div>
    </>
  );
};

export default NavBar;

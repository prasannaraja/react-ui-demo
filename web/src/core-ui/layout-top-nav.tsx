import React from "react";
import NavBar from "../components/nav-bar";

const LayoutTopNav = ({ children }) => {
  return (
    <>
      <div>
        <NavBar children={undefined}></NavBar>
      </div>
    </>
  );
};

export default LayoutTopNav;

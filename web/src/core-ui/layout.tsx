import React from "react";
import LayoutTopNav from "./layout-top-nav";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <LayoutTopNav children={undefined} />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;

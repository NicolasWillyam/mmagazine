import React from "react";
import HeaderTitle from "./header-title";
import Navbar from "./navbar";
import MenuBar from "./menubar";

function Header() {
  return (
    <div>
      <HeaderTitle />
      <Navbar />
      <MenuBar />
    </div>
  );
}

export default Header;

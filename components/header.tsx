import React from "react";
import HeaderTitle from "./header-title";
import Navbar from "./navbar";
import MenuBar from "./menubar";

function Header() {
  return (
    <div className="w-full fixed top-0 bg-white shadow-md">
      <HeaderTitle />
      <Navbar />
      <MenuBar />
    </div>
  );
}

export default Header;

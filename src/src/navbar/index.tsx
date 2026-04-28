"use client";

import LogoNavbar from "./components/logoNavbar";
import NavItem from "./components/navItem";

const Navbar = () => {
  return (
    <>
      <div className="px-2 py-4 shadow-sm">
        <div className="flex items-center container justify-between mx-auto">
          <LogoNavbar />
          <NavItem />
        </div>
      </div>
    </>
  );
};

export default Navbar;

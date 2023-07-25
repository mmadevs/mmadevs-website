"use client";
import React, { useState } from "react";
import { LogoImg } from "../atoms/Logo";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
  const menuList = [
    { name: "HOME", href: "/" },
    { name: "SOBRE", href: "#" },
    { name: "PORFÓLIO", href: "#" },
    { name: "CONTATO", href: "#" },
  ];

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // {menuList.map((menuList) => (
  //   <li key={""}>
  //     <a className="p-4 hover:text-blue-500" href={menuList.href}>
  //       {menuList.name}
  //     </a>{" "}
  //   </li>
  // ))}

  return (
    <>
      <nav className="w-screen fixed top-0 z-50 bg-dark-blue">
        <div className="flex items-center justify-between h-16 text-white">
          <LogoImg />
          <div>
            <button
              className="justify-center text-[2rem] p-4 bg-blue-950"
              onClick={handleShowNavbar}
            >
              <GiHamburgerMenu />
            </button>
          </div>
          <div className="{`${showNavbar && 'active'}`}">
            <ul className="flex mr-6 justify-center items-center"></ul>
          </div>
        </div>
        <hr className="w-screen h-px my-0 bg-gray-200 border-0 dark:bg-gray-700 "></hr>{" "}
      </nav>
    </>
  );
};

"use client";
import React, { useState } from "react";
import { LogoImg } from "../atoms/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export const NavBarTest = () => {
  const menuList = [
    { name: "HOME", href: "/" },
    { name: "SOBRE", href: "#" },
    { name: "PORFÓLIO", href: "#" },
    { name: "CONTATO", href: "#" },
  ];

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const [changeBtn, setChangeBtn] = useState(false);

  return (
    <>
      <nav className="w-screen fixed z-50 bg-dark-blue">
        <div className="text-white w-screen h-16">
          <div className="relative top-4 h-0 ml-5 float-left">
            <a href="/">
              <LogoImg />
            </a>
          </div>
          <button
            className="text-white justify-center text-[2rem] p-4 bg-blue-950 float-right mr-4 lg:hidden"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <GiHamburgerMenu />
          </button>
          <div className={isNavExpanded ? "test" : "hidden lg:grid"}>
            <ul className="p-3 absolute right-5 grid bg-blue-400 top-[4.5rem] text-black lg:block top-2 m-0 aboluste bg-transparent text-white">
              <a href="" className="p-4 hover:text-blue-500">
                HOME
              </a>

              <a href="" className="p-4 hover:text-blue-500">
                SOBRE
              </a>

              <a href="" className="p-4 hover:text-blue-500">
                PORFÓLIO
              </a>

              <a href="" className="p-4 hover:text-blue-500">
                CONTATO
              </a>
            </ul>
          </div>
        </div>
        <hr className="w-screen h-px my-0 bg-gray-200 border-0 dark:bg-gray-700 "></hr>{" "}
      </nav>
    </>
  );
};

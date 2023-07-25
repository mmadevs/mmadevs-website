"use client";
import React, { useState } from "react";
import { LogoImg } from "../atoms/Logo";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBarTest = () => {
  const menuList = [
    { name: "HOME", href: "/" },
    { name: "SOBRE", href: "#" },
    { name: "PORFÓLIO", href: "#" },
    { name: "CONTATO", href: "#" },
  ];

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav className="w-screen fixed top-0 z-50 bg-dark-blue">
        <div className="inline-flex items-center justify-between h-16 text-white">
          <a href="/" className="">
            <LogoImg />
          </a>

          <button
            className="justify-center text-[2rem] p-4 bg-blue-950 float-right"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <GiHamburgerMenu className="text-white" />
          </button>
          <div className={isNavExpanded ? "menu-full expanded" : "hidden"}>
            <ul className="p-12 absolute top-20 right-2 inline-grid  h-96 bg-blue-50 text-black">
              <a href="" className="p-3 hover:text-blue-500">
                HOME
              </a>

              <a href="" className="p-3 hover:text-blue-500">
                SOBRE
              </a>

              <a href="" className="p-3 hover:text-blue-500">
                PORFÓLIO
              </a>

              <a href="" className="p-3 hover:text-blue-500">
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

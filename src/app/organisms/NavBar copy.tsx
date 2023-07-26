"use client";
import React, { useState } from "react";
import { LogoImg } from "../atoms/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";

export const NavBarTest = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav className="w-screen fixed z-50 bg-dark-blue">
        <div className="text-white h-16">
          <div className="relative top-4 h-0 ml-5">
            <Link href="/">
              <LogoImg />
            </Link>
          </div>
          <button
            className="text-white text-3xl p-4 bg-blue-950 float-right lg:hidden"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <GiHamburgerMenu />
          </button>
          <div className={isNavExpanded ? "test" : "hidden lg:grid"}>
            <ul className="p-3 absolute right-5 grid bg-blue-400 top-[5rem] text-black lg:block">
              <a
                href=""
                className="p-4 hover:text-blue-500 text-white lg:text-white"
              >
                HOME
              </a>

              <a
                href=""
                className="p-4 hover:text-blue-500 text-white lg:text-white"
              >
                SOBRE
              </a>

              <a
                href=""
                className="p-4 hover:text-blue-500 text-white lg:text-white"
              >
                PORFÓLIO
              </a>

              <a
                href=""
                className="p-4 hover:text-blue-500 text-white lg:text-white"
              >
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

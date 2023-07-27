"use client";
import React, { useState } from "react";
import { LogoImg } from "../atoms/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Link from "next/link";

export const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <nav className="w-screen bg-dark-blue fixed z-40 h-16 p-4 lg:flex justify-between">
        <Link href="/" className="left-10">
          <LogoImg />
        </Link>
        <button
          className="absolute mt-2.5 top-0 right-8 float-right text-white bg-blue-800 rounded-xl p-3 text-lg lg:hidden lg:right-12 "
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <GiHamburgerMenu />
        </button>
        <div
          className={
            isNavExpanded
              ? "relative flex items-center justify-end mr-4"
              : "hidden lg:inline"
          }
        >
          <ul className="text-center text-dark-blue w-2/4 lg:w-fit p-6 mt-6 right-0 z-50 rounded-xl bg-blue-50 lg:text-white lg:bg-transparent lg:mt-0 lg:pt-1.5 lg:flex  ">
            <li className="p-3 lg:pt-0">
              <a
                href="#home"
                className="hover:bg-blue-100 p-2 rounded-md lg:hover:bg-transparent hover:text-blue-500"
              >
                HOME
              </a>
            </li>
            <li className="p-3 lg:pt-0">
              <a
                href="#about"
                className="hover:bg-blue-100 p-2 rounded-md lg:hover:bg-transparent hover:text-blue-500"
              >
                SOBRE
              </a>
            </li>
            <li className="p-3 lg:pt-0">
              <a
                href="#portfolio"
                className="hover:bg-blue-100 p-2 rounded-md lg:hover:bg-transparent hover:text-blue-500"
              >
                PORTFÓLIO
              </a>
            </li>
            <li className="p-3 lg:pt-0">
              <a
                href="#contact-us"
                className="hover:bg-blue-100 p-2 rounded-md lg:hover:bg-transparent hover:text-blue-500"
              >
                CONTATO
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="w-screen h-px my-0 bg-gray-200 border-0 dark:bg-gray-700 relative top-[4rem]"></hr>
    </>
  );
};

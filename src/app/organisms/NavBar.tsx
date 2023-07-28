"use client";
import React, { useState, useEffect } from "react";
import { LogoImg } from "../atoms/Logo";
import { MdMenu, MdClose } from "react-icons/md";

import Link from "next/link";

export const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const viewState = () => {
    if (isNavExpanded) {
      return <MdClose />;
    } else {
      return <MdMenu />;
    }
  };

  return (
    <>
      <nav
        className={
          isNavExpanded
            ? "w-screen h-screen bg-blue-50"
            : "w-screen bg-dark-blue sticky top-0  h-16 p-4 lg:flex justify-between"
        }
      >
        <Link href="/" className={isNavExpanded ? "hidden" : "left-10"}>
          <LogoImg />
        </Link>
        <button
          className="absolute mt-2.5 top-0 right-4 float-right text-white bg-blue-800 rounded-xl p-3 text-lg z-40 lg:hidden lg:right-12 "
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {viewState()}
        </button>
        <div
          className={
            isNavExpanded
              ? "relative flex items-center justify-end mr-4"
              : "hidden lg:inline"
          }
        >
          <ul className="text-center flex flex-col items-center justify-center text-dark-blue w-screen h-screen lg:w-fit p-6 rounded-xl  lg:text-white lg:bg-transparent lg:mt-0 lg:pt-1.5 lg:flex  ">
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
    </>
  );
};

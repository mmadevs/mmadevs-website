"use client";
import React from "react";
import { NavBarLogo } from "../atoms/NavBarLogo";
import { NavBarButton } from "../atoms/NavBarButton";
import { NavBarMenu } from "./NavBarMenu";
import { Line } from "../atoms/Line";

export const NavBar = () => {
  return (
    <header
      className={`fixed top-0 w-full z-50 h-[80px]
      bg-gray-950 bg-opacity-80 shadow-2xl 
      backdrop-blur-sm flex flex-col 
      justify-between items-center`}
    >
      <nav
        className={`w-full flex-1 py-4 flex justify-between items-center px-8`}
      >
        <NavBarLogo />
        <NavBarButton />
        <NavBarMenu />
      </nav>
      <Line />
    </header>
  );
};

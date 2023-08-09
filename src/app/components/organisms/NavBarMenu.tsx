"use client";
import React, { useState, useEffect, FunctionComponent } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { NavItem } from "../molecules/NavItem";
import { INavItem } from "../types/navItem";

import Link from "next/link";
import { NavBarButton } from "../atoms/NavBarButton";
import { useNavBar } from "../context/navbarContext";

export const NavBarMenu: FunctionComponent = () => {
  const { navItems, isNavBarOpen, setIsNavBarOpen } = useNavBar();

  return (
    <div
      className={`
      ${isNavBarOpen ? "fixed" : "max-md:hidden"}
    inset-0 z-50
    text-dark-blue bg-blue-50 p-6 
    lg:text-white lg:bg-transparent lg:py-2 
    flex flex-col
    `}
    >
      <button
        className="bg-transparent outline-none self-end text-2xl lg:hidden"
        onClick={() => setIsNavBarOpen(false)}
      >
        <MdClose />
      </button>

      <ul
        className={`
    flex flex-col 
    text-center items-center justify-center 
    w-full h-full
    lg:flex-row
    `}
      >
        {navItems.map((item) => (
          <NavItem key={item.route} item={item} />
        ))}
      </ul>
    </div>
  );
};

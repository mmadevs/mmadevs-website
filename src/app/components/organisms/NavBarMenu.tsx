"use client";
import React, { FunctionComponent } from "react";
import { MdClose } from "react-icons/md";
import { NavItem } from "@/app/components/molecules/NavItem";
import { useNavBar } from "@/app/context/navbarContext";
import { NavBarLogo } from "../atoms/NavBarLogo";

export const NavBarMenu: FunctionComponent = () => {
  const { navItems, isNavBarOpen, setIsNavBarOpen } = useNavBar();

  return (
    <div
      className={`
      ${
        isNavBarOpen
          ? "fixed lg:static animate-flip-down lg:animate-none"
          : "hidden lg:block"
      }
    inset-0 h-screen lg:h-4
    bg-gray-950 p-8
    text-white lg:bg-transparent lg:py-2 
    flex flex-col items-center justify-center
    `}
    >
      <div className="flex justify-between w-full">
        <NavBarLogo className="lg:hidden" />
        <button
          className="bg-transparent outline-none self-end
         text-3xl lg:hidden p-3"
          onClick={() => setIsNavBarOpen(false)}
        >
          <MdClose />
        </button>
      </div>

      <ul
        className={`
    flex flex-col 
    text-center items-center justify-center 
    w-full h-full
    lg:flex-row gap-9 lg:gap-4
    `}
      >
        {navItems.map((item) => (
          <NavItem key={item.route} item={item} />
        ))}
      </ul>
    </div>
  );
};

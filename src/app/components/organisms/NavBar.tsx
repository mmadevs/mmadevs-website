"use client";
import React, { useState, useEffect } from "react";
import { NavBarLogo } from "../atoms/NavBarLogo";
import { MdMenu, MdClose } from "react-icons/md";
import { NavItem } from "../molecules/NavItem";

import Link from "next/link";
import { NavBarButton } from "../atoms/NavBarButton";
import { NavBarMenu } from "./NavBarMenu";

export const NavBar = () => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 p-4 bg-gray-950 bg-opacity-80 shadow-2xl backdrop-blur-sm flex justify-between items-center px-8`}
    >
      <NavBarLogo />
      <NavBarButton />
      <NavBarMenu />
    </nav>
  );
};

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
    <nav className={`w-screen p-2 bg-dark-blue flex justify-between`}>
      <NavBarLogo />
      <NavBarButton />
      <NavBarMenu />
    </nav>
  );
};

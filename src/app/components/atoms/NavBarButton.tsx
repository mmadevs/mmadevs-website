"use client";
import React, { useState, useEffect, FunctionComponent } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";
import { useNavBar } from "@/app/context/navbarContext";

export const NavBarButton: FunctionComponent = () => {
  const { setIsNavBarOpen } = useNavBar();
  return (
    <button
      className="text-white p-3 text-3xl lg:hidden"
      onClick={() => setIsNavBarOpen(true)}
    >
      <MdMenu />
    </button>
  );
};

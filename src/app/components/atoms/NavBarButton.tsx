"use client";
import React, { useState, useEffect, FunctionComponent } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";
import { useNavBar } from "@/app/context/navbarContext";

export const NavBarButton: FunctionComponent = () => {
  const { setIsNavBarOpen } = useNavBar();
  return (
    <button
      className="text-white bg-blue-800 rounded-xl p-3 text-lg lg:hidden"
      onClick={() => setIsNavBarOpen(true)}
    >
      <MdMenu />
    </button>
  );
};

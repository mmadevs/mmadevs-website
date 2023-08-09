"use client";
import React, { FunctionComponent } from "react";
import Link from "next/link";
import { INavItem } from "@/app/types/navItem";
import { useNavBar } from "@/app/context/navbarContext";

export const NavItem: FunctionComponent<{
  item: INavItem;
}> = ({ item }) => {
  const { setIsNavBarOpen } = useNavBar();
  return (
    <li className="p-3 lg:pt-0">
      <Link
        href={item.route}
        onClick={() => {
          setIsNavBarOpen(false);
          document
            .querySelector(item.route)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="hover:bg-blue-100 p-2 rounded-md lg:hover:bg-transparent hover:text-blue-500"
      >
        {item.label}
      </Link>
    </li>
  );
};

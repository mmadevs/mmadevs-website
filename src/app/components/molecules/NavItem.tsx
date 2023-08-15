"use client";
import React, { FunctionComponent } from "react";
import Link from "next/link";
import { INavItem } from "@/app/types/navItem";
import { useNavBar } from "@/app/context/navbarContext";

export const NavItem: FunctionComponent<{
  item: INavItem;
}> = ({ item }) => {
  const { setIsNavBarOpen, currentRoute, setCurrentRoute } = useNavBar();
  return (
    <li className="text-lg">
      <Link
        href={item.route}
        onClick={() => {
          setCurrentRoute(item.route);
          setIsNavBarOpen(false);
          document
            .querySelector(item.route)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="hover:bg-blue-100 p-2 rounded-md lg:hover:bg-transparent hover:text-blue-500"
      >
        {item.label}
      </Link>
      <div
        className={`h-1 w-full bg-blue-500 ${
          currentRoute === item.route ? "opacity-100" : "opacity-0"
        } `}
      ></div>
    </li>
  );
};

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
    <li className="text-4xl lg:text-lg">
      <Link
        href={item.route}
        onClick={() => {
          setCurrentRoute(item.route);
          setIsNavBarOpen(false);
          document
            .querySelector(item.route)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className={`p-2 hover:text-blue-500 transition-all`}
      >
        {item.label}
      </Link>
      <div
        className={`h-1 w-full bg-blue-500 ${
          currentRoute === item.route
            ? "opacity-100 animate-fade"
            : "opacity-0 "
        } `}
      ></div>
    </li>
  );
};

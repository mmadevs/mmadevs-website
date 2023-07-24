"use client";
import { LogoImg } from "../atoms/Logo";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
  const menuList = [
    { name: "HOME", href: "/" },
    { name: "SOBRE", href: "#" },
    { name: "PORFÓLIO", href: "#" },
    { name: "CONTATO", href: "#" },
  ];

  return (
    <>
      <nav className="fixed top-0 z-50 bg-dark-blue">
        <div className="flex items-center justify-between h-16 text-white">
          <LogoImg />
          <button className=" text-[2rem] p-4 bg-blue-950">
            <GiHamburgerMenu />
          </button>
          {/* <ul className='list'>
            {menuList.map((menuList) => (
              <li key={""}>
                <a href={menuList.href}>{menuList.name}</a>{" "}
              </li>
            ))}
          </ul> */}
        </div>
        <hr className="w-screen h-px my-0 bg-gray-200 border-0 dark:bg-gray-700 "></hr>
      </nav>
    </>
  );
};

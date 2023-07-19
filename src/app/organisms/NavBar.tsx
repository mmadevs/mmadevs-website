import Image from "next/image";
import Menu from "../molecules/Menu";

export default function NavBar() {
  return (
      <nav>
        <LogoImg />
        <Menu />
      </nav>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
  );
}

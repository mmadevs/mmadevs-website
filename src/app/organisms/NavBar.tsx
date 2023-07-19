import Image from "next/image";
import Link from "next/link";

const LogoImg = () => {
  return (
    <Image
      src="/assets/logo.png"
      className=" ml-5"
      alt="MMA Devs logo"
      width={160}
      height={30}
    />
  );
};

const Menu = () => {
  return (
    <div className="flex justify-center  text-white mr-10 text-sm">
      {/* text-sky-600 */}
      {/* transition duration-300 border-b-8 border-transparent hover:border-sky-500 */}
      <Link
        href={"/"}
        className="p-3 ml-2 mr-2 hover:text-sky-600 active:font-bold"
      >
        HOME
      </Link>
      <Link
        href={"#"}
        className="p-3 ml-2 mr-2  hover:text-sky-600 active:font-bold"
      >
        SOBRE
      </Link>
      <Link
        href={"#"}
        className="p-3 ml-2 mr-2  hover:text-sky-600 active:font-bold"
      >
        PORTFÓLIO
      </Link>
      <Link
        href={"#"}
        className="p-3 ml-2 mr-2  hover:text-sky-600 active:font-bold"
      >
        CONTATO
      </Link>
    </div>
  );
};

export const NavBar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-dark-blue">
        <div className="flex items-center justify-between h-16">
          <LogoImg />
          <Menu />
        </div>
        <hr className="w-screen h-px my-0 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </nav>
    </>
  );
};

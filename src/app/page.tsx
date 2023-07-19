import Image from "next/image";
import Link from "next/link";
import Welcome from "./pages/Welcome";
import { NavBar } from "./organisms/NavBar";

const LogoImg = () => {
  return (
    <Image
      src="/assets/logo.png"
      className=" ml-5"
      alt="MMA Devs logo"
      width={200}
      height={50}
    />
  );
};

const Menu = () => {
  return (
    <div className="flex justify-center  text-white">
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

export default function Home() {
  return (
    <>
      <main className="bg-dark-blue w-screen h-screen text-white">
        <NavBar />
        <Welcome />
      </main>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import Welcome from "./pages/Welcome";

const LogoImg = () => {
  return (
    <Image src="/assets/logo.png" alt="MMA Devs logo" width={150} height={50} />
  );
};

const MenuItems = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/">Sobre</Link>
      <Link href="/">Portfólio</Link>
      <Link href="/">Contato</Link>
    </div>
  );
};

export default function Home() {
  return (
    <main className="bg-dark-blue w-screen h-screen">
      <nav className="">
        <LogoImg />
        <MenuItems />
      </nav>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Welcome />
    </main>
  );
}

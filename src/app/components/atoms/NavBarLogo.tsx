import Image from "next/image";
import Link from "next/link";

export const NavBarLogo = () => {
  return (
    <Link className="relative flex justify-center items-center" href="/">
      <Image
        src="/assets/img/logo.png"
        className=""
        alt="MMA Devs logo"
        width={220}
        height={30}
      />
    </Link>
  );
};

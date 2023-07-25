import Image from "next/image";

export const LogoImg = () => {
  return (
    <Image
      src="/assets/img/logo.png"
      className="ml-5 md: lg:"
      alt="MMA Devs logo"
      width={160}
      height={30}
    />
  );
};

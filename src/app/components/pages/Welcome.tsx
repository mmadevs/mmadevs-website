"use client";
import Image from "next/image";
import PageLayout from "../templates/PageLayout";
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import Link from "next/link";
import { IconBase } from "react-icons/lib";

const Welcome = () => {
  const footerIcons = [
    { icon: <BsFacebook />, href: "https://www.facebook.com/mmadevs" },
    {
      icon: <BsWhatsapp />,
      href: "https://api.whatsapp.com/send?phone=+5571986366233&text=Olá",
    },
    {
      icon: <BsInstagram />,
      href: "https://www.instagram.com/mma_devs",
    },
  ];
  return (
    <PageLayout
      id="home"
      className="flex flex-col text-white bg-[url('/assets/img/bg.png')] bg-no-repeat bg-cover"
    >
      <div
        id="home-child"
        className="page flex-1 lg:grid grid-cols-2 grid-rows-4 gap-y-4 max-w-7xl mx-auto
      flex flex-col text-center lg:text-left lg:pt-8"
      >
        <aside
          className="flex flex-col place-self-end justify-center items-center lg:items-start 
        gap-4 row-span-3"
        >
          <p
            className="text-3xl lg:text-6xl w-full font-bold 2xl:text-7xl 
          animate-fade-left animate-duration-[2s]"
          >
            Tecnologia para o<br />
            seu negócio!
          </p>
          <p
            className="text-md lg:text-xl 2xl:text-2xl w-full animate-fade-left 
          animate-duration-[2.5s]"
          >
            Tudo o que você precisa, de forma ágil, eficaz e com valor justo,
            que cabe no seu bolso. Faça hoje mesmo um orçamento conosco!
          </p>
          <button
            className="self-center lg:self-start bg-blue-500 text-xl 2xl:text-3xl 
          py-3 px-8 rounded-xl hover:bg-transparent hover:text-blue-400 
          transition-all border-blue-500 border-4
          animate-fade-up animate-duration-[3s]
          "
          >
            Solicitar orçamento
          </button>
          <div
            className="flex items-center justify-center lg:justify-start gap-1 
          lg:text-left text-lg 2xl:text-2xl
          animate-fade-up animate-duration-[3.5s]
          "
          >
            <ul className="flex text-yellow-300">
              {new Array(5).fill("").map((_, i) => (
                <MdStar key={i} />
              ))}
            </ul>
            <p className=" ">Google reviews</p>
          </div>
        </aside>
        <aside
          className="relative col-start-2 row-span-3 flex overflow-visible w-full 
        aspect-video lg:aspect-auto
        animate-fade animate-duration-[3s]"
        >
          <Image
            src="/assets/img/figure-1.svg"
            alt="Person using computer"
            fill
            className="overflow-visible object-cover"
          />
        </aside>
        <footer
          className="col-start-1 row-start-4 text-blue-500 text-3xl flex 
        justify-center lg:justify-start gap-4 pt-12 items-end
        animate-fade animate-duration-[3s]
        "
        >
          {footerIcons.map((x) => (
            <Link key={x.href} href={x.href} target="_blank">
              <IconBase className="hover:text-white">{x.icon}</IconBase>
            </Link>
          ))}
        </footer>
      </div>
    </PageLayout>
  );
};

export default Welcome;

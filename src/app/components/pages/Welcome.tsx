"use client";
import Image from "next/image";

import "swiper/css";
import "swiper/css/bundle";
import PageLayout from "../templates/PageLayout";
import { useInView } from "react-intersection-observer";

import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { MdStar } from "react-icons/md";

const Welcome = () => {
  const { ref, inView } = useInView();

  return (
    <PageLayout
      id="home"
      bg="dark"
      className="flex flex-col text-white bg-[url('/assets/img/bg.png')] bg-no-repeat bg-cover"
    >
      <div
        className="flex-1 lg:grid grid-cols-2 grid-rows-4 gap-y-4 
      flex flex-col text-center lg:text-left"
      >
        <aside
          className="flex flex-col justify-center items-center lg:items-start 
        gap-4 row-span-3"
        >
          <p className="text-3xl lg:text-6xl w-full font-bold 2xl:text-8xl">
            Tecnologia para o seu negócio!
          </p>
          <p className="text-md lg:text-xl 2xl:text-3xl w-full">
            Tudo o que você precisa, de forma ágil, eficaz e com valor justo,
            que cabe no seu bolso. Faça hoje mesmo um orçamento conosco!
          </p>
          <button className="self-center lg:self-start bg-blue-500 text-xl 2xl:text-3xl py-4 px-8 rounded-md">
            Solicitar orçamento
          </button>
          <div className="flex items-center justify-center lg:justify-start gap-1 lg:text-left text-lg 2xl:text-2xl">
            <ul className="flex text-yellow-300">
              {new Array(5).fill("").map((_, i) => (
                <MdStar key={i} />
              ))}
            </ul>
            <p className=" ">Google reviews</p>
          </div>
        </aside>
        <aside className="relative col-start-2 row-span-3 flex overflow-visible w-full aspect-video lg:aspect-auto ">
          <Image
            src="/assets/img/figure-1.svg"
            alt="Person using computer"
            fill
            className="overflow-visible"
            objectFit="cover"
          />
        </aside>
        <footer className="col-start-1 col-span-2 row-start-4 text-blue-500 text-3xl flex justify-center lg:justify-start gap-4 pt-12">
          <BsFacebook />
          <BsWhatsapp />
          <BsInstagram />
        </footer>
      </div>
    </PageLayout>
  );
};

export default Welcome;

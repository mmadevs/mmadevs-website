"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import PageLayout from "../templates/PageLayout";
import { useInView } from "react-intersection-observer";

import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";

const Welcome = () => {
  const { ref, inView } = useInView();

  return (
    <PageLayout
      id="home"
      bg="dark"
      _ref={ref}
      className="flex flex-col pt-24 px-16 h-screen text-white max-w-full bg-[url('/assets/img/bg.png')] bg-no-repeat bg-cover"
    >
      <div className="flex-1"></div>
      <div className="flex-1 grid grid-cols-2 grid-rows-4 gap-y-4 w-full">
        <aside className="flex flex-col items-start justify-center gap-4 row-span-3">
          <h1 className="text-6xl font-bold 2xl:text-8xl">
            Tecnologia para o seu negócio!
          </h1>
          <p className="text-xl 2xl:text-3xl">
            Tudo o que você precisa, de forma ágil, eficaz e com valor justo,
            que cabe no seu bolso. Faça hoje mesmo um orçamento conosco!
          </p>
          <button className="bg-blue-500 text-xl 2xl:text-3xl py-4 px-8 rounded-md">
            Solicitar orçamento
          </button>
          <div id="google-reviews text-xl">
            <p className="text-lg 2xl:text-2xl">***** Google reviews</p>
          </div>
        </aside>
        <aside className="col-start-2 row-span-3">
          <div className="relative w-full h-full overflow-visible">
            <Image
              src="/assets/img/figure-1.svg"
              alt="Person using computer"
              layout="fill"
              className="overflow-visible"
              objectFit="cover"
            />
          </div>
        </aside>
        <footer className="col-start-1 col-span-2 row-start-4 text-blue-500 text-3xl flex gap-4">
          <BsFacebook />
          <BsWhatsapp />
          <BsInstagram />
        </footer>
      </div>
      <div className="flex-1 "></div>
    </PageLayout>
  );
};

export default Welcome;

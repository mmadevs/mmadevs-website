"use client";
import Image from "next/image";
import { FcInfo, FcMultipleDevices, FcGlobe, FcIphone } from "react-icons/fc";
import Strategic from "./Strategic";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";

const ProjectImg = () => {
  return (
    <Image
      src="/assets/img/image-1.png"
      className="w-[20rem] mt-24"
      alt="Projeto"
      width={600}
      height={480}
    />
  );
};

const servicesList = [
  {
    id: 1,
    name: "WEBSITES",
    content:
      "Páginas da web para seu comércio, marca ou projeto. Visual de qualidade e super responsivo. (Boa visualização em desktops e celulares)",
  },
  {
    id: 2,
    name: "WEBAPPS",
    content:
      "Aplicações em navegadores, sem necessidade de instalação. Versáteis, podem ser acessadas de qualquer dispositivo com acesso à internet. ",
  },
  {
    id: 3,
    name: "MOBILE APPS",
    content:
      "Aplicativos para celulares e tablets. Não necessitam de internet para ser acessados, exceto funções onde é obrigatória a conexão.",
  },
];

const About = () => {
  return (
    <>
      <div
        className="w-screen  max-w-full bg-slate-50 text-dark-blue p-6"
        id="about"
      >
        <p className="text-2xl font-bold flex items-center text-justify">
          <FcInfo className="mr-3 text-4xl" />
          QUEM SOMOS?
        </p>
        <p className="mt-5 text-justify">
          Somos um time de desenvolvimento criado em Salvador/BA, estamos unidos
          há mais de um ano e o nosso foco é oferecer soluções eficientes na
          área de tecnologia ao mercado. Nosso time é composto por profissionais
          devidamente capacitados e com sólida experiência na área de Tecnologia
          da Informação e em Desenvolvimento de Software.
        </p>
        <div className="box-border flex flex-wrap justify-center text-white">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 2000 }}
            scrollbar={{ draggable: true }}
            speed={1000}
            modules={[Autoplay, Scrollbar]}
          >
            <SwiperSlide>
              <div className="bg-blue-900 rounded-lg h-[15rem] p-4 m-5">
                <p className="font-bold text-center">WEBSITES</p>
                <ul className="list-disc text-justify m-4 mt-5">
                  <li>
                    Aplicações em navegadores, sem necessidade de instalação.{" "}
                  </li>
                  <li>
                    Versáteis, podem ser acessadas de qualquer dispositivo com
                    acesso à internet.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-blue-900 rounded-lg h-[15rem] p-4 m-5">
                <p className="font-bold text-center">WEB APPS</p>
                <ul className="list-disc text-justify m-4 mt-5">
                  <li>Páginas da web para seu comércio, marca ou projeto.</li>
                  <li>
                    Visual de qualidade, e super responsivas. (Boa visualização
                    em desktops e celulares.)
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-blue-900  rounded-lg h-[15rem] p-4 m-5">
                <p className="font-bold text-center">MOBILE APPS</p>
                <ul className="list-disc text-justify m-4 mt-5">
                  <li>Aplicações web, sem necessidade de instalação.</li>
                  <li>
                    Versáteis, podem ser acessadas de qualquer dispositivo com
                    acesso à internet.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
      <Strategic />
    </>
  );
};

export default About;

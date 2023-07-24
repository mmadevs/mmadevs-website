"use client";
import Image from "next/image";

import { TbTargetArrow } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";

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
        className="w-screen max-w-full text-dark-blue p-10 border-t-2 border-b-2 border-gray-200"
        id="about"
      >
        <p className="text-2xl font-bold flex items-center text-justify">
          {/* <FcInfo className="mr-3 text-4xl" /> */}
          QUEM SOMOS?
        </p>
        <p className="mt-5 text-justify">
          Somos um time de desenvolvimento criado em Salvador/BA, estamos unidos
          há mais de um ano e o nosso foco é oferecer soluções eficientes na
          área de tecnologia ao mercado. Nosso time é composto por profissionais
          devidamente capacitados e com sólida experiência na área de Tecnologia
          da Informação e em Desenvolvimento de Software.
        </p>
        <div className="box-border flex flex-wrap justify-center text-white mt-4">
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
              <div className="bg-blue-900 rounded-lg m-5">
                <p className="font-bold text-center pt-6">WEBSITES</p>
                <ul className="list-disc text-justify p-7">
                  <li>
                    Aplicações em navegadores, sem necessidade de instalação.
                  </li>
                  <li>
                    Versáteis, podem ser acessadas de qualquer dispositivo com
                    acesso à internet.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-blue-900 rounded-lg  m-5">
                <p className="font-bold text-center pt-6">WEB APPS</p>
                <ul className="list-disc text-justify p-7">
                  <li>Páginas da web para seu comércio, marca ou projeto.</li>
                  <li>
                    Visual de qualidade, e super responsivas. (Boa visualização
                    em desktops e celulares.)
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-blue-900  rounded-lg  m-5">
                <p className="font-bold text-center pt-6">MOBILE APPS</p>
                <ul className="list-disc text-justify p-7">
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
        <div className="flex items-center pt-5 flex-wrap">
          <TbTargetArrow className="text-2xl" />
          <p className="ml-4 text-2xl font-bold">MISSÃO</p>
          <p className="mt-2 text-justify">
            Nosso propósito consiste em trazer soluções sustentáveis e
            econômicas aos nossos clientes no ramo de tecnologia da informação.
          </p>
        </div>
        <div className="flex items-center pt-5 flex-wrap">
          <AiFillEye className="text-2xl" />
          <p className="ml-4 text-2xl font-bold">VISÃO</p>
          <p className="mt-2 text-justify">
            Nosso propósito consiste em trazer soluções sustentáveis e
            econômicas aos nossos clientes no ramo de tecnologia da informação.
          </p>
        </div>
        <div className="flex items-center pt-5 flex-wrap">
          <FaBalanceScale className="text-2xl" />
          <p className="ml-4 text-2xl font-bold">VALORES</p>
          <p className="mt-2 text-justify">
            Nossos principais pilares de valores são a responsabilidade para com
            os nossos clientes, com a sociedade, agir sempre com transparência e
            ética, o respeito, e estar sempre aberto a grandes desafios.
          </p>
        </div>
        <div className="block text-center pt-8">
          <p className="text-lg  font-bold">FUNDADORES</p>
          <div
            className="w-38 flex flex-wrap items-center justify-center bg-blue-900 m-4  rounded-md text-white"
            id="av"
          >
            <Image
              src="/assets/img/avatar.png"
              width={40}
              height={100}
              alt="Picture of the author"
            />
            <p className="ml-2">Anthony Victor</p>
          </div>
          <div
            className="w-38 flex flex-wrap items-center justify-center bg-blue-900 m-4  rounded-md text-white"
            id="av"
          >
            <Image
              src="/assets/img/avatar.png"
              width={40}
              height={100}
              alt="Picture of the author"
            />
            <p className="ml-2">Matheus Araújo</p>
          </div>
          <div
            className="w-38 flex flex-wrap items-center justify-center bg-blue-900 m-4  rounded-md text-white"
            id="av"
          >
            <Image
              src="/assets/img/avatar.png"
              width={40}
              height={100}
              alt="Picture of the author"
            />
            <p className="ml-2">Matheus Nascimento</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

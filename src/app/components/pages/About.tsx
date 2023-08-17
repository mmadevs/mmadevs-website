"use client";
import Image from "next/image";

import { TbTargetArrow } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
import PageLayout from "../templates/PageLayout";
import { DevInfo } from "../molecules/DevInfo";
import { TabsContainer } from "../organisms/TabsContainer";

const About = () => {
  return (
    <PageLayout id="about" bg={"dark"} className={``}>
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        <section className="flex flex-col gap-8">
          <h1 className="text-center text-3xl font-semibold">SERVIÇOS</h1>

          <TabsContainer
            items={[
              {
                label: "WEBSITES",
                route: "#websites-tab-item",
                component: {
                  title: "SITES",
                  description: `Páginas da web para seu comércio, marca ou projeto. Visual atrativo, responsivo, e com foco definido visando as demandas do seu negócio.`,
                  centralImage: "/assets/img/services-websites.svg",
                  bgDesktop: "/assets/img/services-websites-bg-desktop.svg",
                },
              },
              {
                label: "WEB APPS",
                route: "#webapps-tab-item",
                component: {
                  title: "APLICAÇÕES WEB",
                  description: `Aplicações completas em navegadores, sem necessidade de instalação.
                  Podem ser acessadas de qualquer dispositivo com acesso à internet.`,
                  centralImage: "/assets/img/services-webapps.svg",
                  bgDesktop: "/assets/img/services-webapps-bg-desktop.svg",
                },
              },
              {
                label: "MOBILE APPS",
                route: "#mobileapps-tab-item",
                component: {
                  title: "APPS MOBILE",
                  description: `Aplicações para smartphones Android e iOS
                  Podem ser utilizadas offline.`,
                  centralImage: "/assets/img/services-mobileapps.svg",
                  bgDesktop: "/assets/img/services-mobileapps-bg-desktop.svg",
                },
              },
              {
                label: "CONSULTORIA",
                route: "#consulting-tab-item",
                component: {
                  title: "CONSULTORIA DE TI",
                  description: `Análise sob medida para o seu negócio.
                  Assessoria especializada em tecnologia da informação`,
                  centralImage: "/assets/img/services-consulting.svg",
                  bgDesktop: "/assets/img/services-consulting-bg-desktop.svg",
                },
              },
            ]}
          />
        </section>

        <section className="flex flex-col gap-8">
          <h1 className="text-center text-3xl font-semibold">NOSSO TIME</h1>
          <div className="flex items-center gap-4 w-full justify-center">
            <DevInfo
              name="Matheus Araújo"
              githubUser="matheusdearaujo"
              linkedinUser="matheussouzadearaujo"
            />
            <span className="rounded-full w-2 h-2 bg-white" />
            <DevInfo
              name="Matheus Nascimento"
              githubUser="matthns"
              linkedinUser="matthns"
            />
            <span className="rounded-full w-2 h-2 bg-white" />
            <DevInfo
              name="Anthony Victor"
              githubUser="anthonyvictor"
              linkedinUser="thonnyvrc"
            />
          </div>
        </section>

        <div className="w-screen max-w-full text-dark-blue p-10 pb-8 border-t-2 border-b-2 border-gray-200">
          <p className="text-2xl font-bold flex items-center text-justify lg:pl-12 lg:pr-12">
            QUEM SOMOS?
          </p>
          <p className="mt-5 text-justify lg:m-12">
            Somos um time de desenvolvimento criado em Salvador/BA, estamos
            unidos há mais de um ano e o nosso foco é oferecer soluções
            eficientes na área de tecnologia ao mercado. Nosso time é composto
            por profissionais devidamente capacitados e com sólida experiência
            na área de Tecnologia da Informação e em Desenvolvimento de
            Software.
          </p>
          <div className="box-border flex flex-wrap justify-center text-white mt-4">
            {/* <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 2000 }}
            scrollbar={{ draggable: true }}
            speed={1000}
            modules={[Autoplay, Scrollbar]}
            breakpoints={{
              768: {
                spaceBetween: 0,
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="bg-blue-900 rounded-lg m-4 md:h-[20rem] p-0 lg:w-[16rem] lg:h-[18rem] md:w-58">
                <p className="font-bold text-center pt-6">WEBSITES</p>
                <ul className="list-disc text-left p-7">
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
              <div className="bg-blue-900 rounded-lg m-4 md:h-[20rem] p-0 lg:w-[16rem] lg:h-[18rem] md:w-58">
                <p className="font-bold text-center pt-6">WEB APPS</p>
                <ul className="list-disc text-left p-7">
                  <li>Páginas da web para seu comércio, marca ou projeto.</li>
                  <li>
                    Visual de qualidade, e super responsivas. (Boa visualização
                    em desktops e celulares.)
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-blue-900 rounded-lg m-4 md:h-[20rem] p-0 lg:w-[16rem] lg:h-[18rem] md:w-60">
                <p className="font-bold text-center pt-6">MOBILE APPS</p>
                <ul className="list-disc text-left p-7">
                  <li>Aplicações web, sem necessidade de instalação.</li>
                  <li>
                    Versáteis, podem ser acessadas de qualquer dispositivo com
                    acesso à internet.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            ...
          </Swiper> */}
          </div>

          <div className="mt-12" id="strategic">
            <div className="" id="strategic-mission">
              <p className="text-2xl font-bold flex items-center">
                <TbTargetArrow className="mr-4 text-2xl" />
                MISSÃO
              </p>
              <p className="mt-2 text-justify">
                Nosso propósito consiste em trazer soluções sustentáveis e
                econômicas aos nossos clientes no ramo de tecnologia da
                informação.
              </p>
            </div>
            <div className="mt-8" id="strategic-vision">
              <p className="text-2xl font-bold flex items-center">
                <AiFillEye className="mr-4 text-2xl" />
                VISÃO
              </p>
              <p className="mt-2 text-justify">
                Nosso propósito consiste em trazer soluções sustentáveis e
                econômicas aos nossos clientes no ramo de tecnologia da
                informação.
              </p>
            </div>
            <div className="mt-8" id="strategic-values">
              <p className="text-2xl font-bold flex items-center">
                <FaBalanceScale className="mr-4 text-2xl" />
                VALORES
              </p>
              <p className="mt-2 text-justify">
                Nossos principais pilares de valores são a responsabilidade para
                com os nossos clientes, com a sociedade, agir sempre com
                transparência e ética, o respeito, e estar sempre aberto a
                grandes desafios.
              </p>
            </div>
          </div>

          <p className="text-lg font-bold mt-12 text-center">FUNDADORES</p>
          <div className="block text-center justify-center md:flex">
            <div
              className="flex items-center justify-center bg-blue-900 p-1 m-4  rounded-md text-white md:p-4"
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
              className="flex items-center justify-center bg-blue-900 p-1 m-4  rounded-md text-white md:p-4"
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
              className="flex items-center justify-center bg-blue-900 p-1 m-4  rounded-md text-white md:p-4"
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
      </div>
    </PageLayout>
  );
};

export default About;

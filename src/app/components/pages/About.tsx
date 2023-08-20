"use client";
import Image from "next/image";

import { TbTargetArrow } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
import PageLayout from "../templates/PageLayout";
import { DevInfo } from "../molecules/DevInfo";
import { TabsContainer } from "../organisms/TabsContainer";
import { Line } from "../atoms/Line";
import { IconBase } from "react-icons/lib";

const About = () => {
  const services = [
    {
      label: "WEBSITES",
      route: "#websites-tab-item",
      component: {
        title: "SITES",
        description: `Páginas da web para seu comércio, marca ou projeto. Visual atrativo, responsivo, e com foco definido visando as demandas do seu negócio.`,
        centralImage: "/assets/img/services-websites.svg",
        bgDesktop: "/assets/img/services-websites-bg-desktop.png",
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
        bgDesktop: "/assets/img/services-webapps-bg-desktop.png",
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
        bgDesktop: "/assets/img/services-mobileapps-bg-desktop.png",
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
        bgDesktop: "/assets/img/services-consulting-bg-desktop.png",
      },
    },
  ];

  const principles = [
    {
      icon: <TbTargetArrow />,
      label: "MISSÃO",
      description: `Trazer soluções sustentáveis, eficientes e econômicas aos nossos clientes.`,
    },
    {
      icon: <AiFillEye />,
      label: "VISÃO",
      description: `Com muito esforço e dedicação, nos tornar uma das maiores empresas de consultoria tecnológica do Brasil.`,
    },
    {
      icon: <FaBalanceScale />,
      label: "VALORES",
      description: `Respeito, responsabilidade social, transparência e ética, sempre dispostos a enfrentar novos desafios.`,
    },
  ];

  return (
    <PageLayout id="about">
      <div className="py-8 lg:py-2 flex flex-col gap-8 max-w-full 2xl:max-w-7xl mx-auto">
        <section className="flex flex-col gap-8 w-full min-w-0">
          <h1 className="text-center text-3xl font-semibold">SERVIÇOS</h1>

          <TabsContainer items={services} />
        </section>

        <section className="flex flex-col gap-8">
          <h1 className="text-center text-3xl font-semibold">NOSSO TIME</h1>
          <div
            className="flex flex-col lg:flex-row items-start gap-8 lg:gap-4 mx-auto 
            lg:w-full lg:items-center lg:justify-center"
          >
            <DevInfo
              name="Matheus Araújo"
              githubUser="matheusdearaujo"
              linkedinUser="matheussouzadearaujo"
            />
            <span className="hidden lg:block rounded-full w-2 h-2 bg-white" />
            <DevInfo
              name="Matheus Silva"
              githubUser="matthns"
              linkedinUser="matthns"
            />
            <span className="hidden lg:block rounded-full w-2 h-2 bg-white" />
            <DevInfo
              name="Anthony Victor"
              githubUser="anthonyvictor"
              linkedinUser="thonnyvrc"
            />
          </div>
        </section>
        <section className="flex flex-col gap-8 lg:max-w-5xl mx-auto">
          <p className="text-md lg:text-lg 2xl:text-xl text-center w-full">
            Através da conservação e prática desses pilares conseguimos
            desenvolver
            <br />
            um ecossistema responsável para com os nossos clientes & sociedade.
          </p>
          <ul className="flex flex-col lg:flex-row gap-10">
            {principles.map((item) => (
              <li key={item.label} className="flex-1 flex flex-col gap-2">
                <header className="flex items-center gap-2">
                  <IconBase className="text-4xl">{item.icon}</IconBase>
                  <h3 className="text-2xl font-semibold">{item.label}</h3>
                </header>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;

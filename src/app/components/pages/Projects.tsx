import Image from "next/image";
import PageLayout from "@/app/components/templates/PageLayout";
import { TabsContainer } from "../organisms/TabsContainer";

export const Projects = () => {
  const projects = [
    {
      label: "DIGITÁXI",
      route: "#digitaxi-tab-item",
      component: {
        title: "DIGITÁXI",
        description: `A Digitáxi possui ampla experiência no  segmento de transporte de passageiros, está estabelecida a mais de 26 anos no mercado.`,
        centralImage: "/assets/img/projects-digitaxi.svg",
        bgDesktop: "/assets/img/projects-digitaxi-bg-desktop.png",
        href: "https://digitaxi.coop.br/",
      },
    },
    {
      label: "PIZZARIA DB",
      route: "#pizzariadb-tab-item",
      component: {
        title: "PIZZARIA DELICIA DA BAHIA",
        description: `Nascida em 2013, a Pizzaria Delicia da Bahia 
        conquista seus clientes através de um trabalho de excelência, 
        prezando por superar as expectativas dos clientes.`,
        centralImage: "/assets/img/projects-pizzariadb.svg",
        bgDesktop: "/assets/img/projects-pizzariadb-bg-desktop.png",
        href: "https://pizzariadeliciadabahia.com",
      },
    },
    {
      label: "GESTÃO",
      route: "#gestao-tab-item",
      component: {
        title: "GESTÃO EMPRESARIAL",
        description: `A Gestão Empresarial nasceu com o objetivo de crescer 
        de forma sintonizada com a globalização que a cada dia se renova. 
        Somos um time de administradores, contabilistas e advogados, 
        todos com grandes experiências nas mais diversas áreas.`,
        centralImage: "/assets/img/projects-gestao.svg",
        bgDesktop: "/assets/img/projects-gestao-bg-desktop.png",
        href: "http://gstcontabil.com.br",
      },
    },
    {
      label: "COOTRANSPEX",
      route: "#cootranspex-tab-item",
      component: {
        title: "COOTRANSPEX",
        description: `Somos uma cooperativa especializada no ramo 
        de transporte corporativo e executivo de passageiros. Fundada em 28 
        de março de 2014, a Cootranspex surgiu a partir da união de profissionais 
        oriundos da área de transporte dando assim vida a um negócio que está 
        consolidado há mais de sete anos no mercado.`,
        centralImage: "/assets/img/projects-cootranspex.svg",
        bgDesktop: "/assets/img/projects-cootranspex-bg-desktop.png",
        href: "https://cootranspex.com.br/",
      },
    },
    {
      label: "BAPE",
      route: "#bape-tab-item",
      component: {
        title: "BTR GUINCHOS (BAPE)",
        description: `Somos uma empresa especialista em transporte de automóveis 
        em todo território nacional. Atuamos no ramo a mais de 12 anos, atualmente 
        atendendo locadoras, seguradoras, particulares e leilões.`,
        centralImage: "/assets/img/projects-bape.svg",
        bgDesktop: "/assets/img/projects-bape-bg-desktop.png",
        href: "https://btrguinchos.vercel.app/login",
      },
    },
  ];
  return (
    <PageLayout className="" id="projects">
      <div className="py-8 flex flex-col gap-8 max-w-full 2xl:max-w-7xl mx-auto">
        <section className="flex flex-col gap-8 w-full min-w-0">
          <h1 className="text-center text-3xl font-semibold">PROJETOS</h1>

          <TabsContainer items={projects} />
        </section>
      </div>

      {/* <p className="text-2xl font-bold flex items-center text-justify lg:pl-12 lg:pr-12">
        PROJETOS REALIZADOS
      </p>
      <p className="text-justify mt-4 mb-8 lg:m-12">
        Temos a imensa satisfação em fazer o que tanto amamos, e por isso os
        nossos clientes nos confiaram a responsabilidade em atender as suas
        demandas.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-16 lg:grid lg:grid-cols-4 lg:justify-items-center">
        <a
          href="https://www.digitaxi.coop.br"
          target="blank"
          className="lg:p-4"
        >
          <Image
            src="/assets/img/digitaxi.png"
            width={150}
            height={100}
            alt=""
            className=""
          ></Image>
        </a>
        <a
          href="https://www.bapetransportes.com"
          target="blank"
          className="lg:p-4"
        >
          <Image
            src="/assets/img/bape.png"
            width={100}
            height={100}
            alt=""
            className=""
          ></Image>
        </a>
        <a href="https://cootranspex.com.br" target="blank" className="lg:p-4">
          <Image
            src="/assets/img/cootranspex.png"
            width={150}
            height={100}
            alt=""
            className=""
          ></Image>
        </a>
        <a href="http://gstcontabil.com.br" target="blank" className="lg:p-4">
          <Image
            src="/assets/img/gestao.png"
            width={100}
            height={100}
            alt=""
            className=""
          ></Image>
        </a>
      </div> */}
    </PageLayout>
  );
};

export default Projects;

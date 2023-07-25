import Image from "next/image";

export const Projects = () => {
  return (
    <div className="w-screen h-screen text-black p-10">
      <p className="text-2xl font-bold flex items-center text-justify lg:m-12">
        {/* <FcInfo className="mr-3 text-4xl" /> */}
        PROJETOS REALIZADOS
      </p>
      <p className="text-justify mt-4 mb-8 lg:m-12">
        Temos a imensa satisfação em fazer o que tanto amamos, e por isso os
        nossos clientes nos confiaram a responsabilidade em atender as suas
        demandas.
      </p>
      <div className="flex flex-wrap justify-center items-center flex-row-4 gap-20 md:p-6 m-14 lg:grid justify-items-center">
        <a href="https://www.digitaxi.coop.br" target="blank">
          <Image
            src="/assets/img/digitaxi.png"
            width={150}
            height={100}
            alt=""
            className=""
          ></Image>
        </a>
        <a href="https://www.bapetransportes.com" target="blank">
          <Image
            src="/assets/img/bape.png"
            width={100}
            height={100}
            alt=""
            className=""
          ></Image>
        </a>
        <a href="http://www.cootranspex.com.br" target="blank">
          <Image
            src="/assets/img/cootranspex.png"
            width={150}
            height={100}
            alt=""
            className=""
          ></Image>
        </a>
        <a href="http://gstcontabil.com.br" target="blank">
          <Image
            src="/assets/img/gestao.png"
            width={100}
            height={100}
            alt=""
            className=""
          ></Image>
        </a>
      </div>
    </div>
  );
};

export default Projects;

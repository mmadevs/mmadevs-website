import Image from "next/image";

export const Projects = () => {
  return (
    <div className="w-screen h-screen  text-black pt-4">
      <p className="text-center text-lg font-bold">PROJETOS REALIZADOS</p>
      <p className="text-justify p-6">
        Temos a imensa satisfação em fazer o que tanto amamos, e por isso os
        nossos clientes nos confiaram a responsabilidade em atender as suas
        demandas.
      </p>
      <div className="flex flex-wrap flex-col-2 items-center gap-12 justify-center p-4">
        <Image
          src="/assets/img/digitaxi.png"
          width={150}
          height={100}
          alt=""
        ></Image>
        <Image
          src="/assets/img/bape.png"
          width={100}
          height={100}
          alt=""
        ></Image>
        <Image
          src="/assets/img/cootranspex.png"
          width={150}
          height={100}
          alt=""
        ></Image>
        <Image
          src="/assets/img/gestao.png"
          width={100}
          height={100}
          alt=""
        ></Image>
      </div>
    </div>
  );
};

export default Projects;

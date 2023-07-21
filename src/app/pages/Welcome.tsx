import Image from "next/image";
import Script from "next/script";

const ProjectImg = () => {
  return (
    <Image
      src="/assets/image-1.png"
      className=""
      alt="Projeto"
      width={600}
      height={480}
    />
  );
};

const Welcome = () => {
  return (
    <>
      <div className="bg-[url('/assets/img/bg.jpg')] bg-cover z-0">
        <div className="w-screen h-screen flex justify-center items-center   text-white bg-dark-blue/90 z-10">
          {/* bg-dark-blue/90 */}

          <div className="box-border h-80 w-[40rem] p-4">
            <p className="text-5xl font-bold text-sky-400">
              A solução para o seu negócio.
            </p>
            <p className="mt-5">
              Entregamos o que você precisa, de forma ágil, eficaz e com valor
              justo, que cabe no seu bolso. Faça hoje mesmo um orçamento
              conosco!
            </p>
            <button className="rounded-lg mt-5 p-3 text-white bg-blue-800 hover:bg-blue-600">
              Solicitar orçamento
            </button>
          </div>
          <ProjectImg />
        </div>
      </div>
    </>
  );
};

export default Welcome;

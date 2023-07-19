import Image from "next/image";

const ProjectImg = () => {
  return (
    <Image
      src="/assets/image-1.png"
      className=""
      alt="Projeto"
      width={500}
      height={250}
    />
  );
};

const Welcome = () => {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <p className="mt-24 w-[35rem] text-5xl font-bold text-sky-600">
            A solução para o seu negócio.
          </p>
          <p className="mt-5 w-[32rem] text-white">
            Entregamos o que você precisa, de forma ágil, eficaz e com valor
            justo, que cabe no seu bolso. Faça hoje mesmo um orçamento conosco!
          </p>
          <button className="mt-8 rounded-lg p-3 bg-blue-500 hover:bg-blue-800">
            Solicitar orçamento
          </button>
        </div>
        <ProjectImg />
      </div>
    </>
  );
};

export default Welcome;

import Image from "next/image";

const ProjectImg = () => {
  return (
    <Image
      src="/assets/image-1.png"
      className=""
      alt="Projeto"
      width={600}
      height={350}
    />
  );
};

const Welcome = () => {
  return (
    <>
      <div className="">
        <p className="mt-24 ml-24 w-[35rem] text-5xl font-bold text-sky-600">
          A solução para o seu negócio.
        </p>
        <p className="mt-5 ml-24 w-[32rem] text-white">
          Entregamos o que você precisa, de forma ágil, eficaz e com valor
          justo, que cabe no seu bolso. Faça hoje mesmo um orçamento conosco!
        </p>
        <ProjectImg />
      </div>
    </>
  );
};

export default Welcome;

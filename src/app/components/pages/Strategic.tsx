import { TbTargetArrow } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
import PageLayout from "@/app/components/templates/PageLayout";
import Image from "next/image";

export const Strategic = () => {
  return (
    <PageLayout id="strategic" bg="light">
      {/* <div className="w-screen h-screen text-dark-blue p-10">
        <p className="bg-pink-500 text-2xl font-bold flex items-center text-justify lg:pl-12 lg:pr-12">
          NOSSO FOCO
        </p>
        <div className="flex items-center p-4 flex-wrap">
          <TbTargetArrow className="text-2xl" />
          <p className="ml-4 text-2xl font-bold">MISSÃO</p>
          <p className="mt-2 text-justify">
            Nosso propósito consiste em trazer soluções sustentáveis e
            econômicas aos nossos clientes no ramo de tecnologia da informação.
          </p>
        </div>
        <div className="flex items-center p-4 flex-wrap">
          <AiFillEye className="text-2xl" />
          <p className="ml-4 text-2xl font-bold">VISÃO</p>
          <p className="mt-2 text-justify">
            Nosso propósito consiste em trazer soluções sustentáveis e
            econômicas aos nossos clientes no ramo de tecnologia da informação.
          </p>
        </div>
        <div className="flex items-center p-4 flex-wrap">
          <FaBalanceScale className="text-2xl" />
          <p className="ml-4 text-2xl font-bold">VALORES</p>
          <p className="mt-2 text-justify">
            Nossos principais pilares de valores são a responsabilidade para com
            os nossos clientes, com a sociedade, agir sempre com transparência e
            ética, o respeito, e estar sempre aberto a grandes desafios.
          </p>
        </div>
        <div className="block text-center mt-6">
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
      </div> */}
    </PageLayout>
  );
};

export default Strategic;

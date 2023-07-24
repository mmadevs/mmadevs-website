import Image from "next/image";

export const Contact = () => {
  return (
    <div className="w-screen text-black pt-4 p-6 bg-blue-300">
      <p className="text-left text-lg font-bold">FALE CONOSCO</p>
      <p className="text-justify mt-4">
        Somos a solução que você precisa e estamos a disposição para colaborar
        com a sua empresa, colocamos o seu projeto em prática de forma
        eficiente, ágil e econômica.
      </p>

      <form className="grid mt-6" id="contactus">
        <label htmlFor="name" id="name">
          Seu nome
        </label>
        <input
          className="rounded-md h-7 mt-2"
          type="text"
          id="name"
          maxLength={40}
          required
        />

        <label className="mt-4" htmlFor="name" id="businessname">
          Empresa
        </label>
        <input
          className="rounded-md h-7 mt-2"
          type="text"
          id="businessname"
          maxLength={40}
          required
        />

        <label className="mt-4" htmlFor="mail" id="mail">
          E-mail
        </label>
        <input
          className="rounded-md h-7 mt-2"
          type="mail"
          id="mail"
          maxLength={40}
          required
        />

        <label className="mt-4" htmlFor="phone" id="phone">
          Seu contato
        </label>
        <input
          className="rounded-md h-7 mt-2"
          type="text"
          id="phone"
          maxLength={14}
          required
        />

        <label className="mt-4" htmlFor="tellme" id="tellme">
          Conta um pouco sobre o que você precisa
        </label>
        <textarea
          className="rounded-md mt-2"
          rows={4}
          cols={50}
          maxLength={200}
          name="tellmore"
          form="contactus"
          required
        ></textarea>

        <button
          className="p-2 mt-6 block rounded-lg text-white bg-blue-900 hover:bg-blue-700"
          type="submit"
        >
          Enviar mensagem
        </button>
      </form>
    </div>
  );
};

export default Contact;

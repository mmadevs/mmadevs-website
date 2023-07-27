"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [bsName, setBsName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: any) {
    e.preventDefault();

    if (
      name === "" ||
      bsName === "" ||
      email === "" ||
      phone === "" ||
      message === ""
    ) {
      alert("Preencha todos os campos do formulário");
      return;
    }

    const templateParamns = {
      from_name: name,
      bsName: bsName,
      mail: email,
      phone: phone,
      message: message,
    };

    emailjs
      .send(
        "service_7bex26l",
        "template_15al45o",
        templateParamns,
        "AT-igmZGhayXZdHjM"
      )
      .then(
        (res) => {
          // console.log("E-mail enviado!", res.status, res.text);
          alert("Solicitação de contato enviada!");
          setName("");
          setBsName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (err) => {
          console.log("Erro: ", err);
        }
      );
  }

  return (
    <div
      className="w-screen text-black p-10 bg-blue-50 border-t-2 border-b-2 border-gray-200 "
      id="contact-us"
    >
      <p className="text-2xl font-bold flex items-center text-justify lg:pl-12 lg:pr-12">
        {/* <FcInfo className="mr-3 text-4xl" /> */}
        FALE CONOSCO
      </p>
      <p className="text-justify mt-4 lg:m-12">
        Somos a solução que você precisa e estamos a disposição para colaborar
        com a sua empresa, colocamos o seu projeto em prática de forma
        eficiente, ágil e econômica.
      </p>

      <form
        className="grid mt-6 pt-2 pb-0 lg:p-36 lg:pt-0 lg:pb-0"
        id="contactus"
        onSubmit={sendEmail}
      >
        <label htmlFor="name" id="name">
          Seu nome
        </label>
        <input
          className="rounded-md p-1.5 mt-2"
          type="text"
          id="name"
          maxLength={40}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label className="mt-4" htmlFor="bsName" id="bsName">
          Empresa
        </label>
        <input
          className="rounded-md p-1.5 mt-2"
          type="text"
          id="bsName"
          maxLength={40}
          required
          onChange={(e) => setBsName(e.target.value)}
        />

        <label className="mt-4" htmlFor="mail" id="mail">
          E-mail
        </label>
        <input
          className="rounded-md p-1.5 mt-2"
          type="mail"
          id="mail"
          maxLength={40}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="mt-4" htmlFor="phone" id="phone">
          Seu contato
        </label>
        <input
          className="rounded-md p-1.5 mt-2"
          type="text"
          id="phone"
          maxLength={14}
          required
          onChange={(e) => setPhone(e.target.value)}
        />

        <label className="mt-4" htmlFor="message" id="message">
          Conta um pouco sobre o que você precisa
        </label>
        <textarea
          className="rounded-md mt-2"
          rows={4}
          cols={50}
          maxLength={200}
          name="message"
          form="contactus"
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          className="p-2 mt-6 block rounded-lg text-white bg-blue-900 hover:bg-blue-700 lg:mt-10"
          type="submit"
        >
          Enviar mensagem
        </button>
      </form>
    </div>
  );
};

export default Contact;

"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PageLayout from "../templates/PageLayout";
import { IFormInput } from "@/app/types/formInput";
import { FormInput } from "../molecules/FormInput";

export const Contact = () => {
  const [name, setName] = useState("");
  const [bsName, setBsName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const changeData = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const inputs: Array<IFormInput> = [
    {
      name: "name",
      label: "Seu nome",
      maxLength: 40,
      type: "text",
      value: data.name,
      setValue: (e) => changeData("name", e),
    },
    {
      name: "company",
      label: "Empresa",
      maxLength: 40,
      type: "text",
      value: data.company,
      setValue: (e) => changeData("company", e),
    },
    {
      name: "email",
      label: "Seu email",
      maxLength: 40,
      type: "email",
      value: data.email,
      setValue: (e) => changeData("email", e),
    },
    {
      name: "phone",
      label: "Seu contato",
      maxLength: 14,
      type: "tel",
      value: data.phone,
      setValue: (e) => changeData("phone", e),
    },
    {
      name: "message",
      label: "Conta um pouco sobre o que você precisa",
      maxLength: 200,
      type: "text",
      value: data.message,
      setValue: (e) => changeData("message", e),
    },
  ];

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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY as string,
        templateParamns,
        process.env.NEXT_PUBLIC_EMAILJS_API_KEY as string
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
    <PageLayout id="contact-us" bg="light">
      <div className="w-full text-black ">
        {/* <p className="text-2xl font-bold flex items-center text-justify">
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
          {inputs.map((input) => (
            <FormInput key={input.name} {...input} />
          ))}

          <button
            className="p-2 mt-6 block rounded-lg text-white bg-blue-900 hover:bg-blue-700 lg:mt-10"
            type="submit"
          >
            Enviar mensagem
          </button>
        </form> */}
      </div>
    </PageLayout>
  );
};

export default Contact;

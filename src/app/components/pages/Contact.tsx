"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PageLayout from "../templates/PageLayout";
import { IFormInput } from "@/app/types/formInput";
import { z, ZodError } from "zod";

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

  const [fields, setFields] = useState<
    {
      name: string;
      type: "text" | "email" | "tel";
      label: string;
      span: boolean;
      value: string;
      getError: (value: string) => string | undefined | null;
      long?: boolean;
      error?: string;
    }[]
  >([
    {
      name: "name",
      type: "text",
      label: "Seu nome:",
      span: true,
      value: "",
      getError: (value: string) => {
        try {
          const schema = z
            .string({
              required_error: "Este campo é obrigatório!",
              invalid_type_error: "Insira um nome válido!",
            })
            .min(5, "Insira um nome válido!");
          schema.parse(value);
          return undefined;
        } catch (err: unknown) {
          const error = err as ZodError;
          return error.issues[0].message;
        }
      },
    },
    {
      name: "mail",
      type: "email",
      label: "Email:",
      span: false,
      value: "",
      getError: (value: string) => {
        try {
          const schema = z
            .string({
              required_error: "Este campo é obrigatório!",
              invalid_type_error: "Insira um email válido!",
            })
            .min(5, "Insira um email válido!");
          schema.parse(value);
          return undefined;
        } catch (err: unknown) {
          const error = err as ZodError;
          return error.issues[0].message;
        }
      },
    },
    {
      name: "phone",
      type: "tel",
      label: "Telefone/Celular:",
      span: false,
      value: "",
      getError: (value: string) => {
        try {
          const schema = z
            .string({
              required_error: "Este campo é obrigatório!",
              invalid_type_error: "Insira um telefone válido!",
            })
            .min(10, "Insira um telefone válido! (Com DDD)");

          schema.parse(value.replace(/[^0-9+]/g, ""));
          return undefined;
        } catch (err: unknown) {
          const error = err as ZodError;
          return error.issues[0].message;
        }
      },
    },
    {
      name: "message",
      type: "text",
      label: "Do que você precisa?",
      span: true,
      value: "",
      getError: (value: string) => {
        try {
          const schema = z
            .string({
              required_error: "Este campo é obrigatório!",
              invalid_type_error: "Insira uma mensagem válida!",
            })
            .min(5, "Insira uma mensagem válida!");
          schema.parse(value);
          return undefined;
        } catch (err: unknown) {
          const error = err as ZodError;
          return error.issues[0].message;
        }
      },
      long: true,
    },
  ]);

  return (
    <PageLayout id="contact-us">
      <div className="py-8 flex flex-col gap-4 max-w-full lg:max-w-4xl mx-auto w-full">
        <h1 className="text-center text-3xl font-semibold">FALE CONOSCO </h1>

        <form
          id="contact-form"
          name="contact-form"
          className="flex flex-col gap-2 lg:grid grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (fields.every((x) => x.value && !x.error)) {
              console.log(e);
            } else {
              console.error("Preencha o formulário corretamente!");
            }
          }}
        >
          {fields.map((x) => {
            const props = {
              className: `text-black rounded-md p-2 text-lg resize-none`,
              id: `${x.name}-input`,
              name: `${x.name}-input`,
              value: x.value,
              type: x.type,
              rows: x.long ? 3 : 1,
              onChange: (e: any) =>
                setFields((prev) =>
                  prev.map((y) =>
                    y.name === x.name
                      ? { ...y, value: e.target.value, error: undefined }
                      : y
                  )
                ),
              onBlur: (e: any) => {
                const error = x.getError(e.target.value);
                if (error) {
                  setFields((prev) =>
                    prev.map((y) =>
                      y.name === x.name ? { ...y, error: error } : y
                    )
                  );
                }
              },
            };

            return (
              <fieldset
                key={x.name}
                className={`flex flex-col ${x.span ? "col-span-2" : ""} ${
                  x.long ? "flex-1 row-span-2" : ""
                }`}
              >
                <label htmlFor={`${x.name}-input`}>{x.label}</label>
                {x.long ? <textarea {...props} /> : <input {...props} />}
                <small
                  className={`pointer-events-none select-none text-sm ${
                    x.error ? "text-red-500" : "text-transparent"
                  }`}
                >
                  {x.error ?? "x "}
                </small>
              </fieldset>
            );
          })}

          <button
            className="bg-blue-500 text-lg py-3 px-8 col-span-2
            rounded-xl hover:bg-transparent hover:text-blue-400 
          transition-all border-blue-500 border-4"
          >
            Enviar
          </button>
        </form>
      </div>
    </PageLayout>
  );
};

export default Contact;

"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PageLayout from "../templates/PageLayout";
import { z, ZodError } from "zod";
import { toast } from "react-toastify";

export const Contact = () => {
  const [isFormBlocked, setIsFormBlocked] = useState(false);

  function sendEmail() {
    const templateParamns = fields.reduce(
      (obj, item) => Object.assign(obj, { [item.name]: item.value }),
      {}
    );

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY as string,
        templateParamns,
        process.env.NEXT_PUBLIC_EMAILJS_API_KEY as string
      )
      .then(
        () => {
          toast(
            `Sua mensagem foi enviada pra gente! Entraremos em contato em breve.`,
            { type: "success" }
          );
          setIsFormBlocked(true);
        },
        (err) => {
          console.error("Erro: ", err);
          toast(
            "Ocorreu um erro ao enviar sua mensagem, por favor entre em contato conosco através do nosso whatsapp que se encontra no rodapé da página.",
            { type: "error" }
          );
        }
      );
  }

  const [fields, setFields] = useState<
    {
      name: string;
      type: "text" | "email" | "tel";
      label: string;
      span: boolean;
      maxLength: number;
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
      maxLength: 50,
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
      name: "email",
      type: "email",
      label: "Email:",
      span: false,
      maxLength: 50,
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
      maxLength: 30,
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
      maxLength: 300,
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
          className={`flex flex-col gap-2 lg:grid grid-cols-2 ${
            isFormBlocked ? "pointer-events-none select-none opacity-50" : ""
          }`}
          onSubmit={(e) => {
            e.preventDefault();
            if (fields.every((x) => x.value && !x.error)) {
              sendEmail();
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
              maxLength: x.maxLength,
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
            disabled={isFormBlocked}
          >
            Enviar
          </button>
        </form>
      </div>
    </PageLayout>
  );
};

export default Contact;

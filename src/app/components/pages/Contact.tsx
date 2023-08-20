"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PageLayout from "../templates/PageLayout";
import { z, ZodError } from "zod";
import { toast } from "react-toastify";

export const Contact = () => {
  const [isFormBlocked, setIsFormBlocked] = useState(false);
  const [isSending, setIsSending] = useState(false);

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
      .then(() => {
        toast(
          `Sua mensagem foi enviada pra gente! Entraremos em contato em breve.`,
          { type: "success" }
        );
        setIsFormBlocked(true);
      })
      .catch((err) => {
        console.error("Erro: ", err);
        toast(
          "Ocorreu um erro ao enviar sua mensagem, por favor entre em contato conosco através do nosso whatsapp que se encontra no rodapé da página.",
          { type: "error" }
        );
      })
      .finally(() => {
        setIsSending(false);
      });
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
              setIsSending(true);
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
          transition-all border-blue-500 border-4 flex justify-center"
            type="submit"
            disabled={isFormBlocked}
          >
            {isSending && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            Enviar
          </button>
        </form>
      </div>
    </PageLayout>
  );
};

export default Contact;

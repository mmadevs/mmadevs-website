import { MdMail, MdPhone, MdWhatsapp } from "react-icons/md";
import { Line } from "../atoms/Line";

export const Footer = () => {
  return (
    <footer className="w-full text-white bg-gray-950">
      <Line />
      <div className="flex justify-center gap-8 px-8">
        <a
          href="mailto:mmadevsys@gmail.com"
          className="text-xl flex gap-2 items-center text-blue-500 hover:underline"
        >
          <MdMail className="text-3xl" />
          <small className="hidden lg:block">mmadevsys@gmail.com</small>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+5571986366233&text=Ol%C3%A1"
          target="_blank"
          className="text-xl flex gap-2 items-center text-blue-500 hover:underline"
        >
          <MdWhatsapp className="text-3xl" />
          <small className="hidden lg:block">(71) 9 8636-6233</small>
        </a>
      </div>
      <p className="p-2 text-center">
        MMA Devs | 2023 | Todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;

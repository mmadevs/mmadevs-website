import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconBase } from "react-icons/lib";

export const DevInfo = ({
  name,
  githubUser,
  linkedinUser,
}: {
  name: string;
  githubUser: string;
  linkedinUser: string;
}) => {
  const SocialLink = ({ type }: { type: "github" | "linkedin" }) => {
    return (
      <Link
        target="_blank"
        className="flex gap-1 items-center text-black bg-white px-1 rounded-sm"
        href={
          type === "github"
            ? `https://github.com/${githubUser}`
            : `https://linkedin.com/in/${linkedinUser}`
        }
      >
        <IconBase className="text-sm">
          {type === "github" ? <FaGithub /> : <FaLinkedin />}
        </IconBase>
        <small className="text-xs">
          {type === "github" ? "Github" : "Linkedin"}
        </small>
      </Link>
    );
  };

  return (
    <li className="flex gap-2 items-center min-w-min">
      <div
        className={`h-12 w-12 flex-grow-0 flex-shrink-0 overflow-hidden 
        relative aspect-square`}
      >
        <Image
          src={`https://avatars.githubusercontent.com/${githubUser}`}
          alt="Developer's photo"
          fill
          className="rounded-full border-white border-2"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg whitespace-nowrap">{name}</h2>
        <div className="flex gap-1">
          <SocialLink type={"github"} />
          <SocialLink type={"linkedin"} />
        </div>
      </div>
    </li>
  );
};

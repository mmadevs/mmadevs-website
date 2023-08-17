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
        className="flex gap-1 items-center text-black bg-white px-2 rounded-md"
        href={
          type === "github"
            ? `https://github.com/${githubUser}`
            : `https://linkedin.com/in/${linkedinUser}`
        }
      >
        <IconBase className="text-lg">
          {type === "github" ? <FaGithub /> : <FaLinkedin />}
        </IconBase>
        <small className="text-md">
          {type === "github" ? "Github" : "Linkedin"}
        </small>
      </Link>
    );
  };

  return (
    <li className="flex gap-2 items-center min-w-min">
      <div
        className={`h-14 w-14 flex-grow-0 flex-shrink-0 overflow-hidden 
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
        <h2 className="text-2xl whitespace-nowrap">{name}</h2>
        <div className="flex gap-2">
          <SocialLink type={"github"} />
          <SocialLink type={"linkedin"} />
        </div>
      </div>
    </li>
  );
};

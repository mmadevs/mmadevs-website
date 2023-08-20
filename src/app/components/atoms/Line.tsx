import Image from "next/image";

export const Line = () => (
  <div className="relative min-h-[6px] w-full  animate-ping animate-infinite animate-alternate-reverse animate-duration-[1.5s]">
    <Image src={"/assets/img/line.svg"} alt="breaking line" fill />
  </div>
);

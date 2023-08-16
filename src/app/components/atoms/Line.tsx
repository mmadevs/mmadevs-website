import Image from "next/image";

export const Line = () => (
  <div className="relative min-h-[6px] w-full">
    <Image src={"/assets/img/line.svg"} alt="breaking line" fill />
  </div>
);

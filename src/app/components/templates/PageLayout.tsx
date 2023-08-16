"use client";

import { FunctionComponent, ReactNode, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useNavBar } from "@/app/context/navbarContext";

interface PageLayoutProps {
  id: string;
  className?: string;
  children: ReactNode | ReactNode[];
  bg: "dark" | "light";
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({
  id,
  className,
  children,
  bg,
}) => {
  const { ref, inView } = useInView({
    initialInView: false,
    rootMargin: "20px",
  });

  const { setCurrentRoute } = useNavBar();

  useEffect(() => {
    if (inView) {
      setCurrentRoute(`#${id}`);
    }
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main
      id={id}
      className={`px-2 lg:px-8 pt-[80px] gap-8 w-full min-h-screen flex
      ${bg === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"}
      ${className ?? ""}`}
    >
      <div className="flex flex-col flex-1 w-full h-full" ref={ref}>
        <div className="flex-1"></div>
        {children}
        <div className="flex-1"></div>
      </div>
    </main>
  );
};

export default PageLayout;

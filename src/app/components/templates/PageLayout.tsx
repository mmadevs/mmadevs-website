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
      className={`gap-8 px-2 lg:px-8 py-12 w-screen min-h-screen max-w-screen
      
      ${bg === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"}
      ${className ?? ""}`}
    >
      <div className="w-full min-h-screen flex flex-col" ref={ref}>
        <div className="flex-1"></div>
        {children}
        <div className="flex-1"></div>
      </div>
    </main>
  );
};

export default PageLayout;

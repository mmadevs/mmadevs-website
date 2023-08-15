"use client";

import { FunctionComponent, ReactNode, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useNavBar } from "@/app/context/navbarContext";

interface PageLayoutProps {
  id: string;
  className?: string;
  children: ReactNode | ReactNode[];
  _ref?: any;
  bg: "dark" | "light";
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({
  id,
  className,
  children,
  _ref,
  bg,
}) => {
  const { ref, inView } = useInView({
    initialInView: false,
    rootMargin: "20px",
  });

  const { currentRoute, setCurrentRoute } = useNavBar();

  useEffect(() => {
    console.log(`${id} is in view:`, inView);
    if (inView) {
      setCurrentRoute(`#${id}`);
    }
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main
      id={id}
      className={`gap-8 p-8 py-24 w-screen min-h-screen max-w-screen overflow-hidden 
      
      ${bg === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"}
      ${className ?? ""}`}
    >
      <div className="w-full h-auto min-h-screen" ref={ref}>
        {children}
      </div>
    </main>
  );
};

export default PageLayout;

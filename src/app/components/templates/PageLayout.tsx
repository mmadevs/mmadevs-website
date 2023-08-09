"use client";

import { FunctionComponent, ReactNode } from "react";

interface PageLayoutProps {
  id: string;
  className?: string;
  children: ReactNode | ReactNode[];
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({
  id,
  className,
  children,
}) => {
  return (
    <main
      id={id}
      className={`relative gap-8 w-full  overflow-hidden text-black ${
        className ?? ""
      }`}
    >
      {children}
    </main>
  );
};

export default PageLayout;

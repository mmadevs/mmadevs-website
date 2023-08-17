import Image from "next/image";
import Link from "next/link";
import { createRef, useState } from "react";

export const TabsContainer = ({
  items,
}: {
  items: {
    label: string;
    route: string;
    component: {
      title: string;
      description: string;
      centralImage: string;
      href?: string;
    };
  }[];
}) => {
  const componentsContainerRef = createRef<HTMLUListElement>();

  const [selectedTab, setSelectedTab] = useState(items[0].route);

  return (
    <div className="relative flex flex-col gap-8">
      <header>
        <ul className="flex gap-4 justify-center overflow-x-auto no-scrollbar">
          {items.map((item) => (
            <Link
              key={item.route}
              href={"#"}
              className="hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                setSelectedTab(item.route);
                const targetElement = document.querySelector(item.route);

                if (targetElement && componentsContainerRef.current) {
                  const containerScrollLeft =
                    componentsContainerRef.current.scrollLeft;

                  const targetOffsetLeft =
                    targetElement.getBoundingClientRect().left;

                  const scrollAmount = targetOffsetLeft + containerScrollLeft;

                  componentsContainerRef.current.scrollTo({
                    left: scrollAmount,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {item.label}
              <div
                className={`h-1 w-full bg-blue-500 ${
                  selectedTab === item.route ? "" : "hidden"
                }`}
              />
            </Link>
          ))}
        </ul>
      </header>
      <main>
        <ul
          id="horizontal-list"
          className={`overflow-y-hidden relative flex w-full
          min-w-0 overflow-x-auto scroll-smooth snap-mandatory snap-x
          no-scrollbar pointer-events-none`}
          ref={componentsContainerRef}
        >
          {items.map((item) => (
            <div
              key={item.route}
              id={item.route.replace("#", "")}
              className={`
                shrink-0 w-full h-80 snap-always snap-start flex flex-col lg:flex-row
                `}
            >
              {/* px-4 lg:px-16 max-w-6xl */}
              <aside className="flex-1 flex flex-col justify-center gap-2">
                <h1
                  className={`text-3xl lg:text-5xl font-semibold animate-fade-left lg:animate-fade-down animate-delay-75 animate-duration-[2s] ${
                    selectedTab === item.route ? "" : "hidden"
                  }`}
                >
                  {item.component.title}
                </h1>
                <p
                  className={`text-md lg:text-lg animate-fade-left lg:animate-fade-up animate-delay-200 animate-duration-[2s] ${
                    selectedTab === item.route ? "" : "hidden"
                  }`}
                >
                  {item.component.description}
                </p>
                {item.component.href && (
                  <Link href={item.component.href}>Visitar...</Link>
                )}
              </aside>
              <aside className="flex-1 flex">
                <div className="relative aspect-square h-full mx-auto flex">
                  <Image
                    className={`text-lg object-cover overflow-visible animate-fade animate-delay-500 animate-duration-[2s] ${
                      selectedTab === item.route ? "" : "hidden"
                    }`}
                    src={item.component.centralImage}
                    alt="aaa"
                    fill
                  />
                </div>
              </aside>
            </div>
          ))}
        </ul>
      </main>
      <footer></footer>
    </div>
  );
};

import Image from "next/image";
import Link from "next/link";
import { createRef, useEffect, useState } from "react";

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
      bgMobile?: string;
      bgDesktop?: string;
    };
  }[];
}) => {
  const componentsContainerRef = createRef<HTMLUListElement>();

  const [selectedTab, setSelectedTab] = useState(items[0].route);

  useEffect(() => {
    const targetElement = document.querySelector(selectedTab);

    if (targetElement && componentsContainerRef.current) {
      const containerScrollLeft = componentsContainerRef.current.scrollLeft;

      const targetOffsetLeft = targetElement.getBoundingClientRect().left;

      const scrollAmount = targetOffsetLeft + containerScrollLeft;

      componentsContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [selectedTab]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const doScroll = () => {
      const currentIndex = items.findIndex((x) => x.route === selectedTab) + 1;
      const foundItem = items[currentIndex];
      const nextItem = foundItem ?? items[0];

      console.log(
        `proximo: ${
          nextItem.route
        }, atual index: ${currentIndex}, proximo encontrado: ${
          (foundItem ?? items[0]).route
        }, items: ${items.map((x) => x.route)}`
      );

      setSelectedTab(nextItem.route);
    };
    const timer = setInterval(() => {
      doScroll();
    }, 3 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative flex flex-col gap-8 w-full min-w-0">
      <header className="flex max-w-full min-w-0 w-full">
        <ul
          className="flex-1 flex gap-4 px-4 lg:justify-center overflow-x-auto
           no-scrollbar min-w-0"
        >
          {items.map((item) => (
            <Link
              key={item.route}
              href={"#"}
              className="hover:text-blue-500 whitespace-nowrap"
              onClick={(e) => {
                e.preventDefault();
                setSelectedTab(item.route);
              }}
            >
              {item.label}
              <div
                className={`h-1 w-full animate-fade bg-blue-500 ${
                  selectedTab === item.route ? "" : "hidden"
                }`}
              />
            </Link>
          ))}
        </ul>
      </header>
      <main className="max-w-full min-w-0">
        <ul
          id="horizontal-list"
          className={`overflow-y-hidden relative flex max-w-full
          min-w-0 overflow-x-auto scroll-smooth snap-mandatory snap-x
          no-scrollbar pointer-events-none`}
          ref={componentsContainerRef}
        >
          {items.map((item) => (
            <div
              style={{
                backgroundImage: `url('${item.component.bgDesktop}')`,
              }}
              key={item.route}
              id={item.route.replace("#", "")}
              className={`
                shrink-0 w-full max-w-full h-96 snap-always snap-start flex flex-col lg:flex-row
                bg-no-repeat bg-cover p-8 overflow-hidden
                `}
            >
              {/* px-4 lg:px-16 max-w-6xl */}
              <aside className="flex-1 flex flex-col justify-center gap-2 max-w-full w-full lg:w-auto">
                <h1
                  className={`text-3xl whitespace-nowrap lg:text-5xl font-semibold animate-fade-left lg:animate-fade-down animate-delay-75 animate-duration-[2s] ${
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
              <aside className="flex-1 flex w-full max-w-full lg:w-auto">
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
      <footer className="absolute bottom-0 mb-4 flex justify-center items-center gap-1 w-full">
        {items.map((item) => (
          <span
            key={item.route}
            className={`flex-0 rounded-full transition-all ${
              selectedTab === item.route
                ? "bg-blue-500 w-2 h-2"
                : "bg-white w-1 h-1 opacity-80"
            }`}
          />
        ))}
      </footer>
    </div>
  );
};

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
  const titleContainerRef = createRef<HTMLAnchorElement>();

  const [selectedTab, setSelectedTab] = useState(items[0].route);

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    const targetElement = document.querySelector(selectedTab);
    const targetTitle = document.querySelector(`${selectedTab}-title`);

    if (
      targetElement &&
      componentsContainerRef.current &&
      titleContainerRef.current
    ) {
      const componentsContainerScrollLeft =
        componentsContainerRef.current.scrollLeft;

      const targetElementOffsetLeft =
        targetElement.getBoundingClientRect().left;

      const componentsContainerScrollAmount =
        targetElementOffsetLeft + componentsContainerScrollLeft;

      componentsContainerRef.current.scrollTo({
        left: componentsContainerScrollAmount,
        behavior: "smooth",
      });

      const titleContainerScrollLeft = titleContainerRef.current.scrollLeft;

      const targetTitleOffsetLeft = targetElement.getBoundingClientRect().left;

      const titleContainerScrollAmount =
        targetTitleOffsetLeft + titleContainerScrollLeft;

      titleContainerRef.current.scrollTo({
        left: titleContainerScrollAmount,
        behavior: "smooth",
      });

      timeout = setTimeout(() => {
        const currentIndex = items.findIndex((x) => x.route === selectedTab);

        const nextIndex = currentIndex + 1;

        const foundItem = items[nextIndex];

        const nextItem = foundItem ?? items[0];

        setSelectedTab(nextItem.route);
      }, 4 * 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [selectedTab]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative flex flex-col gap-8 w-full min-w-0">
      <header className="flex max-w-full min-w-0 w-full">
        <ul
          className="flex-1 flex gap-4 px-4 lg:justify-center 
          overflow-x-auto scroll-smooth snap-mandatory snap-x
           no-scrollbar min-w-0"
        >
          {items.map((item) => (
            <Link
              ref={titleContainerRef}
              id={`${item.route}-title`}
              key={item.route}
              href={"#"}
              className="hover:text-blue-500 whitespace-nowrap snap-always snap-center"
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
                bg-no-repeat bg-cover p-2 lg:p-8 overflow-hidden rounded-md
                `}
            >
              {/* px-4 lg:px-16 max-w-6xl */}
              <aside className="flex-1 flex flex-col justify-center lg:gap-2 max-w-full w-full lg:w-auto">
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
      <footer className="lg:absolute bottom-0 lg:mb-4 flex justify-center items-center gap-1 w-full">
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

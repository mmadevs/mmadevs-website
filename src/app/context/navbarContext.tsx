import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  FunctionComponent,
  ReactNode,
} from "react";
import { INavItem } from "../types/navItem";

interface INavBarContext {
  isNavBarOpen: boolean;
  setIsNavBarOpen: Dispatch<SetStateAction<boolean>>;
  currentRoute: string;
  setCurrentRoute: Dispatch<SetStateAction<string>>;
  navItems: Array<INavItem>;
}

const NavBarContext = createContext<INavBarContext>({
  isNavBarOpen: false,
  setIsNavBarOpen: () => {},
  currentRoute: "#home",
  setCurrentRoute: () => {},
  navItems: [],
});

const NavBarProvider: FunctionComponent<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("#home");

  const navItems = [
    { label: "HOME", route: "#home" },
    { label: "SOBRE", route: "#about" },
    { label: "PROJETOS", route: "#projects" },
    { label: "CONTATO", route: "#contact" },
  ];

  return (
    <NavBarContext.Provider
      value={{
        isNavBarOpen,
        setIsNavBarOpen,
        navItems,
        currentRoute,
        setCurrentRoute,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarProvider;

export const useNavBar = () => {
  return useContext(NavBarContext);
};

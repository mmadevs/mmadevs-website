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
  navItems: Array<INavItem>;
}

const NavBarContext = createContext<INavBarContext>({
  isNavBarOpen: false,
  setIsNavBarOpen: () => {},
  navItems: [],
});

const NavBarProvider: FunctionComponent<{
  children: ReactNode | ReactNode[];
}> = ({ children }) => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const navItems = [
    { label: "HOME", route: "#home" },
    { label: "SOBRE", route: "#about" },
    { label: "PROJETOS", route: "#projects" },
    { label: "FALE CONOSCO", route: "#contact-us" },
  ];

  return (
    <NavBarContext.Provider value={{ isNavBarOpen, setIsNavBarOpen, navItems }}>
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarProvider;

export const useNavBar = () => {
  return useContext(NavBarContext);
};

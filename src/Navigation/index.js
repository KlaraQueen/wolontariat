import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationWrapper,
  LogoBox,
  MenuList,
  MobileMenuButton,
  MenuIcon,
} from "./styled";
import { Start } from "./Start";
import { About } from "./About";
import { FAQ } from "./FAQ";
import { AuthStatus } from "../AuthStatus";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (event) => {
    if (event.target.closest("a")) {
      setIsMenuOpen(false);
    }
  };

  return (
    <NavigationWrapper>
      <LogoBox>
        <Link to="/">
          Wolontariat<span>App</span>
        </Link>
      </LogoBox>

      <MobileMenuButton
        type="button"
        onClick={toggleMenu}
        aria-label="Otwórz menu"
        aria-expanded={isMenuOpen}
      >
        <MenuIcon $isOpen={isMenuOpen} />
      </MobileMenuButton>

      <MenuList $isOpen={isMenuOpen} onClick={handleMenuClick}>
        <Start />
        <About />
        <FAQ />
        <AuthStatus />
      </MenuList>
    </NavigationWrapper>
  );
};

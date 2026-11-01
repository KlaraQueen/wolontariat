import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
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
  const { isAuthenticated } = useAuth0();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (event) => {
    if (event.target.closest("a")) {
      setIsMenuOpen(false);
    }
  };

  return (
    <NavigationWrapper $isAuthenticated={isAuthenticated}>
      <LogoBox>
        <Link to="/">
          Wolontariat<span>App</span>
        </Link>
      </LogoBox>

      {!isAuthenticated && (
        <MobileMenuButton
          type="button"
          onClick={toggleMenu}
          aria-label="Otwórz menu"
          aria-expanded={isMenuOpen}
        >
          <MenuIcon $isOpen={isMenuOpen} />
        </MobileMenuButton>
      )}

      <MenuList
        $isOpen={isMenuOpen}
        $isAuthenticated={isAuthenticated}
        onClick={handleMenuClick}
      >
        {!isAuthenticated && (
          <>
            <Start />
            <About />
            <FAQ />
          </>
        )}
        <AuthStatus />
      </MenuList>
    </NavigationWrapper>
  );
};

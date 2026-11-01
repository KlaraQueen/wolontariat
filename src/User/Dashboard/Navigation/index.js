import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  DashboardNavWrapper,
  NavToggle,
  ToggleIcon,
  NavList,
  NavItem,
  StyledNavLink,
} from "./styled";

export const DashboardNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationRef = useRef(null);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!navigationRef.current?.contains(event.target)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isOpen]);

  return (
    <DashboardNavWrapper ref={navigationRef}>
      <NavToggle
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls="dashboard-navigation-links"
      >
        Menu użytkownika
        <ToggleIcon $isOpen={isOpen} aria-hidden="true" />
      </NavToggle>
      <NavList id="dashboard-navigation-links" $isOpen={isOpen}>
        <NavItem>
          <StyledNavLink to="/user/dashboard" end onClick={closeMenu}>
            Profil główny
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink
            to="/user/dashboard/moj-wolontariat"
            onClick={closeMenu}
          >
            Mój wolontariat
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink to="/user/dashboard/harmonogram" onClick={closeMenu}>
            Harmonogram / Kwesty
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink to="/user/dashboard/dokumenty" onClick={closeMenu}>
            Dokumenty
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink to="/user/dashboard/ustawienia" onClick={closeMenu}>
            Ustawienia
          </StyledNavLink>
        </NavItem>
      </NavList>
    </DashboardNavWrapper>
  );
};

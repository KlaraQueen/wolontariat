import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export const DashboardNavWrapper = styled.nav`
  position: relative;
  z-index: 1;
  margin-bottom: clamp(20px, 3vw, 32px);
  min-width: 0;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.surfaceWhite};
  box-shadow: ${({ theme }) => theme.colors.volunteerControlShadow};
`;

export const NavToggle = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    width: 100%;
    min-height: 54px;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 0 18px;
    background: ${({ theme }) => theme.colors.surfaceWhite};
    color: ${({ theme }) => theme.colors.text};
    font: inherit;
    font-weight: 750;
    text-align: left;

    &:focus-visible {
      outline: 3px solid ${({ theme }) => theme.colors.volunteerFocusRing};
      outline-offset: -4px;
      border-radius: 18px;
    }
  }
`;

export const ToggleIcon = styled(ChevronDown)`
  width: 19px;
  height: 19px;
  flex: none;
  color: ${({ theme }) => theme.colors.primary};
  transition: transform 0.2s ease;

  ${({ $isOpen }) => $isOpen && "transform: rotate(180deg);"}
`;

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  align-items: stretch;
  gap: 0.4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.55rem;
  list-style: none;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $isOpen }) => ($isOpen ? "grid" : "none")};
    grid-template-columns: 1fr;
    padding-top: 0.25rem;
    border-top: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.25rem;
    padding: 0.45rem;
  }
`;

export const NavItem = styled.li`
  min-width: 0;
  display: flex;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  width: 100%;
  min-width: 0;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  padding: 0.55rem clamp(0.45rem, 1vw, 0.9rem);
  text-align: center;
  white-space: normal;
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 600;
  font-size: clamp(0.8rem, 1.1vw, 0.95rem);
  border-radius: 999px;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.palePurple};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 750;
    background: ${({ theme }) => theme.colors.volunteerAvatarGradient};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.volunteerBorder};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.volunteerFocusRing};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 48px;
    border-radius: 14px;
    font-size: 0.92rem;
  }
`;

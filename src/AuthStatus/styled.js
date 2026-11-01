import styled from "styled-components";
import { LogIn, LogOut, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

export const AuthStatusWrapper = styled.li`
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: center;
`;

export const AuthButton = styled.button`
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 0 20px;
  border: 1px solid transparent;
  border-radius: 999px;
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: ${({ theme }) => theme.colors.white};
  font: inherit;
  font-size: 0.9rem;
  font-weight: 750;
  white-space: nowrap;
  box-shadow: 0 8px 20px rgba(128, 82, 214, 0.2);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    filter 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    filter: saturate(1.08);
    box-shadow: 0 12px 25px rgba(128, 82, 214, 0.28);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.volunteerFocusRing};
    outline-offset: 3px;
  }

  &:disabled {
    cursor: wait;
    opacity: 0.7;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    min-height: 48px;
  }
`;

export const LoginIcon = styled(LogIn)`
  width: 17px;
  height: 17px;
  flex: none;
`;

export const LogoutIcon = styled(LogOut)`
  width: 16px;
  height: 16px;
  flex: none;
`;

export const ProfileLink = styled(Link)`
  display: inline-flex;
  min-height: 38px;
  flex: none;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 14px;
  border: 1px solid transparent;
  border-radius: 999px;
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8rem;
  font-weight: 750;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 7px 17px rgba(128, 82, 214, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 21px rgba(128, 82, 214, 0.26);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.volunteerFocusRing};
    outline-offset: 3px;
  }
`;

export const ProfileIcon = styled(UserRound)`
  width: 16px;
  height: 16px;
  flex: none;
`;

export const UserStatus = styled.div`
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: center;
  gap: 9px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const LogoutButton = styled.button`
  display: inline-flex;
  min-height: 38px;
  flex: none;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.palePurple};
  color: ${({ theme }) => theme.colors.primary};
  font: inherit;
  font-size: 0.78rem;
  font-weight: 700;
  white-space: nowrap;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.volunteerBorderHover};
    background: ${({ theme }) => theme.colors.palePink};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.volunteerFocusRing};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0;
    padding: 0 10px;

    span {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
    }
  }
`;

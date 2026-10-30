import styled, { css } from "styled-components";

export const NavigationWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 2.5rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 12px 28px rgba(91, 109, 255, 0.08);
  border-bottom: 1px solid rgba(91, 109, 255, 0.08);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-wrap: wrap;
    padding: 0.9rem 1rem;
  }
`;

export const LogoBox = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.55rem;
  font-weight: 800;
  letter-spacing: -0.04em;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    color: ${({ theme }) => theme.colors.primary};
    transition: transform 0.2s ease;
  }

  a:hover {
    transform: translateY(-1px);
  }

  span {
    color: ${({ theme }) => theme.colors.secondary};
    text-shadow: 0 0 10px rgba(166, 108, 255, 0.2);
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.35rem;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    rgba(238, 243, 255, 0.95),
    rgba(253, 240, 250, 0.9)
  );
  border: 1px solid rgba(91, 109, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    0 8px 18px rgba(91, 109, 255, 0.06);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.8rem;
    margin-top: 0.5rem;
    border-radius: 1rem;
    background: linear-gradient(
      180deg,
      rgba(233, 239, 255, 0.98),
      rgba(249, 236, 247, 0.98)
    );
    border: 1px solid rgba(91, 109, 255, 0.12);
    box-shadow: 0 18px 30px rgba(91, 109, 255, 0.12);
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(0)" : "translateY(-8px)"};
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    a {
      width: 100%;
      justify-content: center;
      text-align: center;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  width: 3rem;
  height: 3rem;
  border-radius: 0.9rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  box-shadow: 0 8px 18px rgba(91, 109, 255, 0.18);
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: inline-flex;
  }
`;

export const MenuIcon = styled.span`
  position: relative;
  width: 1.2rem;
  height: 0.1rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 999px;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1.2rem;
    height: 0.1rem;
    left: 0;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 999px;
    transition: all 0.3s ease;
  }

  &::before {
    top: -0.38rem;
  }

  &::after {
    top: 0.38rem;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      background: transparent;

      &::before {
        transform: translateY(0.38rem) rotate(45deg);
      }

      &::after {
        transform: translateY(-0.38rem) rotate(-45deg);
      }
    `}
`;

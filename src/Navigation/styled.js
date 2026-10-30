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
  background: rgba(26, 42, 37, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 12px 28px rgba(17, 26, 27, 0.12), 0 0 0 1px rgba(242, 178, 103, 0.08);
  border-bottom: 1px solid rgba(242, 178, 103, 0.1);

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
    color: ${({ theme }) => theme.colors.white};
    transition: transform 0.2s ease;
  }

  a:hover {
    transform: translateY(-1px);
  }

  span {
    color: ${({ theme }) => theme.colors.secondary};
    text-shadow: 0 0 14px rgba(242, 178, 103, 0.45);
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.3rem;
  border-radius: 999px;
  background: rgba(29, 42, 38, 0.8);
  border: 1px solid rgba(242, 178, 103, 0.14);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 8px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.8rem;
    margin-top: 0.5rem;
    border-radius: 1rem;
    background: linear-gradient(180deg, rgba(30, 37, 36, 0.96), rgba(19, 25, 24, 0.96));
    border: 1px solid rgba(205, 170, 104, 0.16);
    box-shadow: 0 18px 30px rgba(15, 23, 42, 0.2), 0 0 20px rgba(205, 170, 104, 0.08);
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-8px)")};
    transition: opacity 0.2s ease, transform 0.2s ease;

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
  background: linear-gradient(135deg, rgba(44, 107, 95, 0.95), rgba(242, 178, 103, 0.85));
  box-shadow: 0 8px 18px rgba(242, 178, 103, 0.12), 0 0 18px rgba(242, 178, 103, 0.12);
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
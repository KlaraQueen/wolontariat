import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginItem = styled.li`
  display: flex;
  align-items: center;
`;

export const LoginButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 9.5rem;
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  letter-spacing: 0.01em;
  box-shadow: 0 12px 24px rgba(91, 109, 255, 0.22);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    filter 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.06);
    box-shadow: 0 18px 28px rgba(166, 108, 255, 0.18);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

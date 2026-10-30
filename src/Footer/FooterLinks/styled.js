import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.85rem 1.25rem;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

export const LinkItem = styled.li`
  font-size: 0.9rem;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
  }
`;

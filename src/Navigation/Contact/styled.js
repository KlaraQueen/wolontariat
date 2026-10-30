import styled from "styled-components";

export const ContactWrapper = styled.li`
  a {
    display: inline-flex;
    align-items: center;
    padding: 0.7rem 1rem;
    border-radius: 999px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    transition: all 0.2s ease;
  }

  a:hover {
    background: rgba(91, 109, 255, 0.08);
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
    box-shadow: 0 0 0 1px rgba(91, 109, 255, 0.12);
  }
`;

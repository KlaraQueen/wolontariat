import styled from "styled-components";

export const StartWrapper = styled.li`
  a {
    display: inline-flex;
    align-items: center;
    padding: 0.7rem 1rem;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 600;
    transition: all 0.2s ease;
  }

  a:hover {
    background: rgba(242, 178, 103, 0.12);
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-1px);
    box-shadow: 0 0 0 1px rgba(242, 178, 103, 0.18);
  }
`;
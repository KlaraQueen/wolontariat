import styled from "styled-components";

export const OverviewEyebrow = styled.p`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const OverviewCopy = styled.p`
  max-width: 720px;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 750;
  }
`;

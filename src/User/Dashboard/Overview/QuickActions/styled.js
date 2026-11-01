import styled from "styled-components";

export const ActionsSection = styled.section`
  margin-top: clamp(20px, 3vw, 30px);
`;

export const ActionsHeading = styled.h2`
  margin: 0 0 13px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.12rem;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

export const ActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

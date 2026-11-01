import styled from "styled-components";

export const OverviewWrapper = styled.div`
  width: 100%;
  min-width: 0;
`;

export const OverviewHeader = styled.header`
  margin: 0 0 clamp(22px, 3vw, 34px);
`;

export const OverviewEyebrow = styled.p`
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

export const OverviewTitle = styled.h1`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.9rem, 3.5vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1.1;
`;

export const OverviewLead = styled.p`
  max-width: 760px;
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: clamp(0.96rem, 1.4vw, 1.05rem);
  line-height: 1.7;
`;

export const OverviewColumns = styled.div`
  display: grid;
  grid-template-columns: minmax(270px, 0.8fr) minmax(0, 1.7fr);
  align-items: start;
  gap: clamp(18px, 2.5vw, 28px);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const OverviewAside = styled.aside`
  display: grid;
  min-width: 0;
  gap: 16px;
`;

export const OverviewMainColumn = styled.div`
  display: grid;
  min-width: 0;
  gap: 18px;
`;

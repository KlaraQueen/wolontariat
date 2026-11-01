import styled from "styled-components";

export const SectionPanel = styled.section`
  padding: clamp(22px, 4vw, 40px);
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.surfaceWhite};
  box-shadow: ${({ theme }) => theme.colors.volunteerCardShadow};
`;

export const SectionTitle = styled.h1`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  letter-spacing: -0.035em;
`;

export const SectionDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1rem;
  line-height: 1.7;
`;

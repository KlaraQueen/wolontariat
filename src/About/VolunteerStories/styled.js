import styled from "styled-components";

export const StoriesSection = styled.section`
  width: min(calc(100% - 48px), 1120px);
  margin: clamp(48px, 7vw, 84px) auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 36px), 1120px);
    margin: 44px auto;
  }
`;

export const StoriesHeading = styled.header`
  max-width: 700px;
  margin: 0 auto 34px;
  text-align: center;
`;

export const StoriesTitle = styled.h2`
  margin: 0 0 12px;
  background: linear-gradient(110deg, #8052d6, #d45aa6);
  background-clip: text;
  color: transparent;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1.1;
`;

export const StoriesIntro = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.02rem;
  line-height: 1.7;
`;

export const StoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const StoriesDisclosure = styled.p`
  margin: 18px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.82rem;
  line-height: 1.6;
  text-align: center;
`;

import styled from "styled-components";

export const ValuesSectionWrapper = styled.section`
  padding: clamp(56px, 8vw, 96px) 24px;
  background: linear-gradient(180deg, #f8f2ff, #fff8fc 75%, #fbf7ff);
`;

export const ValuesHeader = styled.div`
  max-width: 720px;
  margin: 0 auto clamp(32px, 5vw, 50px);
  text-align: center;
`;

export const ValuesEyebrow = styled.p`
  margin: 0 0 13px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const ValuesHeading = styled.h2`
  margin: 0 0 14px;
  background: linear-gradient(110deg, #8052d6, #d45aa6);
  background-clip: text;
  color: transparent;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1.1;
`;

export const ValuesIntro = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.02rem;
  line-height: 1.75;
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  width: min(100%, 1120px);
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    width: min(100%, 620px);
  }
`;

import styled from "styled-components";

export const VolunteersPage = styled.main`
  width: 100%;
  padding: clamp(32px, 5vw, 64px) 0 clamp(56px, 8vw, 96px);
`;

export const PageIntro = styled.header`
  width: min(calc(100% - 40px), 780px);
  margin: 0 auto clamp(34px, 5vw, 52px);
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 32px), 780px);
  }
`;

export const IntroIcon = styled.span`
  display: grid;
  width: 54px;
  height: 54px;
  margin: 0 auto 18px;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.volunteerAvatarGradient};
  color: ${({ theme }) => theme.colors.primary};

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const PageEyebrow = styled.p`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

export const PageTitle = styled.h1`
  margin: 0 0 14px;
  background: ${({ theme }) => theme.colors.primaryGradient};
  background-clip: text;
  color: transparent;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -0.055em;
  line-height: 1.08;
`;

export const PageDescription = styled.p`
  max-width: 680px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.muted};
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.75;
`;

import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: min(calc(100% - 40px), 1120px);
  min-height: calc(100vh - 180px);
  margin: 0 auto;
  padding: clamp(24px, 4vw, 48px) 0 clamp(40px, 6vw, 72px);
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 28px), 1120px);
    min-height: calc(100vh - 150px);
    padding-top: 20px;
  }
`;

export const DashboardContent = styled.main`
  width: 100%;
  min-width: 0;
`;

export const WelcomeCard = styled.div`
  padding: clamp(22px, 4vw, 42px);
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.volunteerCardGradient};
  box-shadow: ${({ theme }) => theme.colors.volunteerCardShadow};

  h1 {
    margin: 0 0 0.75rem;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(1.7rem, 3.4vw, 2.35rem);
    letter-spacing: -0.04em;
  }

  p {
    margin-top: 0.7rem;
    color: ${({ theme }) => theme.colors.muted};
    font-size: clamp(0.98rem, 1.5vw, 1.08rem);
    line-height: 1.6;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 750;
  }
`;

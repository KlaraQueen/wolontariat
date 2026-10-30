import styled from "styled-components";

export const TermsWrapper = styled.main`
  width: min(90vw, 980px);
  margin: 56px auto 72px;
  padding: 0 20px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(92vw, 980px);
    margin: 32px auto 48px;
    padding: 0 12px;
  }
`;

export const TermsTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 3vw, 3.2rem);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 28px;
  line-height: 1.15;
  letter-spacing: -0.03em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(1.7rem, 7vw, 2.4rem);
    margin-bottom: 20px;
  }
`;

export const TermsText = styled.p`
  font-size: clamp(0.96rem, 1.5vw, 1.12rem);
  line-height: 1.9;
  color: ${({ theme }) => theme.colors.text};
  white-space: pre-line;
  text-align: left;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(233, 239, 255, 0.7));
  border: 1px solid rgba(91, 109, 255, 0.08);
  border-radius: 24px;
  padding: 28px 30px;
  box-shadow: 0 16px 34px rgba(91, 109, 255, 0.06);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.96rem;
    line-height: 1.8;
    padding: 18px 16px;
    border-radius: 18px;
  }
`;

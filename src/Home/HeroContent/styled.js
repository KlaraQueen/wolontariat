import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: min(100%, 390px);
  min-width: 0;
  margin-right: clamp(0px, 2vw, 28px);
  padding: clamp(12px, 2vw, 24px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: clamp(8px, 1vw, 12px);
  color: #ffffff;
  text-align: left;
  text-shadow: 0 2px 14px rgba(42, 18, 55, 0.52);

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: min(100%, 460px);
    margin: 0 0 0 auto;
    padding: 18px;
    align-self: center;
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    margin: auto 0 0;
    padding: 16px 4px 8px;
    align-self: end;
    gap: 9px;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  max-width: 620px;
  margin: 0;
  font-size: clamp(1.7rem, 2.3vw, 2.3rem);
  font-weight: 800;
  letter-spacing: -0.055em;
  line-height: 0.98;
  color: #ffffff;
  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: clamp(1.8rem, 5vw, 2.6rem);
    color: #ffffff;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(1.65rem, 7vw, 2.1rem);
  }
`;

export const Description = styled.p`
  max-width: 520px;
  margin: 0;
  font-size: clamp(0.92rem, 1vw, 1rem);
  line-height: 1.4;
  color: #ffffff;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    color: rgba(255, 255, 255, 0.96);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

export const CTAButton = styled(Link)`
  display: inline-block;
  margin-top: 2px;
  padding: 10px 22px;
  background: linear-gradient(135deg, #8052d6, #d45aa6);
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: 999px;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
  box-shadow: 0 10px 28px rgba(128, 82, 214, 0.28);

  &:hover {
    background: linear-gradient(135deg, #7040c8, #c94494);
    transform: translateY(-3px);
    box-shadow: 0 14px 34px rgba(212, 90, 166, 0.34);
  }

  &:focus-visible {
    outline: 3px solid #ffffff;
    outline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 13px 25px;
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

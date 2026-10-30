import styled from "styled-components";
import { ArrowRight } from "lucide-react";

export const StoriesSection = styled.section`
  width: min(calc(100% - 40px), 1120px);
  margin: clamp(48px, 7vw, 82px) auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 32px), 1120px);
    margin: 44px auto 52px;
  }
`;

export const StoriesHeader = styled.header`
  max-width: 720px;
  margin: 0 auto clamp(24px, 4vw, 36px);
`;

export const StoriesEyebrow = styled.p`
  margin: 0 0 11px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const StoriesTitle = styled.h2`
  margin: 0 0 11px;
  background: linear-gradient(110deg, #8052d6, #d45aa6);
  background-clip: text;
  color: transparent;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.9rem, 3.8vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1.12;
`;

export const StoriesIntro = styled.p`
  max-width: 650px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.muted};
  font-size: clamp(0.96rem, 1.3vw, 1.04rem);
  line-height: 1.65;
`;

export const StoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: clamp(14px, 2vw, 20px);
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const StoriesFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px 24px;
  margin-top: 21px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const StoriesLink = styled.a`
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 16px;
  border: 1px solid rgba(128, 82, 214, 0.2);
  border-radius: 999px;
  background: #ffffff;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(128, 82, 214, 0.12);
  }
`;

export const StoriesArrow = styled(ArrowRight)`
  width: 17px;
  height: 17px;
  flex: none;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const FAQSectionWrapper = styled.section`
  width: min(calc(100% - 40px), 1120px);
  margin: clamp(52px, 8vw, 92px) auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 32px), 1120px);
    margin: 48px auto 60px;
  }
`;

export const SectionHeading = styled.h2`
  max-width: 760px;
  margin: 0 auto 12px;
  background: linear-gradient(110deg, #8052d6, #d45aa6);
  background-clip: text;
  color: transparent;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 3.8vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.12;
  text-wrap: balance;
`;

export const SectionDescription = styled.p`
  max-width: 620px;
  margin: 0 auto clamp(26px, 4vw, 40px);
  color: ${({ theme }) => theme.colors.muted};
  font-size: clamp(0.98rem, 1.4vw, 1.08rem);
  line-height: 1.7;
`;

export const QuestionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(14px, 2vw, 22px);
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const AllQuestionsLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: clamp(24px, 4vw, 36px);
  padding: 13px 22px;
  border: 1px solid rgba(128, 82, 214, 0.22);
  border-radius: 999px;
  background: #ffffff;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.96rem;
  font-weight: 700;
  box-shadow: 0 8px 22px rgba(128, 82, 214, 0.08);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 12px 26px rgba(128, 82, 214, 0.14);
  }

  &:focus-visible {
    outline: 3px solid rgba(128, 82, 214, 0.3);
    outline-offset: 3px;
  }
`;

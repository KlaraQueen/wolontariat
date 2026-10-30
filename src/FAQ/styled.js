import styled from "styled-components";

export const FAQWrapper = styled.main`
  width: min(90vw, 860px);
  margin: clamp(40px, 7vw, 84px) auto 96px;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(94vw, 900px);
    margin: 40px auto 60px;
    padding: 0 8px;
  }
`;

export const FAQHeading = styled.h1`
  margin: 0 0 16px;
  background: linear-gradient(110deg, #8052d6 8%, #b14fc1 52%, #df5c9d 100%);
  background-clip: text;
  color: transparent;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.05em;
  text-align: center;
`;

export const FAQIntro = styled.p`
  max-width: 620px;
  margin: 0 auto clamp(34px, 5vw, 52px);
  color: #786c83;
  font-size: clamp(1rem, 1.4vw, 1.1rem);
  line-height: 1.65;
  text-align: center;

  &::before {
    display: block;
    width: fit-content;
    margin: 0 auto 14px;
    padding: 7px 13px;
    border: 1px solid rgba(128, 82, 214, 0.16);
    border-radius: 999px;
    background: #f3eafe;
    color: #7546c1;
    content: "CENTRUM POMOCY";
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.13em;
    line-height: 1.2;
  }
`;

export const FAQList = styled.div`
  display: grid;
  gap: 12px;
`;

export const FAQItem = styled.details`
  padding: 0 24px;
  overflow: hidden;
  border: 1px solid #eee5f5;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 7px 22px rgba(72, 43, 102, 0.045);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: #e2c9f3;
    box-shadow: 0 12px 28px rgba(128, 82, 214, 0.1);
  }

  &[open] {
    border-color: #e9c5e5;
    background: linear-gradient(135deg, #ffffff 35%, #fff8fc 100%);
    box-shadow: 0 14px 30px rgba(181, 79, 193, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 16px;
    border-radius: 16px;
  }
`;

export const FAQQuestion = styled.summary`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 76px;
  padding: 18px 54px 18px 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.04rem;
  font-weight: 650;
  line-height: 1.5;
  cursor: pointer;
  list-style: none;
  transition: color 0.2s ease;

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    position: absolute;
    top: 50%;
    right: 0;
    display: grid;
    width: 34px;
    height: 34px;
    place-items: center;
    border: 1px solid #eadcf8;
    border-radius: 50%;
    background: #f8f2ff;
    color: #8052d6;
    content: "+";
    font-size: 1.25rem;
    font-weight: 500;
    transform: translateY(-50%);
    transition:
      transform 0.2s ease,
      background-color 0.2s ease,
      color 0.2s ease;
  }

  details[open] &::after {
    content: "−";
    transform: translateY(-50%) rotate(180deg);
    border-color: #8052d6;
    background: #8052d6;
    color: #ffffff;
  }

  details[open] & {
    color: #7546c1;
  }

  &:focus-visible {
    border-radius: 8px;
    outline: 3px solid rgba(128, 82, 214, 0.32);
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 70px;
    padding: 16px 42px 16px 0;
    font-size: 0.98rem;

    &::after {
      width: 30px;
      height: 30px;
    }
  }
`;

export const FAQAnswer = styled.p`
  margin: 0 0 24px;
  padding: 18px 0 0 52px;
  border-top: 1px solid #f0e8f4;
  color: #786c83;
  font-size: 0.98rem;
  line-height: 1.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 20px;
    padding: 15px 0 0;
    font-size: 0.94rem;
    line-height: 1.7;
  }
`;

export const FAQContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin: 2px 3px;
  padding: 6px 11px;
  border: 1px solid rgba(128, 82, 214, 0.16);
  border-radius: 999px;
  background: #f5efff;
  color: #7546c1;
  font-size: 0.93em;
  font-weight: 650;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(212, 90, 166, 0.34);
    background: #fcebf5;
    box-shadow: 0 4px 12px rgba(212, 90, 166, 0.14);
  }

  &:focus-visible {
    border-radius: 3px;
    outline: 2px solid #8052d6;
    outline-offset: 3px;
  }
`;

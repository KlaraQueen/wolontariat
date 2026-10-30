import styled from "styled-components";
import { Link } from "react-router-dom";

export const JoinSectionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(calc(100% - 48px), 1120px);
  margin: clamp(56px, 8vw, 96px) auto;
  padding: clamp(38px, 6vw, 64px) 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 32px;
  background: linear-gradient(120deg, #7148c4, #a54ebd 52%, #d45aa6);
  color: #ffffff;
  text-align: center;
  box-shadow: 0 24px 60px rgba(128, 82, 214, 0.2);

  &::before,
  &::after {
    position: absolute;
    width: 240px;
    height: 240px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 50%;
    content: "";
    pointer-events: none;
  }

  &::before {
    top: -150px;
    left: -90px;
  }

  &::after {
    right: -100px;
    bottom: -180px;
    width: 320px;
    height: 320px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 36px), 1120px);
    margin: 48px auto;
    border-radius: 24px;
  }
`;

export const JoinIcon = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  width: 56px;
  height: 56px;
  margin-bottom: 18px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
`;

export const JoinTitle = styled.h2`
  position: relative;
  z-index: 1;
  margin: 0 0 12px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 3.8vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.12;
`;

export const JoinDescription = styled.p`
  position: relative;
  z-index: 1;
  max-width: 580px;
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 1.02rem;
  line-height: 1.7;
`;

export const JoinLink = styled(Link)`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
  padding: 14px 22px;
  border-radius: 999px;
  background: #ffffff;
  color: #7546c1;
  font-weight: 750;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 26px rgba(43, 20, 67, 0.2);
  }

  &:focus-visible {
    outline: 3px solid #ffffff;
    outline-offset: 4px;
  }
`;

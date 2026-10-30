import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroSection = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.95fr);
  align-items: center;
  gap: clamp(32px, 6vw, 84px);
  width: min(calc(100% - 48px), 1180px);
  min-height: 570px;
  margin: 0 auto;
  padding: clamp(56px, 8vw, 100px) 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    min-height: 0;
    gap: 38px;
    padding: 60px 0 52px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 36px), 1180px);
    gap: 28px;
    padding: 44px 0 40px;
  }
`;

export const HeroCopy = styled.div`
  position: relative;
  z-index: 1;
  max-width: 650px;
`;

export const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 22px;
  padding: 9px 14px;
  border: 1px solid rgba(128, 82, 214, 0.16);
  border-radius: 999px;
  background: #f3eafe;
  color: #7546c1;
  font-size: 0.78rem;
  font-weight: 750;
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  max-width: 690px;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.7rem, 5.5vw, 5rem);
  font-weight: 800;
  letter-spacing: -0.065em;
  line-height: 1.02;

  em {
    color: ${({ theme }) => theme.colors.primary};
    font-style: normal;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(2.5rem, 12vw, 3.6rem);
  }
`;

export const HeroDescription = styled.p`
  max-width: 570px;
  margin: 23px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: clamp(1.05rem, 1.55vw, 1.22rem);
  line-height: 1.75;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 13px;
  margin-top: 32px;
`;

export const PrimaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  background: linear-gradient(120deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: #ffffff;
  font-weight: 700;
  box-shadow: 0 12px 26px rgba(128, 82, 214, 0.22);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 32px rgba(128, 82, 214, 0.3);
  }
`;

export const SecondaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 50px;
  padding: 0 18px;
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 650;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const HeroArtwork = styled.div`
  position: relative;
  display: grid;
  min-height: 390px;
  place-items: center;
  border: 1px solid rgba(128, 82, 214, 0.1);
  border-radius: 42% 58% 55% 45% / 48% 42% 58% 52%;
  background: linear-gradient(145deg, #f1e8ff, #fcebf5 72%, #fff2ec);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(100%, 560px);
    min-height: 340px;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 290px;
    border-radius: 34px;
  }
`;

export const ArtworkCircle = styled.div`
  position: absolute;
  width: min(66%, 290px);
  aspect-ratio: 1;
  border: 1px solid rgba(128, 82, 214, 0.12);
  border-radius: 50%;
  background: radial-gradient(circle at 36% 30%, #ffffff 0, #f7eaff 58%, #f5dced 100%);
  box-shadow: 0 28px 70px rgba(103, 61, 147, 0.12);

  &::before,
  &::after {
    position: absolute;
    border-radius: 50%;
    content: "";
  }

  &::before {
    top: 12%;
    right: -9%;
    width: 42px;
    height: 42px;
    background: #f3b2d8;
  }

  &::after {
    bottom: 9%;
    left: -12%;
    width: 24px;
    height: 24px;
    background: #cbb1f4;
  }
`;

export const MainIllustration = styled.div`
  position: relative;
  display: grid;
  width: 170px;
  height: 170px;
  place-items: center;
  border: 1px solid rgba(128, 82, 214, 0.12);
  border-radius: 38px;
  background: linear-gradient(145deg, #ffffff, #f7edff);
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 24px 60px rgba(103, 61, 147, 0.18);
  transform: rotate(-7deg);

  .heart-accent {
    position: absolute;
    top: -18px;
    right: -15px;
    color: ${({ theme }) => theme.colors.secondary};
    filter: drop-shadow(0 6px 12px rgba(212, 90, 166, 0.25));
  }
`;

export const FloatingNote = styled.div`
  position: absolute;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px 12px 12px;
  border: 1px solid rgba(128, 82, 214, 0.1);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.94);
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.88rem;
  font-weight: 700;
  box-shadow: 0 14px 32px rgba(68, 42, 91, 0.1);
  backdrop-filter: blur(8px);

  &.note-top {
    top: 18%;
    left: 2%;
  }

  &.note-bottom {
    right: 0;
    bottom: 15%;
  }

  .note-icon {
    display: grid;
    width: 32px;
    height: 32px;
    place-items: center;
    border-radius: 11px;
    background: #f8e9f5;
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 9px 11px 9px 9px;
    font-size: 0.76rem;

    &.note-top {
      top: 10%;
      left: 0;
    }

    &.note-bottom {
      right: 0;
      bottom: 9%;
    }
  }
`;

import styled from "styled-components";

export const MissionSectionWrapper = styled.section`
  display: grid;
  grid-template-columns: minmax(280px, 0.8fr) minmax(0, 1.2fr);
  align-items: center;
  gap: clamp(42px, 8vw, 112px);
  width: min(calc(100% - 48px), 1080px);
  margin: 0 auto;
  padding: clamp(48px, 7vw, 84px) 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 36px), 1080px);
    padding: 38px 0;
  }
`;

export const MissionVisual = styled.div`
  position: relative;
  display: grid;
  min-height: 340px;
  place-items: center;
  overflow: hidden;
  border: 1px solid rgba(128, 82, 214, 0.12);
  border-radius: 32px;
  background:
    radial-gradient(circle at 75% 22%, rgba(255, 255, 255, 0.86) 0 7%, transparent 7.5%),
    radial-gradient(circle at 18% 82%, rgba(255, 255, 255, 0.54) 0 12%, transparent 12.5%),
    linear-gradient(145deg, #eee4ff, #f8e5f3 60%, #ffece7);

  &::before,
  &::after {
    position: absolute;
    border: 1px solid rgba(128, 82, 214, 0.12);
    border-radius: 50%;
    content: "";
  }

  &::before {
    width: 230px;
    height: 230px;
  }

  &::after {
    width: 280px;
    height: 280px;
    border-color: rgba(212, 90, 166, 0.13);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 260px;
    border-radius: 24px;
  }
`;

export const VisualIcon = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  width: 132px;
  height: 132px;
  place-items: center;
  border: 1px solid rgba(128, 82, 214, 0.12);
  border-radius: 36px;
  background: linear-gradient(145deg, #ffffff, #f8edff);
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 22px 50px rgba(94, 58, 135, 0.17);
  transform: rotate(-8deg);
`;

export const VisualLabel = styled.span`
  position: absolute;
  right: 12%;
  bottom: 14%;
  z-index: 2;
  padding: 11px 16px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  color: #7546c1;
  font-size: 0.84rem;
  font-weight: 750;
  box-shadow: 0 10px 24px rgba(72, 43, 102, 0.09);
`;

export const MissionCopy = styled.div``;

export const MissionEyebrow = styled.p`
  margin: 0 0 14px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const MissionHeading = styled.h2`
  margin: 0 0 22px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1.12;
`;

export const MissionParagraph = styled.p`
  margin: 0 0 14px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.02rem;
  line-height: 1.8;
`;

export const MissionNote = styled.p`
  margin: 25px 0 0;
  padding: 14px 18px;
  border-left: 3px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0 14px 14px 0;
  background: linear-gradient(90deg, #f8eafa, rgba(248, 234, 250, 0.2));
  color: #7546c1;
  font-weight: 700;
  line-height: 1.6;
`;

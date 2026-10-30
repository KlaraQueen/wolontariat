import styled from "styled-components";
import { Link } from "react-router-dom";

export const AboutPreviewWrapper = styled.section`
  width: min(calc(100% - 40px), 1120px);
  margin: clamp(44px, 7vw, 82px) auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 32px), 1120px);
    margin: 44px auto 52px;
  }
`;

export const PreviewHeader = styled.header`
  max-width: 720px;
  margin: 0 auto 28px;
`;

export const PreviewEyebrow = styled.p`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const PreviewTitle = styled.h2`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 3.8vw, 2.7rem);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.12;
`;

export const PreviewDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1rem;
  line-height: 1.65;
`;

export const AboutTileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const MoreAboutLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: 24px;
  padding: 12px 20px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorderStrong};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surfaceWhite};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  box-shadow: ${({ theme }) => theme.colors.volunteerControlShadow};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.colors.volunteerCardShadowHover};
  }
`;

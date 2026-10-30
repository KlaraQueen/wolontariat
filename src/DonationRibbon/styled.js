import styled from "styled-components";

export const RibbonPanel = styled.aside`
  position: fixed;
  right: clamp(12px, 2vw, 24px);
  bottom: clamp(12px, 2vw, 24px);
  z-index: 50;
  display: grid;
  grid-template-columns: 90px minmax(0, 1fr) 30px;
  align-items: center;
  gap: 14px;
  width: min(390px, calc(100vw - 24px));
  padding: 12px;
  border: 1px solid rgba(128, 82, 214, 0.18);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 18px 48px rgba(44, 28, 62, 0.2);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    right: 10px;
    bottom: 10px;
    left: 10px;
    grid-template-columns: 72px minmax(0, 1fr) 28px;
    gap: 10px;
    width: auto;
    padding: 9px;
    border-radius: 18px;
  }
`;

export const CampaignImage = styled.img`
  display: block;
  width: 90px;
  height: 110px;
  border-radius: 15px;
  background: #f3eafe;
  object-fit: cover;
  object-position: 34% center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 72px;
    height: 90px;
    border-radius: 12px;
  }
`;

export const CampaignCopy = styled.div`
  min-width: 0;
  padding: 2px 0;
`;

export const CampaignEyebrow = styled.p`
  margin: 0 0 3px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

export const CampaignTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.08rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.2;
`;

export const CampaignText = styled.p`
  display: -webkit-box;
  margin: 5px 0 8px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.78rem;
  line-height: 1.42;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const CampaignLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  padding: 7px 11px;
  border-radius: 999px;
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: #ffffff;
  font-size: 0.74rem;
  font-weight: 750;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(128, 82, 214, 0.24);
  }

  &:focus-visible {
    outline: 3px solid rgba(128, 82, 214, 0.38);
    outline-offset: 3px;
  }
`;

export const ToggleButton = styled.button`
  display: grid;
  width: 28px;
  height: 28px;
  align-self: start;
  place-items: center;
  border-radius: 50%;
  background: #f3eafe;
  color: #7546c1;
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: #eadcf8;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const CollapsedButton = styled.button`
  position: fixed;
  right: clamp(12px, 2vw, 24px);
  bottom: clamp(12px, 2vw, 24px);
  z-index: 50;
  width: 76px;
  height: 76px;
  padding: 4px;
  overflow: hidden;
  border: 2px solid #ffffff;
  border-radius: 22px;
  background: #ffffff;
  box-shadow: 0 12px 32px rgba(44, 28, 62, 0.23);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px) scale(1.02);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    right: 12px;
    bottom: 12px;
    width: 68px;
    height: 68px;
    border-radius: 19px;
  }
`;

export const CollapsedImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  object-position: 34% center;
`;

export const CollapsedHeart = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  display: grid;
  width: 25px;
  height: 25px;
  place-items: center;
  border-radius: 11px 0 0 0;
  background: ${({ theme }) => theme.colors.secondary};
  color: #ffffff;
`;

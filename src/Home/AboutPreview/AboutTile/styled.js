import styled from "styled-components";

export const Tile = styled.article`
  position: relative;
  display: block;
  min-width: 0;
  padding: 23px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.volunteerCardGradient};
  color: inherit;
  box-shadow: ${({ theme }) => theme.colors.volunteerCardShadow};
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.colors.volunteerCardShadowHover};
  }

  .tile-arrow {
    position: absolute;
    top: 24px;
    right: 23px;
    color: ${({ theme }) => theme.colors.quoteMark};
  }
`;

export const TileIcon = styled.span`
  display: grid;
  width: 44px;
  height: 44px;
  margin-bottom: 17px;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.volunteerAvatarGradient};
  color: ${({ theme }) => theme.colors.primary};
`;

export const TileTitle = styled.h3`
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.08rem;
  font-weight: 750;
`;

export const TileDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.94rem;
  line-height: 1.65;
`;

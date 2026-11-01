import styled from "styled-components";

export const ActionCard = styled.article`
  position: relative;
  display: grid;
  min-width: 0;
  grid-template-columns: 42px minmax(0, 1fr);
  align-content: start;
  column-gap: 12px;
  row-gap: 8px;
  padding: 17px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 17px;
  background: ${({ theme }) => theme.colors.surfaceWhite};
  color: inherit;
  text-decoration: none;
  box-shadow: 0 7px 20px rgba(72, 43, 102, 0.035);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.volunteerBorderHover};
    box-shadow: ${({ theme }) => theme.colors.volunteerCardShadowHover};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.volunteerFocusRing};
    outline-offset: 3px;
  }
`;

export const ActionIcon = styled.span`
  display: grid;
  width: 42px;
  height: 42px;
  grid-row: span 2;
  place-items: center;
  border-radius: 13px;
  background: ${({ theme }) => theme.colors.volunteerAvatarGradient};
  color: ${({ theme }) => theme.colors.primary};

  svg {
    width: 19px;
    height: 19px;
  }
`;

export const ActionTitle = styled.h3`
  align-self: end;
  margin: 0;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.88rem;
  font-weight: 750;
  line-height: 1.35;
`;

export const ActionDescription = styled.p`
  grid-column: 2;
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.74rem;
  line-height: 1.5;
`;

export const ActionArrow = styled.span`
  position: absolute;
  top: 17px;
  right: 15px;
  display: inline-flex;
  color: ${({ theme }) => theme.colors.secondary};

  svg {
    width: 16px;
    height: 16px;
  }
`;

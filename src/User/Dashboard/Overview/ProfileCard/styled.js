import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfilePanel = styled.section`
  min-width: 0;
  padding: clamp(18px, 2.4vw, 25px);
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.surfaceWhite};
  box-shadow: ${({ theme }) => theme.colors.volunteerCardShadow};
`;

export const ProfileHeader = styled.header`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
`;

const AvatarStyles = `
  display: grid;
  width: 66px;
  height: 66px;
  flex: none;
  place-items: center;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.surfaceWhite};
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.volunteerAvatarGradient};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.3rem;
  font-weight: 800;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.volunteerBorder};
`;

export const AvatarImage = styled.img`
  ${AvatarStyles}
  object-fit: cover;
`;

export const AvatarFallback = styled.div`
  ${AvatarStyles}
`;

export const ProfileIdentity = styled.div`
  min-width: 0;
`;

export const ProfileName = styled.h2`
  overflow: hidden;
  margin: 0 0 5px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.08rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const VolunteerId = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.73rem;
  line-height: 1.45;
`;

export const StatusBadge = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBadgeBorder};
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.palePink};
  color: ${({ theme }) => theme.colors.rose};

  strong,
  small {
    display: block;
  }

  strong {
    margin-bottom: 3px;
    font-size: 0.82rem;
  }

  small {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.72rem;
    line-height: 1.45;
  }
`;

export const StatusIcon = styled.span`
  display: grid;
  width: 30px;
  height: 30px;
  flex: none;
  place-items: center;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.surfaceWhite};

  svg {
    width: 17px;
    height: 17px;
  }
`;

export const ProfileDetails = styled.div`
  display: grid;
  gap: 15px;
  margin: 20px 0;
`;

export const DetailRow = styled.div`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 11px;

  > span:last-child {
    display: grid;
    min-width: 0;
    gap: 3px;
  }

  small {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.72rem;
  }

  strong {
    overflow-wrap: anywhere;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.81rem;
    font-weight: 650;
    line-height: 1.45;
  }
`;

export const DetailIcon = styled.span`
  display: grid;
  width: 34px;
  height: 34px;
  flex: none;
  place-items: center;
  border-radius: 11px;
  background: ${({ theme }) => theme.colors.palePurple};
  color: ${({ theme }) => theme.colors.primary};

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ProfileAction = styled(Link)`
  display: flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 14px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorderStrong};
  border-radius: 13px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.85rem;
  font-weight: 750;
  text-decoration: none;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.paleRose};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.volunteerFocusRing};
    outline-offset: 2px;
  }
`;

export const ActionIcon = styled.span`
  display: inline-flex;

  svg {
    width: 15px;
    height: 15px;
  }
`;

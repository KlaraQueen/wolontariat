import styled from "styled-components";
import { MapPin, Sparkles, UsersRound } from "lucide-react";

export const ProfileCard = styled.article`
  display: flex;
  min-width: 0;
  min-height: 250px;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.volunteerCardGradient};
  box-shadow: ${({ theme }) => theme.colors.volunteerCardShadow};
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.volunteerBorderHover};
    box-shadow: ${({ theme }) => theme.colors.volunteerCardShadowHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 0;
  }
`;

export const ProfileAvatar = styled.span`
  display: grid;
  width: 48px;
  height: 48px;
  margin-bottom: 14px;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.volunteerAvatarGradient};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 800;
`;

export const ProfileName = styled.h2`
  margin: 0 0 7px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.06rem;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

export const ProfileCity = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 14px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.82rem;

  svg {
    width: 14px;
    height: 14px;
    flex: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProfileArea = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin: 0 0 18px;
  color: ${({ theme }) => theme.colors.volunteerInk};
  font-size: 0.9rem;
  line-height: 1.5;

  svg {
    width: 15px;
    height: 15px;
    flex: none;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ExperienceBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  padding: 6px 9px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBadgeBorder};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.palePink};
  color: ${({ theme }) => theme.colors.rose};
  font-size: 0.74rem;
  font-weight: 700;

  svg {
    width: 14px;
    height: 14px;
    flex: none;
  }
`;

export const MapPinIcon = styled(MapPin)``;
export const SparklesIcon = styled(Sparkles)``;
export const UsersRoundIcon = styled(UsersRound)``;

import styled from "styled-components";
import { MapPin, Quote, Sparkles } from "lucide-react";

export const StoryCard = styled.article`
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 250px;
  flex-direction: column;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.volunteerCardGradient};
  box-shadow: ${({ theme }) => theme.colors.volunteerCardShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 0;
    padding: 21px;
  }
`;

export const QuoteIcon = styled(Quote)`
  position: absolute;
  top: 21px;
  right: 22px;
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.colors.quoteMark};
`;

export const LocationIcon = styled(MapPin)`
  width: 14px;
  height: 14px;
  flex: none;
`;

export const TenureIcon = styled(Sparkles)`
  width: 14px;
  height: 14px;
  flex: none;
`;

export const StoryMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 12px;
  padding-right: 28px;
`;

export const StoryName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 800;
`;

export const StoryLocation = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.84rem;
`;

export const StoryQuote = styled.p`
  margin: 20px 0 24px;
  color: ${({ theme }) => theme.colors.volunteerInk};
  font-size: 0.97rem;
  line-height: 1.75;
`;

export const StoryTenure = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  width: fit-content;
  margin-top: auto;
  padding: 7px 10px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBadgeBorder};
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.palePink};
  color: ${({ theme }) => theme.colors.rose};
  font-size: 0.78rem;
  font-weight: 700;
`;

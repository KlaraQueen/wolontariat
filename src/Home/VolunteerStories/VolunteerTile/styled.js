import styled from "styled-components";
import { MapPin, Quote, Sparkles } from "lucide-react";

export const Tile = styled.article`
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 100%;
  flex-direction: column;
  padding: clamp(18px, 2.2vw, 24px);
  border: 1px solid rgba(128, 82, 214, 0.12);
  border-radius: 22px;
  background: linear-gradient(145deg, #ffffff 15%, #fff8fc 100%);
  box-shadow: 0 10px 28px rgba(72, 43, 102, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(212, 90, 166, 0.25);
    box-shadow: 0 16px 34px rgba(128, 82, 214, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 0;
  }
`;

export const TileTop = styled.div`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 12px;

`;

export const QuoteIcon = styled(Quote)`
  width: 22px;
  height: 22px;
  margin-left: auto;
  flex: none;
  color: #d7c6ed;
`;

export const LocationIcon = styled(MapPin)`
  width: 13px;
  height: 13px;
  flex: none;
`;

export const TenureIcon = styled(Sparkles)`
  width: 14px;
  height: 14px;
  flex: none;
`;

export const PersonInitial = styled.span`
  display: grid;
  width: 46px;
  height: 46px;
  flex: none;
  place-items: center;
  border: 1px solid rgba(128, 82, 214, 0.14);
  border-radius: 15px;
  background: linear-gradient(145deg, #f3eafe, #fcebf5);
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 800;
`;

export const PersonDetails = styled.div`
  display: grid;
  min-width: 0;
  gap: 4px;
`;

export const PersonName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.03rem;
  font-weight: 800;
`;

export const PersonCity = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.78rem;
`;

export const QuoteText = styled.p`
  margin: 17px 0 19px;
  color: #554660;
  font-size: 0.91rem;
  line-height: 1.65;
`;

export const TileTenure = styled.span`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  padding: 6px 9px;
  border: 1px solid rgba(212, 90, 166, 0.14);
  border-radius: 999px;
  background: #fff0f8;
  color: #a1488b;
  font-size: 0.74rem;
  font-weight: 700;
`;

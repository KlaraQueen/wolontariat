import styled from "styled-components";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

export const DirectoryWrapper = styled.section`
  width: min(calc(100% - 40px), 1120px);
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(calc(100% - 32px), 1120px);
  }
`;

export const DirectoryControls = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(190px, 250px);
  gap: 12px;
  margin-bottom: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const SearchField = styled.label`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 11px;
  min-height: 52px;
  padding: 0 15px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.surfaceWhite};
  box-shadow: ${({ theme }) => theme.colors.volunteerControlShadow};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.volunteerFocusRing};
  }
`;

export const SearchIcon = styled(Search)`
  width: 19px;
  height: 19px;
  flex: none;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SearchInput = styled.input`
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font: inherit;
  font-size: 0.95rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
    opacity: 0.8;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

export const ClearSearchButton = styled.button`
  display: grid;
  width: 30px;
  height: 30px;
  flex: none;
  place-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.muted};

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.palePink};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const CityFilter = styled.select`
  width: 100%;
  min-height: 52px;
  padding: 0 14px;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 16px;
  appearance: none;
  background: ${({ theme }) => theme.colors.surfaceWhite};
  color: ${({ theme }) => theme.colors.text};
  font: inherit;
  font-size: 0.94rem;
  box-shadow: ${({ theme }) => theme.colors.volunteerControlShadow};

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.volunteerFocusRing};
    outline-offset: 2px;
  }
`;

export const ResultSummary = styled.p`
  min-height: 24px;
  margin: 0 0 17px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.86rem;
`;

export const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyState = styled.p`
  margin: 0;
  padding: 40px 20px;
  border: 1px dashed ${({ theme }) => theme.colors.volunteerBorderStrong};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`;

export const Pagination = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 30px;
`;

export const PageButton = styled.button`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.volunteerBorder};
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.surfaceWhite};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.colors.volunteerControlShadow};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.palePink};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.volunteerFocusRing};
    outline-offset: 2px;
  }
`;

export const ChevronLeftIcon = styled(ChevronLeft)`
  width: 19px;
  height: 19px;
`;

export const ChevronRightIcon = styled(ChevronRight)`
  width: 19px;
  height: 19px;
`;

export const PageIndicator = styled.span`
  min-width: 100px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
`;

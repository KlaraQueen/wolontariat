import styled from "styled-components";

export const Tile = styled.article`
  position: relative;
  min-width: 0;
  overflow: hidden;
  border: 1px solid rgba(128, 82, 214, 0.12);
  border-radius: 22px;
  background: linear-gradient(145deg, #ffffff 12%, #fffaff 100%);
  box-shadow: 0 10px 28px rgba(72, 43, 102, 0.055);
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #8052d6, #d45aa6);
    content: "";
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(212, 90, 166, 0.3);
    box-shadow: 0 18px 38px rgba(128, 82, 214, 0.12);
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
    border-color: rgba(212, 90, 166, 0.3);
    background: linear-gradient(145deg, #ffffff 12%, #fff7fc 100%);
  `}

`;

export const TileIcon = styled.span`
  display: grid;
  width: 42px;
  height: 42px;
  flex: none;
  place-items: center;
  border: 1px solid rgba(128, 82, 214, 0.12);
  border-radius: 14px;
  background: linear-gradient(145deg, #f3eafe, #fcebf5);
  color: ${({ theme }) => theme.colors.primary};
`;

export const TileQuestion = styled.button`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr) 22px;
  align-items: center;
  gap: 14px;
  min-height: 112px;
  margin: 0;
  padding: 20px 22px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.02rem, 1.4vw, 1.16rem);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.4;
  cursor: pointer;
  text-align: left;
  border: 0;
  background: transparent;
  font-family: inherit;
  width: 100%;

  &[aria-expanded="true"] .expand-icon {
    transform: rotate(180deg);
  }

  .expand-icon {
    color: ${({ theme }) => theme.colors.primary};
    transition: transform 0.2s ease;
  }

  &:focus-visible {
    outline: 3px solid rgba(128, 82, 214, 0.3);
    outline-offset: -5px;
    border-radius: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 94px;
    gap: 10px;
    padding: 16px;
    font-size: 0.98rem;
  }
`;

export const TileAnswer = styled.p`
  margin: 0 22px 22px;
  padding: 16px 0 0;
  border-top: 1px solid rgba(128, 82, 214, 0.12);
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.94rem;
  line-height: 1.7;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 16px 16px;
    padding-top: 12px;
    font-size: 0.9rem;
  }
`;

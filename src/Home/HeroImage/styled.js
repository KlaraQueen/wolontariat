import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: absolute;
  z-index: 0;
  inset: 0;
  overflow: hidden;
  background: #183b56;
`;

export const StyledImage = styled.img`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 48%;
  opacity: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    object-position: 38% center;
  }
`;

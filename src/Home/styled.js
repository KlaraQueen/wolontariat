import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
`;

export const HeroSection = styled.section`
  position: relative;
  display: grid;
  place-items: center end;
  width: 100%;
  aspect-ratio: 2224 / 480;
  padding: clamp(12px, 2vw, 24px) clamp(16px, 3vw, 42px);
  overflow: hidden;
  isolation: isolate;
  background: #183b56;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    aspect-ratio: auto;
    min-height: clamp(300px, 42vw, 380px);
    padding: 22px clamp(20px, 5vw, 56px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: clamp(250px, 48vw, 320px);
    padding: 14px 20px;
  }
`;
